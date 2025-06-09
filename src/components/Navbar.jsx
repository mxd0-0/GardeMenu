import { Link } from 'react-scroll';

export default function Navbar() {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className=" font-bold text-primary text-lg">Garden <span className='text-black text-lg'>Food</span>  </div>
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                    <Link to="hero" smooth duration={500} className="cursor-pointer hover:text-orange-500">Home</Link>
                    <Link to="menu" smooth duration={500} className="cursor-pointer hover:text-orange-500">Menu</Link>
                    <Link to="hours" smooth duration={500} className="cursor-pointer hover:text-orange-500">Hours</Link>
                    <Link to="footer" smooth duration={500} className="cursor-pointer hover:text-orange-500">Contact</Link>
                </nav>
            </div>
        </header>
    );
}