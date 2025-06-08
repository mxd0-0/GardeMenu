const HoursSection = () => (
    <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold mb-4">We are open from</h3>
                <p className="font-bold">Monday-Sunday</p>
                <p>Launch: 16hr-8un-1130min -0200p01</p>
                <p>Dinner: Sunday: 6k00min -0800p01</p>
                <p>5k00min -0800p01</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold">
                    Green now
                </button>
                <button className="bg-black text-white px-8 py-3 rounded-full font-bold">
                    Reservation
                </button>
            </div>
        </div>
    </section>
);

export default HoursSection;