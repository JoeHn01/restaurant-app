import React from 'react';
import styles from './menu-overview.module.css';

interface Dish {
  name: string;
  price: number;
  ingredients: string;
  calories: number;
  description: string;
  category: string;
}

const dishes: Dish[] = [{
    "name": "Man'oushe",
    "price": 4.99,
    "ingredients": "Flatbread, za'atar, olive oil, optional toppings (cheese, vegetables)",
    "calories": 200,
    "description": "A Middle Eastern pizza topped with za'atar spice blend and olive oil. Choose from plain za'atar, or add toppings like cheese and vegetables.",
    "category": "Sides"
  },
  {
    "name": "Shish Barak (vegetarian)",
    "price": 14.99,
    "ingredients": "Dumplings, yogurt sauce, mint, onions, fried pine nuts",
    "calories": 450,
    "description": "Vegetarian dumplings filled with cheese or vegetables, served in a creamy yogurt sauce with fresh mint, onions, and toasted pine nuts.",
    "category": "Entree"
  },
  {
    "name": "Hibiscus Tea (hot or cold)",
    "price": 3.99,
    "ingredients": "Dried hibiscus flowers, water, sugar (optional)",
    "calories": 20,
    "description": "A vibrant red tea with a tart and cranberry-like flavor. Enjoy hot or iced.",
    "category": "Drinks"
  },
  {
    "name": "Baba Ghanoush",
    "price": 7.99,
    "ingredients": "Roasted eggplant, tahini, garlic, lemon juice, olive oil, pomegranate seeds",
    "calories": 250,
    "description": "Smoky roasted eggplant blended into a delicious dip with tahini, garlic, and lemon juice. Topped with vibrant pomegranate seeds.",
    "category": "Appetizer"
  },
  {
    "name": "Kibbeh",
    "price": 15.99,
    "ingredients": "Bulgur wheat, ground lamb, pine nuts, onions, spices",
    "calories": 400,
    "description": "Spiced ground lamb stuffed into a cracked wheat shell and baked to perfection. Served with yogurt sauce and fresh herbs.",
    "category": "Entree"
  },
  {
    "name": "Fattoush Salad",
    "price": 6.99,
    "ingredients": "Romaine lettuce, cucumber, radish, tomato, toasted pita bread, lemon juice, olive oil",
    "calories": 200,
    "description": "A crunchy salad with romaine lettuce, cucumbers, radishes, tomatoes, and toasted pita bread crumbles dressed with lemon and olive oil.",
    "category": "Sides"
  },
  {
    "name": "Loukoumades",
    "price": 5.99,
    "ingredients": "Dough balls, honey syrup, cinnamon, optional toppings (nuts, ice cream)",
    "calories": 250,
    "description": "Golden fried dough balls drizzled with sweet honey syrup and sprinkled with cinnamon. Enjoy plain or with additional toppings like nuts and ice cream.",
    "category": "Dessert"
  },
  {
    "name": "Ayran",
    "price": 2.99,
    "ingredients": "Yogurt, water, salt",
    "calories": 100,
    "description": "A refreshing yogurt drink with a slightly savory taste. Popular accompaniment to Middle Eastern meals.",
    "category": "Drinks"
  },
  {
    "name": "Moussaka",
    "price": 18.99,
    "ingredients": "Ground lamb, eggplant, bechamel sauce, onions, spices",
    "calories": 550,
    "description": "Layers of seasoned ground lamb and tender eggplant baked with a creamy bechamel sauce. A hearty and flavorful Greek dish.",
    "category": "Entree"
  },
  {
    "name": "Shawarma Platter",
    "price": 19.99,
    "ingredients": "Thinly sliced, marinated chicken or lamb, pita bread, hummus, tabbouleh salad, tahini sauce, pickled vegetables",
    "calories": 600,
    "description": "Flavorful shaved chicken or lamb served on warm pita bread with hummus, tabbouleh salad, tahini sauce, and pickled vegetables.",
    "category": "Entree"
  },
  {
    "name": "Tabbouleh Salad",
    "price": 5.99,
    "ingredients": "Parsley, bulgur wheat, tomatoes, cucumber, lemon juice, olive oil, mint",
    "calories": 150,
    "description": "A refreshing salad with bulgur wheat, chopped parsley, tomatoes, cucumber, and a citrusy dressing.",
    "category": "Sides"
  },
  {
    "name": "Umm Ali",
    "price": 6.99,
    "ingredients": "Crescent rolls, milk, sugar, nuts, raisins, cinnamon",
    "calories": 350,
    "description": "Bread pudding made with flaky crescent rolls, soaked in milky custard, and topped with nuts, raisins, and a sprinkle of cinnamon.",
    "category": "Dessert"
  },
  {
    "name": "Muhammara (vegetarian)",
    "price": 7.99,
    "ingredients": "Roasted red peppers, walnuts, pomegranate molasses, garlic, spices",
    "calories": 200,
    "description": "A vibrant roasted red pepper dip with walnuts, pomegranate molasses, garlic, and spices. Perfect for dipping with pita bread or vegetables.",
    "category": "Sides"
  },
  {
    "name": "Turkish Coffee",
    "price": 3.99,
    "ingredients": "Finely ground coffee, water, sugar (optional)",
    "calories": 50,
    "description": "Strong and flavorful coffee brewed in a cezve (pot) and traditionally served with a piece of Turkish delight.",
    "category": "Drinks"
  },
  {
    "name": "Falafel Wrap",
    "price": 8.99,
    "ingredients": "Falafel balls, hummus, tahini, pita bread, cucumber, tomato, onion",
    "calories": 450,
    "description": "A classic wrap filled with crispy falafel, creamy hummus, and fresh vegetables. Choose between a traditional pita bread or whole wheat wrap.",
    "category": "Sandwich"
  },
  {
    "name": "Hummus with Za'atar",
    "price": 6.99,
    "ingredients": "Hummus, za'atar spice blend, olive oil, pita bread",
    "calories": 220,
    "description": "Creamy hummus topped with aromatic za'atar spice and a drizzle of olive oil. Enjoy with warm pita bread for scooping.",
    "category": "Appetizer"
  },
  {
    "name": "Baklava",
    "price": 5.99,
    "ingredients": "Phyllo dough, honey, chopped nuts, spices",
    "calories": 300,
    "description": "Layers of flaky phyllo dough filled with chopped nuts, baked golden brown, and drizzled with sweet honey syrup.",
    "category": "Dessert"
  },
  {
    "name": "Künefe",
    "price": 7.99,
    "ingredients": "Shredded kadaifi dough, mozzarella cheese, syrup, rosewater",
    "calories": 400,
    "description": "A warm dessert with crispy shredded kadaifi dough filled with gooey mozzarella cheese and soaked in a sweet syrup flavored with rosewater.",
    "category": "Dessert"
  },
  {
    "name": "Fava Bean Salad (vegan)",
    "price": 6.99,
    "ingredients": "Fava beans, tomatoes, red onion, parsley, lemon juice, olive oil",
    "calories": 180,
    "description": "A protein-packed salad with fava beans, tomatoes, red onion, parsley, and a zesty lemon and olive oil dressing.",
    "category": "Sides"
  }];

const MenuOverview: React.FC = () => {
    // Calculate the number of dishes in each category
    const menuCategories = Array.from(new Set(dishes.map(dish => dish.category)));
    
    // Find the best performing dish in each category
    const bestDishes = menuCategories.map(category => {
      const categoryDishes = dishes.filter(dish => dish.category === category);
      const bestDish = categoryDishes.reduce((prev, current) => (prev.price > current.price ? prev : current), categoryDishes[0]);
      return bestDish;
    });
  
    return (
      <div className={styles.menuOverview}>
        <h2>Menu Overview</h2>
        <div className={styles.categoryContainer}>
          {menuCategories.map((category, index) => (
            <div key={index} className={styles.categoryCard}>
              <h3>{category}</h3>
              <p>Dishes: {dishes.filter(dish => dish.category === category).length}</p>
              <p>Best Dish: {bestDishes[index].name}</p>
              <p>Price: ${bestDishes[index].price}</p>
              <p>Description: {bestDishes[index].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default MenuOverview;

