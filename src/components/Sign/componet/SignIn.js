import React from "react";
import { useNavigate } from "react-router-dom";
export const SignIn = () => {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate('/trade');
  };
  return (
    <div className="SignInWrapper">
      <form className="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname" className="">
            First Name
          </label>
          <input
            id="firstname"
            placeholder="First Name"
            type="text"
            className="form-control form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="">
            Email
          </label>
          <input
            id="email"
            placeholder="Enter Email"
            type="Email"
            className="form-control form-control"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="userpassword" className="">
            Password
          </label>
          <input
            id="userpassword"
            placeholder="Enter password"
            type="password"
            className="form-control form-control"
            required
          />
        </div>
        <div className="custom-control custom-checkbox">
          <input
            id="customControlInline"
            type="checkbox"
            className="custom-control-input form-check-input"
          />
          {/* <label htmlFor="customControlInline" className="custom-control-label">
            Remember me
          </label> */}
        </div>
        <div className="mt-3">
          <input type="submit" value="Sign In" className="SignInbtn" />
        </div>
        <div className="mt-4 pt-1 mb-0 text-center">
          <p className="mb-0">
            Don't have an account ?
            <a className="text-success" href="/Login">
              {" "}
              Sign in
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};
