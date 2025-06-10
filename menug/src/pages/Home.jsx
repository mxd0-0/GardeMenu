// src/pages/Home.jsx
import {useEffect, useState} from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryTabs from '../components/CategoryTabs';
import MenuList from '../components/MenuList';
import OpenHours from '../components/OpenHours';
import Footer from '../components/Footer';
import {fetchCategories} from '../services/api';

export default function Home() {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function loadCategories() {
            const data = await fetchCategories();
            const categoryNames = data.map(c => c.name);
            setCategories(categoryNames);
            setSelectedCategory(categoryNames[0] || '');
        }
        loadCategories().then(r => console.log('Categories loaded')).catch(error => console.error('Error loading categories:', error));
    }, []);

    return (<div>
        <Navbar/>
        <Hero/>
        <CategoryTabs
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
        />
        <MenuList category={selectedCategory}/>
        <OpenHours/>
        <Footer/>
    </div>);
}