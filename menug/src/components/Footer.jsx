const Footer = () => (
    <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                    <h4 className="text-xl font-bold mb-4">Page</h4>
                    <ul className="space-y-2">
                        {['Home', 'About us', 'Menu', 'Order online', 'Catering', 'Reservation'].map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Information</h4>
                    <ul className="space-y-2">
                        {['Testerworld', 'Event'].map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xl font-bold mb-4">Get in touch</h4>
                    <address className="not-italic">
                        <p>5247 Johnson Ave, Bronx, NY</p>
                        <p>94505, Inventio Senior</p>
                        <p>delizioso@gmail.com</p>
                        <p>+123 4567 8501</p>
                    </address>
                </div>
            </div>

            <div className="pt-8 border-t border-gray-700 text-center">
                <p>Viverno gravida muntat egestas foscilias under metus non abia tempor.</p>
                <p className="mt-4">Copyright © 2022 Delizioso</p>
            </div>
        </div>
    </footer>
);

export default Footer;