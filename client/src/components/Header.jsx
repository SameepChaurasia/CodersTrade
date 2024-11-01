import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import News from "../pages/News";
// import { useSelector } from 'react-redux';

export default function Header () {
  // const { currentUser } = useSelector((state) => state.user);
  return (
  <div>
    <News/>

    <header className="shadow-2xl">
      <div className="logo">
        <Link to="/">
          <img src="thecoderstrade.png" alt="Blog Logo" />
        </Link>
      </div>

        <form className="bg-gradient-to-r from-cyan-200 to-blue-300 p-1 m-2 rounded-2xl flex items-center ring-2 ring-blue-800" >
            <input type='text' placeholder="Search..." className="bg-transparent text-gray-800  focus:outline-none w-80" />
            <FaSearch className="bg-gradient-to-r from-cyan-300 to-blue-300"/>
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

          <li className="list">
            Login
          </li>

          {/* <Link to='/sign-in'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-100 hover:underline'> Sign in</li>
            )}
          </Link> */}

        </ul>

    </header>

    </div>
  )
}


