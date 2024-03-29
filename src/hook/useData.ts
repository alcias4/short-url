"use client"
import apiUrl from "@/service/api";
import { useEffect, useState } from "react";



interface d {
  url: string 
  short: string
}

const useData = () => {

  const [long, setLongUrl]= useState('')
  const [shortUrl, setUrl] = useState('')
  const [dat, setData] = useState<d[]>([]);

  useEffect(() => {
    if(typeof window !== undefined ){
      if(window.localStorage.getItem("url") === null) {
        window.localStorage.setItem("url", "[]")
      }
      setData(JSON.parse(window.localStorage.getItem("url") || "[]"))
    }
  },[])

  useEffect(()=> {
    if(long !== ""){
      const n = {
        url:long,
        short: shortUrl
      }
      const fly = [...dat,n]
      localStorage.setItem("url", JSON.stringify(fly))
      setData(fly)
    }
  },[shortUrl])

  const handleClick = async () => {
    const longUrl = long
    const result = await apiUrl({longUrl})
    setUrl(result)
    
  }

  const handleCopy = (id:string) => {
    const element = document.getElementById(id);
    
    if (element) {
      
      const range = document.createRange();
      range.selectNode(element);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
      }
      
      document.execCommand('copy');

      if (selection) {
        selection.removeAllRanges();
      }
      
    }
  }

  return { handleClick, dat, setLongUrl, handleCopy,  long }
}

export default useData;