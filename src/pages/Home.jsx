// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryTabs from '../components/CategoryTabs';
import MenuList from '../components/MenuList';
import OpenHours from '../components/OpenHours';
import Footer from '../components/Footer';
import { fetchCategories } from '../services/api';

export default function Home() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function loadCategories() {
            const data = await fetchCategories();
            setCategories(data);
            setSelectedCategory(data[0] || '');
        }
        loadCategories();
    }, []);

    return (
        <div className='w-full '>
            <Navbar />
            <Hero />
            <CategoryTabs
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />
            <MenuList category={selectedCategory} />
            <OpenHours />
            <Footer />
        </div>
    );
}
