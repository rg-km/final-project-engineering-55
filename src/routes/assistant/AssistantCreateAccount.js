import React from "react";
import { Link } from "react-router-dom";

const AssistantCreateAccount = () => {
  return (
    <div>
      <h1>
        <center>VLab</center>
      </h1>
      <h3>Lengkapi Profil Anda</h3>
      <form>
        <label>Username</label>
        <input type="text" name="username" placeholder="Username" />
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" />
        <label>Sandi</label>
        <input type="password" name="sandi" placeholder="Sandi" />
        <label>Konfirmasi Sandi</label>
        <input type="password" name="sandi" placeholder="Konfirmasi Sandi" />
        <Link to="/login">
          <button type="submit">Daftar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default AssistantCreateAccount;
