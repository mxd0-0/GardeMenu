// src/components/CategoryTabs.jsx
export default function CategoryTabs({ categories, selected, onSelect }) {
    return (
        <div className="w-full overflow-x-auto py-4 px-6 lg:px-24" id="menu">
            <div className="inline-flex space-x-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => onSelect(cat)}
                        className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition
              ${
                            selected === cat
                                ? 'bg-orange-500 text-white border-orange-500'
                                : 'bg-white text-gray-700 border-gray-300 hover:bg-orange-100'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>
        </div>
    );
}