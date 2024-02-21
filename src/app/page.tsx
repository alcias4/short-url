import Form from "@/components/Form";

const Home =async () =>  {
  return (
   <section className="flex flex-col w-full justify-center px-5"> 
      <img className="mt-10 w-full h-80" src="/img/illustration-working.svg" alt="img for background" />

      <div className="w-full flex flex-col items-center gap-8 mt-10">
        <h1 className="text-balance text-blue-d text-5xl text-center font-bold">More than just shorter link</h1>
        <p className="text-wrap text-center text-lg opacity-50">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <label className="bg-teal-btn w-60 p-4 text-center rounded-3xl text-white font-bold cursor-pointer" htmlFor="input">Get Stared</label>
      </div>
      <Form />
   </section>
  );
}


export default Home;