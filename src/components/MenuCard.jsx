// src/components/MenuCard.jsx
// export default function MenuCard({item}) {
//     return (
//         <div className="bg-white w-full rounded-2xl shadow-md p-4 hover:shadow-lg transition">
//             <div className="text-lg font-semibold text-primary mb-1">{item.name}</div>
//             <div className="text-sm text-gray-600 mb-2">{item.description}</div>
//             <div className="text-right font-bold text-gray-900">
//                 {(item.price / 100).toFixed(2)}
//                 <span className="text-sm"> USD</span>
//             </div>
//         </div>
//     );
// }

export default function MenuCard({ item }) {
    return (
        <div className="border-2 border-primary/30 w-full rounded-2xl p-4 flex flex-col md:flex-row 
 items-start md:items-center justify-between space-y-2 md:space-y-0 md:space-x-4 hover:shadow-lg transition">
            <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <h3 className="text-lime-600 font-bold text-base whitespace-nowrap">
                {item.price.toFixed(2)} DZD
            </h3>
        </div>
    );
}
