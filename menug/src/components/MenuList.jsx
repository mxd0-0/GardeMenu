// src/components/MenuList.jsx
import { useEffect, useState, useRef, useCallback } from 'react';
import { fetchMenuItems } from '../services/api';
import MenuCard from './MenuCard';

export default function MenuList({ category }) {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(0);
    const [hasMore, setHasMore] = useState(true);
    const loader = useRef();

    const loadItems = useCallback(async () => {
        const res = await fetchMenuItems(category);
        setItems(res);
        setHasMore(false); // Assuming full fetch
    }, [category]);

    useEffect(() => {
        setItems([]);
        setPage(0);
        setHasMore(true);
        loadItems();
    }, [category, loadItems]);

    return (
        <section className="px-6 lg:px-24 py-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map(item => (
                <MenuCard key={item.id} item={item} />
            ))}
        </section>
    );
}
