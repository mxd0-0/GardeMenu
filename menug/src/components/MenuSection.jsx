import MenuItem from './MenuItem';

const MenuSection = () => {
    const categories = ['All category', 'Dinner', 'Lunch', 'Dessert', 'Drink'];

    return (
        <section className="py-16 container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our popular menu</h2>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-full ${
                            cat === 'All category'
                                ? 'bg-amber-600 text-white'
                                : 'bg-gray-200'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {[...Array(4)].map((_, i) => (
                    <MenuItem key={i} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;