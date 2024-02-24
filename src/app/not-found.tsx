import Link from "next/link";



const NotFound = () => {

  return (
    <div className="min-h-80 flex flex-col justify-center items-center gap-10">
      <h2 className="text-4xl font-bold">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link  className="bg-teal-btn hover:opacity-60  w-60  p-4 text-center rounded-3xl text-white font-bold cursor-pointer"href={"/"}>return</Link>
    </div>
  )
}

export default NotFound;