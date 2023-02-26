import React from "react";
import {FiMenu} from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setLogout } from "../redux/features/authSlice";


export default function NavBar() {
    const [open, setOpen] = React.useState(false)
    const {user} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
  return (
    <header className="border-b border-gray-300 py-2">
      <div className="flex items-center justify-between xl:max-w-screen max-w-full xl:mx-7 flex-wrap w-full">
        <div className="flex">
          <img
            src="https://wallpapers.com/images/featured/4hbyyrax1z1nnufn.jpg"
            className="w-32 rounded-full"
            alt="Avatar"
          />
          <img src="title.png" alt="Favour" className="lg:w-auto w-[180px]"/>
        </div>

        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer mr-4" onClick={()=> setOpen(!open)}/>

        <nav className={`${open ? "block" : "hidden"} lg:flex mr-6 lg:items-center lg:w-auto w-full`}>
          <ul className="text-base text-gray-700 lg:flex lg:justify-between ">
            
          {user?.user?._id? <><li>
              <Link to='/'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Home
              </button>
              </Link>
              </li>

              <li>
              <Link to='/best'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Best Animes
              </button>
              </Link>
              </li>

              <li>
            <Link to='/anime'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Search For Anime
              </button>
              </Link>
            </li>

            <li>
            <Link to='/dashboard'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Dashboard
              </button>
              </Link>
            </li>

            <li className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
              <button className="bg-green-200 w-[70px] rounded-2xl hover:bg-gray-900 " onClick={()=>{
                navigate('/')
                dispatch(setLogout())
              }}>Log Out</button>
            </li>
            </>
             : <>
             <li>
              <Link to='/'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Home
              </button>
              </Link>
              </li>

              <li>
              <Link to='/best'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Best Animes
              </button>
              </Link>
              </li>

              <li>
            <Link to='/anime'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Search For Anime
              </button>
              </Link>
            </li>

             <li>
            <Link to='/signup'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Sign Up
              </button>
              </Link>
            </li>

            <li>
            <Link to='/login'>
              <button className="lg:px-5 sm:max-md:ml-3 sm:max-md:mt-3 py-2 block hover:text-blue-700 font-semibold">
                Log In
              </button>
              </Link>
            </li></>}
            

            
          </ul>
        </nav>
      </div>
    </header>
  );
}
