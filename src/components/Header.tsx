"use client"
import {IconMenu2} from "@tabler/icons-react"
import Li from "./Li";
import { useState } from "react";


const Header = () => {
  const [hidden, setHidden ] = useState(false)
  const handleClick = () => {
    setHidden(!hidden)
  }
  return (
    <header className="text-white flex relative w-full justify-center h-20 items-center gap-60">
      <div>
        <img src="/img/logo.svg" alt="" />
      </div>
      <button onClick={handleClick}>
        <IconMenu2 className="opacity-50" color="black"/>
      </button>
      <nav className={`bg-violet-m w-96 rounded-lg p-5 absolute animate-apa -mb-96 flex-col gap-5 ${hidden? "flex":"hidden"} divide-y  divide-white/50`}>
        <ul className="flex flex-col items-center gap-5">
          <Li text="Features"/>
          <Li text="Pricing"/>
          <Li text="Resources"/>
        </ul>
        <div className="flex flex-col gap-5 pt-5 font-bold">
          <button>Login</button>
          <button className="bg-teal-btn rounded-3xl h-10">Sing Up</button>
        </div>
      </nav>
    </header>
  )
}

export default Header;