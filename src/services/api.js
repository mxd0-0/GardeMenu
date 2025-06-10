// src/services/api.js
const BASE_URL = 'http://192.168.1.112:8080';

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
        const res = await fetch(`${BASE_URL}/menu?category=${encodeURIComponent(category)}`);
        if (!res.ok) throw new Error('Failed to fetch menu');
        return await res.json();
    } catch (error) {
        console.error('Error fetching menu:', error);
        return [];
    }
}



// export async function fetchCategories() {
//   return ['Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Drinks'];
// }

// const menuData = {
//   Breakfast: [
//     { id: 1, name: 'Mhadjeb', description: 'Thin semolina crepes stuffed with a spicy tomato and onion mix.', price: 150 },
//     { id: 2, name: 'Kesra with Olive Oil & Honey', description: 'Traditional semolina flatbread served with olive oil and local honey.', price: 100 },
//     { id: 3, name: 'Baghrir', description: 'Algerian semolina pancakes with honey and butter.', price: 120 },
//     { id: 4, name: 'Lben & Bread', description: 'Fermented milk drink served with traditional bread.', price: 90 },
//     { id: 5, name: 'Maakouda Sandwich', description: 'Fried potato patties in a baguette with harissa and salad.', price: 180 },
//     { id: 6, name: 'Chakchouka with Eggs', description: 'Eggs poached in a spiced tomato and pepper sauce.', price: 160 }
//   ],
//   Lunch: [
//     { id: 7, name: 'Couscous with Lamb', description: 'Steamed semolina served with lamb and vegetable sauce.', price: 450 },
//     { id: 8, name: 'Chorba Frik', description: 'Traditional Algerian soup made with crushed wheat and meat.', price: 200 },
//     { id: 9, name: 'Rechta', description: 'Handmade noodles with chicken and turnip stew.', price: 350 }
//   ],
//   Dinner: [
//     { id: 10, name: 'Tajine Zitoune', description: 'Chicken cooked with olives, mushrooms, and carrots.', price: 400 },
//     { id: 11, name: 'Dolma', description: 'Stuffed vegetables simmered in a savory sauce.', price: 380 },
//     { id: 12, name: 'Merguez with Fries', description: 'Spicy lamb sausages served with fried potatoes.', price: 300 }
//   ],
//   Desserts: [
//     { id: 13, name: 'Makroud', description: 'Date-filled semolina pastries soaked in honey.', price: 100 },
//     { id: 14, name: 'Kalb el Louz', description: 'Almond and semolina cake soaked in orange blossom syrup.', price: 120 },
//     { id: 15, name: 'Zlabia', description: 'Deep-fried syrup-soaked sweet, especially during Ramadan.', price: 80 }
//   ],
//   Drinks: [
//     { id: 16, name: 'Atay B’naanaa (Mint Tea)', description: 'Traditional green tea with fresh mint and sugar.', price: 50 },
//     { id: 17, name: 'Raïb', description: 'Sweetened fermented milk drink.', price: 60 },
//     { id: 18, name: 'Fruit Juice (Orange)', description: 'Fresh-squeezed seasonal orange juice.', price: 100 }
//   ]
// };

// export async function fetchMenuItemsByCategory(category) {
//   return menuData[category] || [];
// }
