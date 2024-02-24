
import CardInfo from "@/components/CardInfo";
import Form from "@/components/Form";

const Home =async () =>  {
  return (
   <section className="flex flex-col w-full justify-center px-5 relative desk:px-[20px] lp:items-center"> 

      <div className="w-full flex flex-col items-center gap-8 mt-10 lp:flex-row-reverse desk:w-[900px] desk:justify-between">
        <figure className="w-full flex justify-center pl-20 lp:w-[60%] desk:pl-10 desk:w-[40%]">
          <img className="h-72 lp:w-full" src="/img/illustration-working.svg" alt="img for background" />
        </figure>
        <section className="flex flex-col justify-center w-full p-5 items-center gap-5 lp:w-[50%] desk:p-0">
          <h1 className="text-balance text-blue-d text-5xl text-center lp:text-3xl lp:w-full lp:text-left lp:text-ellipsis font-bold">More than just shorter link</h1>
          <p className="text-wrap text-center lp:text-left lp:text-pretty text-lg opacity-50">Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <a href="#form"  className="bg-teal-btn w-60 lp:self-start p-4 text-center rounded-3xl text-white font-bold cursor-pointer">Get Stared</a>
        </section>
      </div>
      <Form />
      <h2 className="text-balance text-blue-d text-4xl text-center font-bold mt-20 desk:text-5xl">Advance Statistics</h2>
      <p className="text-wrap text-center text-lg opacity-50 mt-10 lp:w-[500px]">Track how your links are performing across the web with our advanced statistics dashboard</p>
      <CardInfo /> 
   </section>
  );
}


export default Home;