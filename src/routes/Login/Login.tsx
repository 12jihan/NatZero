import type { ReactElement } from "react";
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

export default function Login(): ReactElement {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    // Handle login logic here
    console.log("Login submitted:", data);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
            />
          </label>
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
            />
          </label>
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}
