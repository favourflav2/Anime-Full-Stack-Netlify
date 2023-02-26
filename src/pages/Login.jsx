import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { logIn, setError } from "../redux/features/authSlice";


export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {error} = useSelector(state => state.auth)
  function handleChange(e){
    setFormData(item =>{
      return {
        ...item,
        [e.target.name]:e.target.value
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    if(formData.email && formData.password){
      dispatch(logIn({formData,toast,navigate}))
    }
  }

  React.useEffect(()=>{
    dispatch(setError())
    error && toast.error(error)
  },[error,dispatch])
  

  return (
    <div className=" w-screen h-screen  flex justify-center">
      
      
      <div className="flex h-[570px] w-[500px] bg-white rounded-lg mt-[80px]  justify-center items-center border-2">
        <div className="  w-[90%] h-[450px] md:w-[450px] md:h-[450px]  bg-white flex flex-col">
          <div className="flex justify-center my-3 ">
            <h1 className="text-[25px]">Login</h1>
            
          </div>

          <form className="flex flex-col" onSubmit={(e)=>handleSubmit(e)}>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            </div>

            <input
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 bg-gray-100 text-gray-700 leading-tight focus:outline-none focus:shadow-outline
            mb-9"
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e)=>handleChange(e)}
              id="email"
              required
            />

            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
            <input
            className="shadow appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-9 bg-gray-100"
              type="password"
              autoComplete=""
              value={formData.password}
              id="password"
              name="password"
              placeholder="******"
              onChange={(e)=>handleChange(e)}
            />

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Log In
            </button>
          </form>

          <p className="flex justify-center my-4 ">
            Dont have an account yet? <Link to="/signup"><span className="ml-1 font-bold hover:text-[17px]"> Sign Up</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
}
