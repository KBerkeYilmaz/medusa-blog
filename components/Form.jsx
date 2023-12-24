"use client";

import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import axios from "axios";

const Form = ({ className }) => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [providers, setProviders] = useState(null);
  const { data: session, status } = useSession();

  const handleNameChange = (e) => {
    const value = e.target.value;
    setUserName(value);
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setUserPassword(value);
  };
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setUserEmail(value);
  };

  const handleReset = () => {
    setUserName("");
    setUserPassword("");
    setUserEmail("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit behavior

    // Construct the user object
    const user = {
      userName,
      userEmail,
      userPassword,
    };
    console.log(user);
    // TODO: Validate the user details here (e.g., check for empty fields)

    // TODO: Send the user details to your database
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.userName,
          userEmail: user.userEmail,
          userPassword: user.userPassword,
        }),
      });

      const data = response.ok ? await response.json() : null;

      // Handle the response from the server
      if (response.ok) {

        console.log("User registered successfully!");
        // Maybe reset form or redirect user
      } else {
        console.error("Failed to register user");
      }

      return data;
    } catch (error) {
      console.error("There was an error submitting the form:", error);
      // Handle errors
    }
  };

  useEffect(() => {
    const checkProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    checkProviders();
  }, []);

  const email = session?.user?.email;
  const userDashboardLink = email
    ? `login/${encodeURIComponent(email)}/dashboard`
    : "/";

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white fit w-3/5 rounded-3xl flex flex-col justify-start items-center p-4 gap-6 ${className}`}
    >
      <div className="w-full text-center">
        <h1>Kayıt Ol</h1>
      </div>
      <label
        htmlFor="email"
        className="flex flex-col"
      >
        E-Mail
        <input
          type="text"
          id="email"
          value={userEmail}
          className="border-2 border-black rounded-sm"
          onChange={(e) => {
            handleEmailChange(e);
          }}
        />
      </label>
      <label
        htmlFor="username"
        className="flex flex-col"
      >
        Kullanıcı adı
        <input
          type="text"
          value={userName}
          id="username"
          className="border-2 border-black rounded-sm"
          onChange={(e) => {
            handleNameChange(e);
          }}
        />
      </label>
      <label
        htmlFor="password"
        className="flex flex-col"
      >
        Parola
        <input
          type="password"
          value={userPassword}
          id="password"
          className="border-2 border-black rounded-sm"
          onChange={(e) => {
            handlePasswordChange(e);
          }}
        />
      </label>
      <Stack
        direction="row"
        spacing={2}
      >
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => handleReset()}
        >
          Delete
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          type="submit"
        >
          Send
        </Button>
      </Stack>{" "}
    </form>
  );
};

export default Form;
