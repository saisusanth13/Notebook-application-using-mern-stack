import notesbg from './images/notesbg.png'
import { Link, useHistory } from 'react-router-dom'

export function NavBar(props) {
  let history = useHistory()
  const HandleLogout = ()=>{
    localStorage.removeItem('token');
    history.push('/login');
  }
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-3">
        <div className="flex items-center space-x-1 flex-shrink-0 text-white mr-6">
          <img src={notesbg} className="h-12 w-16 mr-4 mt-2 " alt="" />
          <span className="block mt-2 font-bold text-2xl font-serif cursor-pointer lg:inline-block lg:mt-0 text-white hover:text-neutral-400  mr-4">NoteBook</span>
        </div>
        <div className="w-full block flex-grow  lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link to="/" className="block mt-2 font-bold text-xl font-serif lg:inline-block lg:mt-0 text-white hover:text-neutral-400  mr-4">
              Home
            </Link>
            <Link to="/about" className="block mt-2 font-bold text-xl font-serif lg:inline-block lg:mt-0 text-white hover:text-neutral-400  mr-4">
              About
            </Link>
            <Link to="#responsive-header" className="block mt-2 text-xl font-bold font-serif lg:inline-block lg:mt-0 text-white hover:text-neutral-400 ">
              Blog
            </Link>
          </div>
          <div>
            <input type="text" id="search-navbar" className="block p-2 pl-10 lg:w-full sm:w-2 text-gray-900 bg-white rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 r-5 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 font-serif mt-2 " placeholder="Search" />
          </div>
          <div>
            <Link to="/" className="inline-block text-sm ml-2 px-4 py-2.5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-teal-600 mt-2 mr-2 font-serif lg:mt-0 ">Search</Link>
          </div>
          
          {!localStorage.getItem('token') ?
          <>
          <div>
            <Link to="/login" className="inline-block text-sm ml-2 px-4 py-2.5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-teal-600 mt-2 mr-2 font-serif lg:mt-0 ">Login</Link>
          </div>
          <div>
            <Link to="/SignUp" className="inline-block text-sm ml-2 px-4 py-2.5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-teal-600 mt-2 mr-2 font-serif lg:mt-0 ">SignUp</Link>
          </div></> : <button className="inline-block text-sm ml-2 px-4 py-2.5 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-teal-600 mt-2 mr-2 font-serif lg:mt-0 " onClick={HandleLogout}>Logout</button> }
         

          <label htmlFor="teal-toggle" className="inline-flex relative items-center mr-1 cursor-pointer">
            <input type="checkbox" value="" id="teal-toggle" onClick={props.toggleMode} className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span className="ml-1.5 text-sm font-serif font-bold text-white dark:text-gray-300">Mode</span>
          </label>
        </div>
      </nav>
      <svg id="wave" style={{ "transform": "rotate(180deg)", "transition": "0.3s" }} version="1.1" viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
            <stop stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path style={{ "transform": "translate(0, 0px)", "opacity": "1" }} d="M0,90L48,85C96,80,192,70,288,63.3C384,57,480,53,576,45C672,37,768,23,864,28.3C960,33,1056,57,1152,65C1248,73,1344,67,1440,61.7C1536,57,1632,53,1728,43.3C1824,33,1920,17,2016,11.7C2112,7,2208,13,2304,28.3C2400,43,2496,67,2592,71.7C2688,77,2784,63,2880,53.3C2976,43,3072,37,3168,31.7C3264,27,3360,23,3456,31.7C3552,40,3648,60,3744,70C3840,80,3936,80,4032,66.7C4128,53,4224,27,4320,20C4416,13,4512,27,4608,33.3C4704,40,4800,40,4896,48.3C4992,57,5088,73,5184,66.7C5280,60,5376,30,5472,16.7C5568,3,5664,7,5760,21.7C5856,37,5952,63,6048,70C6144,77,6240,63,6336,55C6432,47,6528,43,6624,50C6720,57,6816,73,6864,81.7L6912,90L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" fill="url(#sw-gradient-0)" />
      </svg>


    </div>
  )
}

export default NavBar