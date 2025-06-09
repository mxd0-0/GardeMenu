// src/components/Footer.jsx
export default function Footer() {
    return(
        <footer className="bg-gray-900 text-white py-8 px-6 lg:px-24">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm">&copy; {new Date().getFullYear()} YourRestaurant. All rights reserved.</p>
                <div className="mt-4 sm:mt-0 space-x-4 text-sm">
                    <a href="#menu" className="hover:underline">Menu</a>
                    <a href="#hours" className="hover:underline">Hours</a>
                </div>
            </div>
        </footer>
    );
}