"use client"

import useData from "@/hook/useData";





function Form() {

  const { handleClick, setLongUrl, dat,handleCopy } = useData();


  return (
    <div id="form" className="flex flex-col pt-10 items-center mt-20 w-full font-bold">
      <form onSubmit={(e) => e.preventDefault()} className="bg-violet-m flex flex-col gap-5 w-full p-3 rounded-xl lp:flex-row lp:p-10 lp:bg-[url('/img/bg-boost-desktop.svg')] lp:bg-cover desk:w-[900px]">
        <input name="text" onChange={(e) => setLongUrl(e.target.value)} className="bg-white lp:w-[70%] p-4 rounded-lg border-2 border-solid focus:outline-none focus:border-solid focus:border-2 focus:border-teal-btn" type="text" id="input" placeholder="Shorten a link here..." />
        <button onClick={() => handleClick()} className="w-full text-white lp:w-[30%] bg-teal-btn p-4 rounded-lg hover:opacity-50">Shorten it!</button>
      </form>
      <ul className="mt-20 flex flex-col items-center w-full gap-5 lp:mt-10 desk:w-[900px]">
        {dat?.map((e,i) => (
          <li key={i} className="flex flex-col gap-5 w-full rounded-xl bg-white p-4 divide-y-2 lp:flex-row lp:divide-y-0 lp:items-center lp:text-sm">
            <p className="truncate px-2 pt-2 lp:w-[50%] lp:p-0">{e.url}</p>
            <p className="truncate pt-4 px-2 text-teal-btn lp:w-[35%] lp:p-0" id={`${i}`}>{e.short}</p>
            <button className="w-full bg-teal-btn p-4 rounded-lg text-white hover:opacity-50 lp:w-[15%]" onClick={()=>handleCopy(`${i}`)}>copy</button>
          </li>
        ))}
      </ul>
    </div>
  );
        
}

export default Form;