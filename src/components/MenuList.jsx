// 
// // src/components/MenuList.jsx
// import { useEffect, useState, useRef, useCallback } from 'react';
// import { fetchMenuItems } from '../services/api';
// import MenuCard from './MenuCard';


//  function MenuList({ category }) {
//     const [items, setItems] = useState([]);
//     const [page, setPage] = useState(0);
//     const [hasMore, setHasMore] = useState(true);
//     const loader = useRef();

//     const loadItems = useCallback(async () => {
//         const res = await fetchMenuItems(category);
//         setItems(res);
//         setHasMore(false); // Assuming full fetch
//     }, [category]);

//     useEffect(() => {
//         setItems([]);
//         setPage(0);
//         setHasMore(true);
//         loadItems();
//     }, [category, loadItems]);

//     return (
//         <section className="px-6 lg:px-24 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {items.map(item => (
//                 <MenuCard key={item.id} item={item} />
//             ))}
//         </section>
//     );
// }
// export default MenuList;



// src/components/MenuList.jsx
import { useEffect, useState } from 'react';
import MenuCard from './MenuCard';
import { fetchMenuItems } from '../services/api'; // FIXED IMPORT

export default function MenuList({ category }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!category) return;

        async function loadItems() {
            setLoading(true);
            console.log('[DEBUG] Fetching menu for category:', category); // <-- Add this
            const data = await fetchMenuItems(category);
            console.log('[DEBUG] Menu data received:', data); // <-- Add this
            setItems(data);
            setLoading(false);
        }

        loadItems();
        }, [category]);

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-tinos text-center">
            {category?.name ?? 'Select a Category'} Menu
            </h2>

            {loading ? (    
                <p className="text-gray-600 ">Loading menu items...</p>
            ) : items.length === 0 ? (
                <p className="text-gray-500">No items found for this category.</p>
            ) : (
               <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-4">
                    {items.map((item) => (
                        <MenuCard key={item.id} item={item} className="
                         w-full my-2 sm:my-4 md:my-6 lg:my-8"/>
                    ))}
                </div>
            )}
        </section>
    );
}
