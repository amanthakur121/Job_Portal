import React from "react";

function Register() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register</h2>

      <input placeholder="Name" /><br /><br />

      <input placeholder="Email" /><br /><br />

      <input type="password" placeholder="Password" /><br /><br />

      <button>Create Account</button>
    </div>
  );
}

export default Register;