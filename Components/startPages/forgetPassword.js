import { useState } from "react";
import classes from "./forgetPassword.module.css";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle the form submission
  };

  return (
    <div>
      <h1>Forgot Password</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label>
          Email:
          <input className={classes.input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <button className={classes.button} type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
}
