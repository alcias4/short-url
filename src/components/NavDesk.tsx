





const NavDesk = () => {
  return (
    <nav className="table:flex items-center justify-between p-5 hidden w-full desk:p-0 desk:py-5">
        <ul className="flex gap-5 text-base desk:text-xl items-center">
          <li><img className="w-20 " src="/img/logo.svg"/></li>
          <li className="cursor-pointer">Features</li>
          <li className="cursor-pointer">Pricing</li>
          <li className="cursor-pointer">Resources</li>
        </ul>
      <section className="flex gap-5 desk:text-xl items-center">
        <button>Login</button>
        <button className=" bg-teal-btn p-3 rounded-3xl text-white hover:opacity-50">Sing Up</button>
      </section>
    </nav>
  )
}

export default NavDesk;