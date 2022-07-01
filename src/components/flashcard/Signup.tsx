import React, { useEffect } from "react";
import { gql, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

// Define mutation
const SIGNUP = gql`
  mutation ($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

const Signup = () => {

  let navigate = useNavigate();
  let email: HTMLInputElement | null,
    psw: HTMLInputElement | null,
    name: HTMLInputElement | null;
  const [signup, { data, loading, error }] = useMutation(SIGNUP);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      return navigate("/flashcards");
    }
  }, [token, navigate]);

  return (
    <div className="flex flex-col">
      {loading && <div>Loading...</div>}
      {error && <div>Error!</div>}
      {data && localStorage.setItem("token", data.signup.token)}
      <div
        id="contact"
        className=" md:px-72 w-full h-screen flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c"
          className="flex flex-col max-w-[600px] w-full"
          onSubmit={(e) => {
            e.preventDefault();
            if (name && email && psw)
              signup({
                variables: {
                  email: email.value,
                  password: psw.value,
                  name: name.value,
                },
              });
          }}
        >
          <div className="pb-8 flex flex-col items-center">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              {" "}
              SignUp{" "}
            </p>
            <p className="py-4">Register on flashCards ang get started</p>
          </div>
          <input
            className="bg-[#ccd6f6] border-2 hover:bg-pink-50 hover:border-pink-600 p-4"
            type="text"
            placeholder="Name"
            name="name"
            ref={(node) => {
              name = node;
            }}
            required
          />
          <input
            className="my-4 p-4 bg-[#ccd6f6]  border-2 hover:bg-pink-50 hover:border-pink-600"
            type="email"
            placeholder="Email"
            name="email"
            ref={(node) => {
              email = node;
            }}
            required
          />
          <input
            className="my-4 p-4 bg-[#ccd6f6]  border-2 hover:bg-pink-50 hover:border-pink-600"
            type="password"
            placeholder="Password"
            name="password"
            ref={(node) => {
              psw = node;
            }}
            required
          />
          <button className="text-white bg-pink-500 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
