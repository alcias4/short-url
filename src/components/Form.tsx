"use client"
import apiUrl from "@/service/api"
import { FormEvent, useState } from "react"

// const longUrl = 'https://www.youtube.com/watch?v=5ospiemGG3M&list=RDCLAK5uy_khnM5GHImTVln9NmSVeq5R_1oPch5dLXg&index=5'

interface Dato {
  url:string
  short:string
}
type n = Dato[]

const Form = () => {
  const [longUrl, setLongUrl]= useState('')
  const [shortUrl, setUrl] = useState('')
  const [dat, setData] = useState<n>([
    {
      url:"",
      short:""
    }
  ]);

  const handleClick =async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    const result = await apiUrl({longUrl})
    setUrl(result)
    
  }
  console.log(dat)
  return (
    <div className="flex flex-col items-center mt-20 w-full">
      <form onSubmit={handleClick} className="bg-violet-m flex flex-col gap-5 w-full p-3 rounded-xl">
        <input onChange={(e)=> setLongUrl(e.target.value)} className="bg-white p-4 rounded-lg border-2 border-solid focus:outline-none focus:border-solid focus:border-2 focus:border-teal-btn" type="text" id="input" placeholder="Shorten a link here..."/>
        <button className="w-full bg-teal-btn p-4 rounded-lg">Shorten it!</button>
      </form>
      <ul>
        {
          dat?.map((e,i) => (
            <li key={i}>
              <h2>{e.short}</h2>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Form;