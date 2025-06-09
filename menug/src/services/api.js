// src/services/api.js
const BASE_URL = 'http://127.0.0.1:8080';

export async function fetchCategories() {
    try {
        const response = await fetch(`${BASE_URL}/categories`);
        if (!response.ok) throw new Error('Failed to fetch categories');
        return await response.json();
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
export async function fetchMenuItems(category) {
    try {
        const res = await fetch(`http://localhost:8080/menu?category=${encodeURIComponent(category)}`);
        if (!res.ok) throw new Error('Failed to fetch menu');
        return await res.json();
    } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
}