
// src/components/OpenHours.jsx
export default function OpenHours() {
    return (
        <section id="hours" className="bg-[#FFF7ED] py-16 px-6 lg:px-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Opening Hours</h2>
                <p className="text-gray-600 mb-8">
                    We are open 7 days a week to serve you fresh and delicious meals.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 text-left">
                    <div>
                        <h3 className="font-semibold text-lg text-orange-500 mb-2">Monday - Friday</h3>
                        <p className="text-gray-700">11:00 AM - 10:00 PM</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg text-orange-500 mb-2">Saturday - Sunday</h3>
                        <p className="text-gray-700">09:00 AM - 11:00 PM</p>
                    </div>
                </div>
            </div>
        </section>);
}