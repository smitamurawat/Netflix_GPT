import React, { useRef, useState } from "react";
import Header from "./Header";
import bgImage from "../Image/backgroundImage.jpg";
import { checkValidData } from "../utils/validate";

import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);
  const [errorMsg, setErrorMessage] = useState(null);

  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const toggelLogin = () => {
    setSignInForm(!isSignInForm);
  };

  const handleButton = () => {
    let validate;
    validate = checkValidData(email.current.value, password.current.value);
    if (validate) return;
    // SigIn/Signup  Logic
    if (!isSignInForm) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("logIn");
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={bgImage} alt="backgroundIamge" />
      </div>
      <div className="absolute p-12 w-3/12 right-0 left-0 my-40 mx-auto bg-black bg-opacity-50">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="text-left font-medium my-2 text-white ">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              className="font-medium  p-2 my-2 bg-gray-300 w-full"
              ref={name}
              type="text"
              name="name"
              placeholder="Full Name"
            />
          )}

          <input
            className="font-medium  p-2 my-2 bg-gray-300 w-full"
            type="text"
            name="email"
            ref={email}
            placeholder="Email Address"
          />
          <input
            className="font-medium p-2 my-2  bg-gray-300 w-full"
            type="password"
            name="password"
            ref={password}
            placeholder="Enter password"
          />
          <div className="text-white">{errorMsg}</div>
          <button
            className="bg-red-500 w-full py-4 my-2 rounded-sm "
            onClick={handleButton}
          >
            {isSignInForm ? "Sign In " : "Sign up"}
          </button>
        </form>

        <div className="text-white my-3">
          <span>
            {isSignInForm ? " New to netflix ? " : "Already regestired. "}
          </span>

          <button onClick={toggelLogin}>
            {isSignInForm ? " sign up" : "Sign In "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
