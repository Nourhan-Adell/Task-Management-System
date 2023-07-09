import { useState } from "react";
import styles from "./signup.module.css";
import { useRouter } from "next/router";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  console.log("formData: " + formData);

  const handleSubmit = async (event) => {
    // const router = useRouter();

    event.preventDefault();
    try {
      const response = await fetch("/api/signupHandler", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
      // router.push("/profile");
      // Handle successful form submission
      // ...
    } catch (error) {
      console.error(error);
      // Handle form submission error
      // ...
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        First name:
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Second name:
        <input type="text" name="secondname" value={formData.secondname} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Phone number:
        <input type="tel" name="phonenumber" value={formData.phonenumber} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label className={styles.label}>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Signup</button>
    </form>
  );
}
