import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";

// Define mutation
const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        name
      }
    }
  }
`;

const Login = () => {
  let email: HTMLInputElement | null, psw: HTMLInputElement | null;
  const [login, { loading, error }] = useMutation(LOGIN);
  let navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      return navigate("/flashcards");
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email && psw)
          login({
            variables: {
              email: email.value,
              password: psw.value,
            },
          }).then((res) => {
            const { token } = res.data.login;
            localStorage.setItem("token", token);
            navigate("/flashcards");
          });
      }}
    >
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
            ref={(node) => {
              email = node;
            }}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="******************"
            ref={(node) => {
              psw = node;
            }}
            required
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <span className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker">
            Forgot Password?
          </span>
        </div>
      </div>
    </form>
  );
};

export default Login;
