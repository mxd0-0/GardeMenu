// src/components/MenuCard.jsx
export default function MenuCard({item}) {
    return (<div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
            <div className="text-lg font-semibold text-orange-600 mb-1">{item.name}</div>
            <div className="text-sm text-gray-600 mb-2">{item.description}</div>
            <div className="text-right font-bold text-gray-900">
                {(item.price / 100).toFixed(2)}
                <span className="text-sm"> USD</span>
            </div>
        </div>
    );
}