import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  const hendelEmail= (e) =>{
    setEmail(e.target.value)
    setEmailError('') 
  }
  const hendelPassword= (e) =>{
    setPassword(e.target.value)
    setPasswordError('') 
  }

  const hendalSubmit = (e) => {
    e.preventDefault();
    if (email == "") {
      setEmailError("Enter Your Email");
    } else if (password == "") {
      setPasswordError("Enter Your Password");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("user");
          setEmail("");
          setPassword("");
          setEmailError("");
          setPasswordError("");
          navigate("/");
        })

        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode)
          const errorMessage = error.message;
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/")
      const uid = user.uid;
    }
  });
  return (
    <div className=" bg-slate-800  flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
          Login Form
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onClick={hendalSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-white"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={hendelEmail}
                type="email"
                value={email}
                placeholder="Enter Your Email"
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm outline-none placeholder:text-gray-400  sm:text-sm sm:leading-6"
              />
            </div>
            <p className=" text-red-600 font-bold mt-1">{emailError}</p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-white"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={hendelPassword}
                type="password"
                value={password}
                placeholder="Enter Your Password"
                className="block w-full rounded-md border-0 py-1.5  px-2 text-black shadow-sm outline-none placeholder:text-gray-400    sm:text-sm sm:leading-6"
              />
              <p className=" text-red-600 font-bold p-1">{passwordError}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Are You New ? please{" "}
          <Link
            to="/registration"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Registration
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
