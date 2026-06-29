// frontend/src/pages/Login.jsx

import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");

  const login = async () => {
    const res = await axios.post("http://localhost:5000/api/auth/pi-login", {
      pi_user_id: "mock-pi-id-001",
      username
    });

    localStorage.setItem("user", JSON.stringify(res.data.user));

    alert("Login successful");
    window.location.href = "/dashboard";
  };

  return (
    <div>
      <h1>PiPort Login</h1>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={login}>Login with Pi</button>
    </div>
  );
}