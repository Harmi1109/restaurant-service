export const categories = ["Starters", "Mains", "Breads", "Desserts", "Drinks"] as const;
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
  {
    id: "1",
    slug: "paneer-tikka",
    name: "Paneer Tikka",
    description: "Cottage cheese marinated in spiced yogurt and grilled in a tandoor.",
    price: 260,
    category: "Starters",
    image: "/images/paneer-tikka.jpg",
    isVeg: true,
  },
  {
    id: "2",
    slug: "chicken-seekh-kebab",
    name: "Chicken Seekh Kebab",
    description: "Minced chicken with herbs and spices, cooked on skewers.",
    price: 320,
    category: "Starters",
    image: "/images/seekh-kebab.jpg",
    isVeg: false,
  },
  {
    id: "3",
    slug: "butter-chicken",
    name: "Butter Chicken",
    description: "Tender chicken in a creamy tomato and butter gravy.",
    price: 380,
    category: "Mains",
    image: "/images/butter-chicken.jpg",
    isVeg: false,
  },
  {
    id: "4",
    slug: "dal-makhani",
    name: "Dal Makhani",
    description: "Black lentils slow-cooked overnight with cream and butter.",
    price: 280,
    category: "Mains",
    image: "/images/dal-makhani.jpg",
    isVeg: true,
  },
  {
    id: "5",
    slug: "garlic-naan",
    name: "Garlic Naan",
    description: "Soft leavened bread topped with garlic and coriander.",
    price: 70,
    category: "Breads",
    image: "/images/garlic-naan.jpg",
    isVeg: true,
  },
  {
    id: "6",
    slug: "gulab-jamun",
    name: "Gulab Jamun",
    description: "Milk-solid dumplings soaked in warm cardamom syrup.",
    price: 120,
    category: "Desserts",
    image: "/images/gulab-jamun.jpg",
    isVeg: true,
  },
  {
    id: "7",
    slug: "masala-chai",
    name: "Masala Chai",
    description: "Black tea simmered with ginger, cardamom and milk.",
    price: 60,
    category: "Drinks",
    image: "/images/masala-chai.jpg",
    isVeg: true,
  },
  {
    id: "8",
    slug: "sweet-lassi",
    name: "Sweet Lassi",
    description: "Thick, chilled yogurt drink, lightly sweetened.",
    price: 90,
    category: "Drinks",
    image: "/images/sweet-lassi.jpg",
    isVeg: true,
  },
];

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.slug === slug);
}