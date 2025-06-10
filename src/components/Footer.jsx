import { Link } from 'react-scroll';
// src/components/Footer.jsx
export default function Footer() {
    return(
        <footer id="footer" className="bg-gray-9 w-full bg-primary/50 text-black py-8 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <p className="text-sm">&copy; {new Date().getFullYear()} YourRestaurant. All rights reserved.</p>
                <div className="mt-4 sm:mt-0 space-x-4 text-sm">
                    <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-orange-500">Home</Link>
                     <Link to="menu" smooth duration={500} className="cursor-pointer hover:text-orange-500">Menu</Link>
                    <Link to="hours" smooth duration={500} className="cursor-pointer hover:text-orange-500">Hours</Link>
                     <Link to="footer" smooth duration={500} className="cursor-pointer hover:text-orange-500">Contact</Link>
                </div>
            </div>
        </footer>
    );
}