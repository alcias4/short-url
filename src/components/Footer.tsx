
const infoFooter = [
  {
    title: "Features",
    a1: "Link Shorten",
    a2: "Branded Links",
    a3: "Analytics",
    a4: ""
  },
  {
    title: "Resources",
    a1: "Blog",
    a2: "Developers",
    a3: "Supports",
    a4: ""
  },
  {
    title: "Company",
    a1: "About",
    a2: "Our Team",
    a3: "Careers",
    a4: "Contact"
  }
]

import {IconBrandFacebookFilled , IconBrandTwitterFilled, IconBrandPinterest, IconBrandInstagram} from "@tabler/icons-react"

const Footer = () => {
  return (
    <footer className="w-full bg-[#232027] flex justify-center">
      <section className="w-full bg-[#232027] pb-10 text-white flex flex-col  items-center lp:flex-row lp:px-5 lp:justify-center desk:px-[20px] desk:w-[900px]">
        <h3 className="mt-20 lp:mt-0  font-bold text-4xl lp:w-[20%] lp:mb-20">Shortly</h3>
        <nav className="flex flex-col gap-10 mt-10 w-full lp:gap-0 lp:flex-row lp:w-[60%] lp:justify-center">
          {
            infoFooter.map((e)=> (
              <ul className="w-full lp:w-[25%] gap-2 flex flex-col items-center lp:gap-1">
                <li className="font-bold mb-5 lp:mb-2">{e.title}</li>
                <li className="opacity-50 cursor-pointer hover:text-teal-btn hover:opacity-100">{e.a1}</li>
                <li className="opacity-50 cursor-pointer hover:text-teal-btn hover:opacity-100">{e.a2}</li>
                <li className="opacity-50 cursor-pointer hover:text-teal-btn hover:opacity-100">{e.a3}</li>
                <li className="opacity-50 cursor-pointer hover:text-teal-btn hover:opacity-100">{e.a4}</li>
              </ul>
            ))
          }
        </nav>
        <div className="w-full flex justify-center gap-5 mt-10 lp:w-[20%] lp:mb-20 lp:mt-0">
          <a className="hover:scale-125 duration-500 ease-out hover:text-teal-btn" href="#">
            <IconBrandFacebookFilled /> 
          </a>
          <a href="#" className="hover:scale-125 duration-500 ease-out hover:text-teal-btn" >
            <IconBrandTwitterFilled /> 
          </a>
          <a href="#" className="hover:scale-125 duration-500 ease-out hover:text-teal-btn">
            <IconBrandPinterest /> 
          </a>
          <a href="#" className="hover:scale-125 duration-500 ease-out hover:text-teal-btn">
            <IconBrandInstagram /> 
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer;