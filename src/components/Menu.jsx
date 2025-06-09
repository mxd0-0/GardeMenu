import { useEffect, useState } from 'react';
import CategoryTabs from '../components/CategoryTabs';
import { fetchCategories } from '../services/api';
import MenuCard from '../components/MenuCard';
import MenuList from './MenuList';

function Menu() {
   const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load categories on mount
    useEffect(() => {
        async function loadCategories() {
            const data = await fetchCategories();
            setCategories(data);
            if (data.length > 0) {
                setSelectedCategory(data[0]);
            }
        }
        loadCategories();
    }, []);

    // Load menu items when category changes
    useEffect(() => {
        if (!selectedCategory) return;

        async function loadItems() {
            setLoading(true);
            const data = await fetchMenuItemsByCategory(selectedCategory);
            setItems(data);
            setLoading(false);
        }

        loadItems();
    }, [selectedCategory]);

    return (
        <section className="max-w-4xl mx-auto px-4 py-10">
           <CategoryTabs />
           <MenuList />
        </section>
    );
}

export default Menu

