import { useEffect, useState } from "react";
import "./captcha.css";

export const Captcha = () => {
  const [captcha, setCaptcha] = useState("");
  const [currentValue, setCurrentValue] = useState("");

  const generateCaptcha = () => {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";
    let str = "";
    for (let i = 0; i < 6; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptcha(str);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault(); // Prevent form submission
    if (currentValue === captcha) {
      alert("Successfully Logged In ✅");
    } else {
      alert("Incorrect CAPTCHA ❌. Try again.");
      setCurrentValue("");
      generateCaptcha(); // Refresh CAPTCHA
    }
  };

  return (
    <form className="container">
      <label>Enter Your Email:</label>
      <input type="email" required />

      <label>Enter Your Password:</label>
      <input type="password" required />

      <label>Enter CAPTCHA</label>
      <input type="text" value={currentValue} onChange={handleChange} />

      <div className="captcha">{captcha}</div>
      <button onClick={generateCaptcha} type="button">
        Refresh CAPTCHA 🔄
      </button>
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};
