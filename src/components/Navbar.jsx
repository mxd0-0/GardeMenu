import { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="font-bold text-primary text-lg md:text-3xl">
                    Garden <span className="text-black">Food</span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
                    <Link to="hero" smooth duration={500} className="cursor-pointer text-lg hover:text-primary/80">Home</Link>
                    <Link to="menu" smooth duration={500} className="cursor-pointer text-lg hover:text-primary/80">Menu</Link>
                    <Link to="openhours" smooth duration={500} className="cursor-pointer text-lg hover:text-primary/80">Hours</Link>
                    <Link to="footer" smooth duration={500} className="cursor-pointer text-lg hover:text-primary/80">Contact</Link>
                </nav>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 shadow">
                    <Link to="hero" smooth duration={500} className="block py-2 text-lg hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="menu" smooth duration={500} className="block py-2 text-lg hover:text-primary" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to="openhours" smooth duration={500} className="block py-2 text-lg hover:text-primary" onClick={() => setIsOpen(false)}>Hours</Link>
                    <Link to="footer" smooth duration={500} className="block py-2 text-lg hover:text-primary" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>
            )}
        </header>
    );
}
