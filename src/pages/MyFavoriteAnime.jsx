import React from "react";
import { MDBTooltip } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { bestAnime } from "../redux/features/animeSlice";
import SmallAnimeCard from "../components/SmallAnimeCard";
import Tilt from "react-parallax-tilt";

export default function MyFavoriteAnime() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.anime);
  // let topTier = [
  //   "Shingeki no Kyojin",
  //   "Vinland Saga",
  //   "Cyberpunk: Edgerunners",
  //   "Castlevania",
  //   "Code Geass: Hangyaku no Lelouch",
  //   "Chainsaw Man",
  //   "Berserk: Ougon Jidai-hen I - Haou no Tamago",
  //   "Death Note",
  // ];
  //const [bestAnimeState, setBestAnimeState] = React.useState(null);
  const [topTierState, setTopTierState] = React.useState(null);
  const [otherAnime, setOtherAnime] = React.useState(null);
  const [arrayValue, setArray] = React.useState([
    "Shingeki no Kyojin",
    "Vinland Saga",
    "Cyberpunk: Edgerunners",
    "Castlevania",
    "Code Geass: Hangyaku no Lelouch",
    "Chainsaw Man",
    "Berserk: Ougon Jidai-hen I - Haou no Tamago",
    "Death Note",
  ]);

  React.useEffect(() => {
    dispatch(bestAnime());
  }, [dispatch]);

  React.useEffect(() => {
    function grabAnimeData() {
      let arr = [];
      let arr2 = [];
      arrayValue.forEach((item) => {
        state?.bestAnime?.forEach((value) => {
          if (value.title.default === item) {
            arr.push(value);
          } else {
            arr2.push(value);
          }
        });
      });
      return arr;
    }
    function grabOtherData() {
      let result = state?.bestAnime;
      let cash = result;
      cash = cash.filter((item) => {
        return !arrayValue.includes(item.title.default);
      });

      setOtherAnime(cash);
    }

    grabOtherData();

    let result = grabAnimeData();
    setTopTierState(result);
  }, [state?.bestAnime, arrayValue]);

  if (state.loading) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex flex-col bg-[#161623]">
      <div className="flex justify-center my-10">
        <h1 className=" text-4xl font-extrabold text-gray-200">
          Collection of the Best Animes I've Watched
        </h1>
      </div>

      <div className="flex justify-center my-4">
        <h1 className=" text-green-400">
          <MDBTooltip
            tag="a"
            wrapperProps={{ href: "#" }}
            title="I give these animes 8+/10.... Very good animes"
          >
            Top Tier
          </MDBTooltip>{" "}
        </h1>
      </div>

      <div className="flex flex-col body_">
        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 flex flex-col mb-20 border-b-2 ">
          {topTierState?.map((item, index) => (
            <Tilt key={index}>
            <SmallAnimeCard {...item} />
          </Tilt>
          ))}
        </div>

        <div className="flex justify-center mt-[50px]">
          <h1 className=" text-green-400">
            <MDBTooltip
              tag="a"
              wrapperProps={{ href: "#" }}
              title="I give these animes 8+/10.... Very good animes"
            >
              2nd Tier
            </MDBTooltip>{" "}
          </h1>
        </div>

        <div className="lg:grid lg:grid-cols-5 md:grid md:grid-cols-3 flex flex-col">
          {otherAnime?.map((item, index) => (
            <Tilt key={index}>
              <SmallAnimeCard {...item} />
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
}
