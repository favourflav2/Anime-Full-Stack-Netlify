import React from "react";
import { Link } from "react-router-dom";
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
import { useDispatch, useSelector} from 'react-redux';
import { likeAnime } from "../../redux/features/authSlice";
import { toast } from 'react-toastify';


export default function AnimeCard({
  image,
  title,
  score,
  genres,
  episodes,
  synopsis,
  url,
  trailer, 
  id, setChange
}) {
  
  const {savedAnimes,user} = useSelector(state => state.auth)
  const [like,setLike] = React.useState(false)
  const [likeState, setLikeState] = React.useState(null)
  const dispatch =useDispatch()
  function excerpt(str) {
    if (str?.length > 45) {
      str = str.substring(0, 120) + "...";
    }
    return str;
  }
  
 

  React.useEffect(()=>{
    setLikeState(savedAnimes)

    likeState?.filter((item) =>{
      if(item.id === id){
        setLike(true)
      }
      return likeState
    })
    

    
  },[setLikeState,savedAnimes,likeState,id])


  
 
  

  return (
    <div className="container_">
      <div className="card_ w-[300px] h-[400px]  xs:min-h-[550px] xs:h-auto md:min-h-[580px] md:h-auto lg:min-h-[700px] lg:h-auto lg:w-[350px]">
        <div className="flex justify-center flex-col items-center">
          <div className="w-full ">
            <img
              className="w-full h-[200px] lg:h-[250px] rounded-2xl hover:opacity-50"
              src={image?.jpg?.default}
              alt={title?.default}
            />
          </div>
           {/* <AiOutlineHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            setLike(item => !item)
            toast.success("added to library")
            window.location.reload(false)
            
          }}/> */}

          {/* {likeState?.map((item,index)=>(
            <>
            {item.id === id && setLike(true)}
            
            </>
          ))} */}

          
          {/* {dataLog?.map((item,index)=>(
            <span key={index}>
              {item.id === id && (<AiFillHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            setLike(item => !item)
            toast.error("removed from library")
            
            
          }}/>)} */}
            
            {/* </span>
          ))} */}

          {/* {dataLog ? (<AiFillHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            setLike(item => !item)
            toast.error("removed from library")
            
          }}/>) : (<AiOutlineHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            setLike(item => !item)
            toast.success("added to library")
            
          }}/>) } */}
          {user?.user?._id ? 
          like ?  <AiFillHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            //dispatch(savedArr())
            setLike(item => !item)
            setChange && setChange(item => !item)
            toast.error("removed from library")
            
          }}/> : <AiOutlineHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            //dispatch(savedArr())
            setLike(item => !item)
            setChange && setChange(item => !item)
            //dispatch(savedArr())
            toast.success("added to library")
            
          }}/>
          : 
          (<>
          </>)}
          {/* {like ?  <AiFillHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            //dispatch(savedArr())
            setLike(item => !item)
            setChange && setChange(item => !item)
            toast.error("removed from library")
            
          }}/> : <AiOutlineHeart className=" absolute text-[30px] left-1 top-1 text-red-600" onClick={()=>{
            dispatch(likeAnime({id:id}))
            //dispatch(savedArr())
            setLike(item => !item)
            setChange && setChange(item => !item)
            //dispatch(savedArr())
            toast.success("added to library")
            
          }}/>} */}
          
          <div>
            <h3 className=" font-extrabold text-gray-300 mt-2 text-[20px]">
              {title.default}
            </h3>
          </div>

          <div className="flex flex-col mt-1  text-gray-300">
            {episodes ? (
              <p>
                <span className=" font-extrabold text-green-400">Episodes:</span> {episodes}
              </p>
            ) : (
              <p><span className=" font-extrabold text-green-400">Episodes:</span> N/A</p>
            )}

            {score ? (
              <p>
                <span className=" font-extrabold text-green-400">Rating:</span> {score}
              </p>
            ) : (
                <p><span className=" font-extrabold text-green-400">Rating:</span> N/A</p>
            )}
          </div>


          <div className=" flex flex-col justify-center text-gray-300 ">
            {genres.length === 0 ? <p className=" font-extrabold text-green-400">Genre: N/A</p> : <p className=" font-extrabold text-green-400">Genre: &nbsp;</p>}
            
            <div className="grid grid-cols-[100px_100px] mb-2">
            {genres?.map((item, index) => (
              <div key={index}>
                <p>{item.name} &nbsp;</p>
              </div>
            ))}
            </div>
            
          </div>

          <div className="flex justify-center mt-2">
            {synopsis ? (
              <p className="w-[80%] text-gray-300">{excerpt(synopsis)}</p>
            ) : (
              <p>No Description</p>
            )}
            
          </div>

          <div className=" cursor-pointer mt-3">
            <button><Link to={url} target='_blank'>Read More...</Link></button>
          </div>

          <div>
            <button className="my-4 bg-green-400 w-[80px] rounded-3xl"><Link to={trailer.url} target='_blank'>Trailer</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}
// "Rating: N/A"
