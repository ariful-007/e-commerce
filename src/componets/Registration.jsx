import React, { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import {  toast } from 'react-toastify';
import {  Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword ,onAuthStateChanged} from "firebase/auth";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
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
      setEmailError("Enter your Email")
    } else if (password == "") {
      setPasswordError("Enter your Password");
    } else {
      setLoading(true)
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('user')
        toast.success('Succssefully!',{
          position: "top-right",
        });
        setLoading(false)
        setEmail("");
        setPassword("");
        setEmailError("");
        setPasswordError("");
        navigate('/login')
      })
      
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        if(errorCode == "auth/email-already-in-use"){
          toast.error('Email Already Used Try Another',{
            position: "top-right",
          });
        }
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
          Sign in to your account
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
          {loading? <div className="flex justify-center mt-4"><RotatingLines height="50" width="50" color="white"  /></div>

            : <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign in
          </button>
          }
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Allready Have An Account ? please{" "}
          <Link to='/login' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
