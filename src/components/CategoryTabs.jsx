
    export default function CategoryTabs({ categories, selected, onSelect }) {
        return(
            <div
                className="w-full items overflow-x-auto py-4 px-6 lg:px-24 flex justify-center"
                id="menu">
                <div
                    className=" inline-flex space-x-3">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => onSelect(cat)}   
                            className={`px-4 py-2 rounded-full border text-md whitespace-nowrap transition
                ${selected === cat ? 'bg-primary text-white border-gray-300' : 'bg-white text-gray-700 border-gray-300 hover:bg-primary/75'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        );
    }