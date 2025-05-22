import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className="max-w-full bg-background-left px-24 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-24 mx-auto">
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Company</h2>
                <div className="flex flex-col items-start justify-center font-medium">
                    <Link to={'/'}>About Us</Link>
                    <Link to={'/'}>Blog</Link>
                    <Link to={'/'}>Contact Us</Link>
                    <Link to={'/'}>Career</Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Our Information</h2>
                <div className="flex flex-col items-start justify-center font-medium">
                    <Link to={'/'}>Privacy</Link>
                    <Link to={'/'}>User Terms & Conditions</Link>
                    <Link to={'/'}>Return Policy</Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Contact Info</h2>
                <div className="flex flex-col items-start justify-center font-medium">
                    <Link to={'/'}>+91 9328744092</Link>
                    <Link to={'/'}>shadesofbrown@gmail.com</Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Customer Service</h2>
                <div className="flex flex-col items-start justify-center font-medium">
                    <Link to={'/'}>My Account</Link>
                    <Link to={'/'}>Track Your Order</Link>
                    <Link to={'/'}>Return</Link>
                    <Link to={'/'}>FAQ</Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Additional info</h2>
                <div className="flex flex-col items-start justify-center font-medium">
                    <Link to={'/'}>Review</Link>
                    <Link to={'/'}>Ratings</Link>
                </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-3">
                <h2 className="text-xl font-bold uppercase">Socials</h2>
                <div className="flex items-center justify-start font-medium gap-4">
                    <Link to={'/'}><Instagram /></Link>
                    <Link to={'/'}><Facebook /></Link>
                    <Link to={'/'}><Twitter /></Link>
                </div>
            </div>


        </div>
    </div>
  )
}
