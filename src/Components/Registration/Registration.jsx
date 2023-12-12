import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import toast from "react-hot-toast";

const Registration = () => {
  const { createUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    if (/^(?![A-Z])(?![\W_]).*$/.test(password)) {
      toast.error(
        "password must be more than 6 characters,should have capital letters, and special characters"
      );
      return;
    }

    createUser(email, password)
    .then((result) => {
      profileUpdate(name, photo)
        .then((result) => {
          toast.success("User Created successfully");
          form.reset();
          navigate("/");
        })
        .catch((error) => {
          toast.error("Error Occured");
        });
    });
  };
  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl  text-center mt-5">Register Here</h1>
        </div>
        <form className="card-body" onSubmit={() => handleRegister(event)}>
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
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              required
              placeholder="Name"
              className="input input-bordered"
              name="name"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              required
              placeholder="Photo Url"
              className="input input-bordered"
              name="photo"
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
              <Link to="/login" className="label-text-alt link link-hover">
                Already Have an Account?
              </Link>
            </label>
          </div>
          <div className=" mt-6">
            <button className="btn outline-none border-none">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
