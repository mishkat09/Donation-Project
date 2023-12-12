import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const LogIn = () => {
  const { signIn, googleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogIn()
      .then((result) => {
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((err) => toast.error("error occured"));
  };
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((error) => toast.error("User Not Valid"));
  };
  return (
    <div>
      <div className="container mx-auto text-center text-3xl font-medium">
        Login Here
      </div>
      <div>
        <div>
          <div className="container mx-auto">
            <form className="card-body" onSubmit={() => handleLogin(event)}>
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
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  name="password"
                />
                <label className="label">
                  <Link
                    to="/forgotpassword"
                    className="label-text-alt link link-hover"
                  >
                    Forgot password?
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
                <button className="btn outline-none border-none">Login</button>
              </div>
              <div className=" mt-6 flex ">
                <button
                  className="btn  text-white  outline-none border-none"
                  onClick={handleGoogleLogin}
                >
                  {" "}
                  <FcGoogle></FcGoogle>{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
