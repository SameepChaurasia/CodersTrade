import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import News from "../pages/News";

export default function Header () {
  return (
  <div>
    <News/>

    <header className="shadow-2xl">
      <div className="logo">
        <Link to="/">
          <img src="thecoderstrade.png" alt="Blog Logo" />
        </Link>
      </div>

        <form className="bg-slate-600 p-1 m-2 rounded-2xl flex items-center" >
            <input type='text' placeholder="Search..." className="bg-transparent focus:outline-none w-80" />
            <FaSearch className="bg-slate-600"/>
        </form>

     
        <ul className="flex gap-5 font-serif font-bold">
          <Link to='/'>
            <li className="list">
              Home
            </li>
          </Link>

          <Link to='/about'>
            <li className="list">
              About
            </li>
          </Link>

          <Link to='/Products'>
            <li className="list">
              Products
            </li>
          </Link>

          <Link to='/Courses'>
            <li className="list">
              Courses
            </li>
          </Link>

          <Link to='/sign-in'>
            <li className="list">
              SignIn
            </li>
          </Link>
        </ul>
      

    </header>

    </div>
  )
}


