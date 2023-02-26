import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { savedArr } from '../redux/features/authSlice'
import AnimeCard from '../components/anime/AnimeCard'
import  Tilt  from 'react-parallax-tilt'
import { toast } from 'react-toastify';

export default function Dashboard() {
    const [state, setState] = React.useState(null)
    const [change, setChange] = React.useState(false)
    const dispatch = useDispatch()
    const {savedAnimes,error} = useSelector(state => state.auth)

    React.useEffect(()=>{
        if(change === true){
            console.log('hey')
            dispatch(savedArr())
        }else{
            console.log("no")
            dispatch(savedArr())
        }
        dispatch(savedArr())
    },[dispatch,change])

    React.useEffect(()=>{
        
        setState(savedAnimes)
    },[setState,savedAnimes])

    React.useEffect(()=>{
      if(error){
        toast.error(error)
      }
    },[error])

    //console.log(change)
    


  return (
    <div className='w-screen h-screen flex flex-col bg-[#161623]'>
      <div className='flex justify-center py-6 '>
        <h1 className='text-[40px] font-extrabold text-green-400 border-b-2 border-gray-400'>Saved Animes</h1>
      </div>
    <div className=' flex flex-col body_ ' >
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col">
      {state?.map((item) => (
            <Tilt key={item.id}>
              <AnimeCard {...item} setChange={setChange}/>
            </Tilt>
          ))}
      </div>

      
    </div>
      
      
    </div>
  )
}
