import classes from "./login.module.css";
import { useState } from "react";

export default function LoginForm() {
  //   const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formJSON = JSON.stringify({ email, password });

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formJSON,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div>
        <label className={classes.label} htmlFor="email">
          Email:
        </label>
        <input className={classes.input} type="email" id="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </div>
      <div>
        <label className={classes.label} htmlFor="password">
          Password:
        </label>
        <input
          className={classes.input}
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
