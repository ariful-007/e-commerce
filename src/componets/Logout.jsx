import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  signOut(auth)
    .then(() => {
      navigate('/login')
    })
    .catch((error) => {
      console.log(error)
    });
  return (
    <div>
      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded sm:mr-2 md:mr-4 lg:mr-6">
        LogOut
      </button>
    </div>
  );
};

export default Logout;
