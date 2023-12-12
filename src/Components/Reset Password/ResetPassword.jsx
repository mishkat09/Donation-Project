import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleResetPassword = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    console.log(email)
    resetPassword(email)

      .then(() => {
        toast.success("Link sent to your email");
        navigate("/login");
      })
      .catch((error) => {
        toast.error("Invalid or Unauthorized email ");
        console.log(error)
      });
  };
  return (
    <div>
      <div className="container mx-auto text-center text-3xl font-medium">
        Reset Password
      </div>
      <div>
        <div className="container mx-auto">
          <form
            className="card-body"
            onSubmit={() => handleResetPassword(event)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                required
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Have an account?
                </Link>
              </label>
              <label className="label">
                <Link
                  to="/registration"
                  className="label-text-alt link link-hover"
                >
                  Register Here
                </Link>
              </label>
            </div>
            <div className=" mt-6">
              <button className="btn outline-none border-none">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
