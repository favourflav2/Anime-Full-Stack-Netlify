import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleSignUp, setError, signUp } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {AiFillGoogleCircle} from 'react-icons/ai'

export default function SignUp() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
    username: "",
    confirmPassword: "",
  });
  const { email, password, confirmPassword, username } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(setError());
    error && toast.error(error);
  }, [error, dispatch]);

  function handleChange(e) {
    setFormData((item) => {
      return {
        ...item,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      return toast.error("Passwords need to match");
    }

    if (email && password && username && confirmPassword) {
      dispatch(signUp({ formData, toast, navigate }));
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo",{
          headers:{
            "Authorization": `Bearer ${tokenResponse.access_token}`
          }
        })
        //console.log(res.data)
        //console.log(tokenResponse);
        const {email,name,sub} = res.data
        const result = {email,username:name,sub}
        dispatch(googleSignUp({result,navigate,toast}))
        
      } catch (e) {
        console.log(e);
      }
    },
  });

  return (
    <div className=" w-screen h-screen  flex justify-center">
      <div className=" flex h-[700px] w-[500px] justify-center  border-2 mt-5">
        <div className=" w-[90%] h-[500px] bg-white flex flex-col">
          <div className="flex justify-center my-3 ">
            <h1 className="text-[25px]">Sign Up</h1>
          </div>

          <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            mb-5"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              id="email"
              required
            />

            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
            </div>

            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
              mb-5"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => handleChange(e)}
              id="username"
              required
            />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>

            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 bg-gray-100"
              type="password"
              autoComplete=""
              value={formData.password}
              id="password"
              name="password"
              placeholder="******"
              onChange={(e) => handleChange(e)}
            />

            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>

            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5 bg-gray-100"
              type="password"
              autoComplete=""
              value={formData.confirmPassword}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={(e) => handleChange(e)}
            />

            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center mb-3"
              onClick={googleLogin}
            >
              <AiFillGoogleCircle className="text-[28px] mr-2"/> Sign Up With Google
            </button>

            <button
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign Up
            </button>
          </form>

          <p className="flex justify-center my-4 ">
            Already have an acoount?
            <Link to="/login">
              <span className="ml-1 font-bold hover:text-[17px]"> Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
