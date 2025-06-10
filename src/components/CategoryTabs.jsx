export default function CategoryTabs({ categories, selected, onSelect }) {
    return (
        <div
            className="w-full overflow-x-auto py-4 px-6 lg:px-24 flex justify-center"
            id="menu"
        >
            <div className="inline-flex space-x-3 min-w-max">
                {categories.map((cat) => (
                    <button
                        key={cat.name}
                        onClick={() => onSelect(cat.name)}
                        className={`px-4 py-2 rounded-full border text-sm md:text-lg font-bold whitespace-nowrap transition-all duration-200
                            ${
                                selected === cat.name
                                    ? 'bg-primary text-white border-primary shadow'
                                    : 'bg-white text-gray-700 border-gray-300 hover:bg-primary/10 hover:text-primary'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
