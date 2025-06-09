
// src/components/Hero.jsx
import saladImage from '../assets/salad.png';
import { Link } from 'react-scroll';

export default function Hero() {
    return (    <section id="hero" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-12 gap-10 bg-[#F0FFF5]">
        {/* Left */}
        <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Welcome to <span className="text-orange-500">delizioso</span>
            </h1>
            <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ultricies at eleifend proin. Congue nibh nulla malesuada ultricies nec quam
            </p>
            <Link
                to="menu"
                smooth
                duration={500}
                className="inline-block px-6 py-3 bg-orange-500 text-white rounded-full font-semibold text-sm shadow hover:bg-orange-600 transition"
            >
                See our menu
            </Link>
        </div>

        {/* Right */}
        <div className="relative">
            <img
                src={saladImage}
                alt="Salad"
                className="w-[300px] md:w-[380px] lg:w-[460px] drop-shadow-xl"
            />
        </div>
    </section>);
}