import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newUser = { username, email, password, role };
    console.log(newUser);
    setEmail("");
    setPassword("");
    setRole("");
    setUsername("");
    fetch("https://be.medcarefind.com/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <section>
      <div className="login-image">
        <img className="login-image" src="/login.png" alt="" />
      </div>

      <div className="login-details">
        {/* <img className="girl-avatar" src="/avatar.png" alt="" /> */}
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          name="Select Your Role"
          id=""
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option disabled value="">
            Select Your Role
          </option>
          <option value="admin">admin</option>
          <option value="secretary">secretary</option>
          <option value="cleaner">cleaner</option>
        </select>
        <button className="btn" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </section>
  );
}

export default App;
