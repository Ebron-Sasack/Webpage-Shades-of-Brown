import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="max-w-full flex items-center justify-between mx-auto px-10 z-50 bg-background-left ">
        <Link to={'/'}>
            <div className='flex items-center justify-center px-6'>
                <img src={logo} className='w-[65px] h-[70px]' alt="" />
                <div className='flex flex-col text-2xl md:text-3xl text-amber-800 font-bold items-start justify-center'>
                    <h1>Shades</h1>
                    <h1>of Brown</h1>
                </div>
            </div>
        </Link>
        <div  className='flex gap-10 items-center'>
            <ul className=' justify-center hidden md:flex text-amber-800 text-lg font-medium items-center gap-8 '>
                <NavLink to={'/'}><li>Home</li></NavLink>
                <NavLink to={'/about'}><li>About Us</li></NavLink>
                <NavLink to={'/category'}><li>Category</li></NavLink>
                <NavLink to={'/review'}><li>Review</li></NavLink>
            </ul>
            <div className='flex justify-center items-center gap-4'>
                <button className='text-lg text-amber-800 rounded-lg bg-white px-4 py-2'>Login</button>
            </div>
        </div>
        

    </div>
  )
}
