import CARD_INFO from "@/service/card_info";


const CardInfo = () => {
  
  return (
    <ul className="flex flex-col gap-24 w-full mt-20 lp:flex-row lp:gap-5 min-h-[400px] desk:w-[900px] card">
      {
        CARD_INFO.map((e,i) => (
          <li className={`flex flex-col desk:h-[300px] gap-10 relative w-full rounded-lg py-14 p-5 items-center text-center  bg-white lp:w-[300px]`} key={i + 100}>
            <img className="absolute w-24 -top-12 bg-bg-svg p-5 rounded-full lp:left-10 lp:w-20" src={e.url} alt="img svg" />
            <h3 className="text-balance text-blue-d text-3xl text-center font-bold lp:text-2xl">{e.title}</h3>
            <p className="opacity-50">{e.comment}</p>
            <div className={`h-24 w-2 -bottom-24 absolute bg-teal-btn lp:top-[50%] lp:-right-7 lp:h-2 lp:w-7 ${i + 1 === CARD_INFO.length ? "hidden":null}`}></div>
          </li>
        ))
      }
    </ul>
  )
}


export default CardInfo;