export const categories = ["South Indian", "Main Course", "Fast Food", "Italian"] as const;
export type Category = (typeof categories)[number];

export interface MenuItem {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number; // in INR
  category: Category;
  image: string;
  isVeg: boolean;
}

export const menuItems: MenuItem[] = [
  { id: "1", slug: "idli-sambar", name: "Idli Sambar", description: "Soft steamed rice cakes served with sambar and three fresh chutneys.", price: 120, category: "South Indian", image: "/images/idli-sambar.jpeg", isVeg: true },
  { id: "2", slug: "paneer-butter-masala", name: "Paneer Butter Masala", description: "Cottage cheese in a rich tomato and butter gravy, served with naan and jeera rice.", price: 280, category: "Main Course", image: "/images/paneer-butter-masala.jpeg", isVeg: true },
  { id: "3", slug: "chole-bhature", name: "Chole Bhature", description: "Spicy chickpea curry with fluffy fried bhature, onion and pickle.", price: 180, category: "Main Course", image: "/images/chole-bhature.jpeg", isVeg: true },
  { id: "4", slug: "grilled-corn-sandwich", name: "Grilled Corn Sandwich", description: "Toasted sandwich filled with cheesy sweet corn, served with mint and garlic dips.", price: 110, category: "Fast Food", image: "/images/grilled-corn-sandwich.jpeg", isVeg: true },
  { id: "5", slug: "veg-cheese-burger", name: "Veg Cheese Burger", description: "Crispy veg patty with cheese, lettuce, tomato and cucumber in a sesame bun.", price: 150, category: "Fast Food", image: "/images/veg-cheese-burger.jpeg", isVeg: true },
  { id: "6", slug: "corn-cheese-pizza", name: "Corn Cheese Pizza", description: "Hand-tossed pizza topped with melted mozzarella and sweet corn.", price: 240, category: "Italian", image: "/images/corn-cheese-pizza.jpeg", isVeg: true },
  { id: "7", slug: "red-sauce-pasta", name: "Red Sauce Pasta", description: "Penne tossed in a tangy tomato sauce with fresh herbs.", price: 220, category: "Italian", image: "/images/red-sauce-pasta.jpeg", isVeg: true },
];

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.slug === slug);
}