import React from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { setHomeCurrentPage, topAnimeQuery } from '../redux/features/animeSlice';
import AnimeCard from '../components/anime/AnimeCard';
import Tilt from "react-parallax-tilt";
import Pagination from '../components/Pagination';
import { setUpdatedUser } from '../redux/features/authSlice';

export default function Home() {
  const dispatch = useDispatch()
  const { homeCurrentPage,animesQuery,homeNumberOfPages} = useSelector(state => state.anime)
  const postPerPage = 8
  const lastPostIndex = homeCurrentPage * postPerPage
  const firstsPostIndex = lastPostIndex - postPerPage
  const topData = animesQuery?.slice(firstsPostIndex,lastPostIndex)
 
  

  React.useEffect(()=>{
    dispatch(topAnimeQuery(homeCurrentPage))
  },[dispatch,homeCurrentPage])

  React.useEffect(()=>{
    dispatch(setUpdatedUser())
  },[dispatch])

 


  

  
  return (
    <div className='w-screen h-screen flex flex-col bg-[#161623]'>
      <div className='flex justify-center py-6 '>
        <h1 className='text-[40px] font-extrabold text-green-400 border-b-2 border-gray-400'>Top Animes</h1>
      </div>
    <div className=' flex flex-col body_ ' >
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 flex flex-col">
      {topData?.map((item) => (
            <Tilt key={item.id}>
              <AnimeCard {...item} />
            </Tilt>
          ))}
      </div>

      <Pagination
          setCurrentPage={setHomeCurrentPage}
          numberOfPages={homeNumberOfPages}
          dispatch={dispatch}
          currentPage={homeCurrentPage}
        />
    </div>
      
      
    </div>
  )
}
