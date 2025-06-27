import type { ReactElement } from "react";
import { Link } from "react-router";
import { useForm, type SubmitHandler } from "react-hook-form";
import { db } from "../../firebase"; // Import your Firebase db instance
import { collection, addDoc } from "firebase/firestore";

interface SignupFormInputs {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function Signup(): ReactElement {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormInputs>();
  const password = watch("password");

  const onSubmit: SubmitHandler<SignupFormInputs> = async (data) => {
    try {
      // In a real application, you would hash the password before storing it.
      // For this example, we are just storing the email.
      const docRef = await addDoc(collection(db, "users"), {
        email: data.email,
        // password: data.password, // Do NOT store plain passwords in production
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Signup successful!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error signing up. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="error-message">{errors.password.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && (
            <p className="error-message">{errors.confirmPassword.message}</p>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <p className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

