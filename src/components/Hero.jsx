
    // src/components/Hero.jsx
    import saladImage from '../assets/salad.png';
    import { Link } from 'react-scroll';

    export default function Hero() {
        return (   
            <section id="hero" 
            className="min-h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-24 py-12 gap-10 bg-[#F0FFF5]">
                
                {/* Left */}
            <div className="">
                <img
                    src={saladImage}
                    alt="Salad"
                    className="w-[300px] md:w-[380px] lg:w-[460px] drop-shadow-xl"
                />
            </div>
                    {/* Right */}    
            <div className="max-w-xl text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                    Welcome to <br /> <span className="text-primary">Garden Food</span>
                </h1>
                <p className="text-gray-600 mb-6">
                    Nestled in the heart of Béchar, our garden restaurant blends nature and tradition.
Enjoy fresh, locally-inspired dishes under swaying palm trees, where the scent of mint tea and grilled spices fills the warm desert breeze. A perfect escape for food lovers seeking flavor and calm.
                </p>
                <Link
                    to="menu"
                    smooth
                    duration={500}
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm shadow hover:shadow-lg transition"
                >
                    See our menu
                </Link>  
            </div>

        
        </section>);
    }