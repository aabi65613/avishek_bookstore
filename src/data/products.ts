 // src/data/products.ts
import { Product } from "@/types/product";

// Demo product data - easy to edit
// IMPORTANT: All image paths now assume the file is directly in the /public folder (e.g., /1000486851.jpg).

export const demoProducts: Product[] = [
  // Product 1: Brush (using IMG_20251011_221013_733.jpg)
  {
    id: 1,
    category: "Brushes & Tools",
    title: "Extremely Soft Brush",
    price: 25.00,
    description: "Brushes that reach every corner of your teeth.",
    imageUrl: "/IMG_20251011_221013_733.jpg", 
  }, 
  // Product 2: Pen (using IMG_20251011_221616_284.jpg)
  {
    id: 2,
    category: "Stationery",
    title: "golden roopon",
    price: 11.00,
    description: " exta shine.",
    imageUrl: "/IMG_20251011_221616_284.jpg", 
  },
  // Product 3: Water Color (using IMG_20251011_221652_317.jpg)
  {
    id: 3,
    category: "Art Supplies",
    title: "Water Color Set",
    price: 50.00,
    description: "Premium quality set at a heavy discount.",
    imageUrl: "/IMG_20251011_221652_317.jpg", 
  },
  // Product 4: Black Shirt (using IMG_20251011_221710_762.jpg)
  {
    id: 4,
    category: "Apparel",
    title: "Black Comfort Shirt",
    price: 518.75,
    description: "Super comfortable shirt",
    imageUrl: "/IMG_20251011_221710_762.jpg", 
  },
  // Product 5: Glue (using IMG_20251011_221826_587.jpg)
  {
    id: 5,
    category: "Hobby & Craft",
    title: "3D Printed Glue",
    price: 99.00,
    description: "Beginner friendly design helper",
    imageUrl: "/IMG_20251011_221826_587.jpg", 
  },
  // Product 6: Deep Black Shirt (using IMG_20251011_221833_765.jpg)
  {
    id: 6,
    category: "Apparel",
    title: "Deep Black T-Shirt",
    price: 559.95,
    description: "Comfortable",
    imageUrl: "/IMG_20251011_221833_765.jpg", 
  },
  // Product 7: Candle Set (using original uploaded name 1000486851.jpg)
  {
    id: 7,
    category: "Gifts",
    title: "Scented Candle Set",
    price: 29.99,
    description: "Set of 3 relaxing aromatherapy candles.",
    imageUrl: "/1000486851.jpg", 
  },
  // Product 8: Using uploaded image 1000486856.jpg
  {
    id: 8,
    category: "Gifts",
    title: "Personalized Mug",
    price: 12.50,
    description: "Customizable mug, perfect for any occasion.",
    imageUrl: "/1000486856.jpg", 
  },
  // Product 9: Using uploaded image 1000486857.jpg
  {
    id: 9,
    category: "Experimental Items",
    title: "DIY Terrarium Kit",
    price: 45.00,
    description: "Create your own mini ecosystem.",
    imageUrl: "/1000486857.jpg", 
  },
  // Product 10: Using uploaded image 1000486858.jpg
  {
    id: 10,
    category: "Experimental Items",
    title: "Levitating Plant Pot",
    price: 89.99,
    description: "A unique pot that floats using magnetic levitation.",
    imageUrl: "/1000486858.jpg", 
  },
  // Product 11: Using uploaded image 1000486850.jpg
  {
    id: 11,
    category: "Books",
    title: "The Midnight Library",
    price: 16.50,
    description: "A novel about choices, regrets, and finding hope.",
    imageUrl: "/1000486850.jpg", 
  },
  // Product 12: Using uploaded image 1000486455.jpg
  {
    id: 12,
    category: "Skincare",
    title: "Gentle Face Cleanser",
    price: 19.99,
    description: "Removes impurities without drying the skin.",
    imageUrl: "/1000486455.jpg", 
  },
  // Product 13: Red Plastic Tape Dispenser (using IMG_20251101_155800_289.jpg)
  {
    id: 13,
    category: "Stationery",
    title: "Heavy-Duty Tape Dispenser",
    price: 150.00, // Estimated INR price
    description: "A durable, heavy-duty red plastic tape dispenser with a serrated cutter, perfect for desktop use in homes, offices, or schools.",
    imageUrl: "/IMG_20251101_155800_289.jpg", 
  },
  // Product 14: Princess Pencil Box (using IMG_20251101_155848_253.jpg)
  {
    id: 14,
    category: "Stationery",
    title: "Princess Stationery Pouch",
    price: 199.00, // Estimated INR price
    description: "A vibrant, pink-themed pencil pouch featuring popular princess characters. Ideal for school children to organize their pens, pencils, and other stationery.",
    imageUrl: "/IMG_20251101_155848_253.jpg", 
  },
  // Product 15: Camlin Unruled Notebook (using IMG_20251101_161203_085.jpg)
  {
    id: 15,
    category: "Handwritten Book/Copy",
    title: "Camlin Unruled Notebook (Plain Cover)",
    price: 40.00, // Estimated INR price
    description: "A standard, high-quality Camlin unruled notebook. Perfect for general note-taking, drawing, and school work.",
    imageUrl: "/IMG_20251101_161203_085.jpg", 
  },
  // Product 16: Camlin Unruled Notebook (Bicycle Cover) (using IMG_20251101_161216_390.jpg)
  {
    id: 16,
    category: "Handwritten Book/Copy",
    title: "Camlin Unruled Notebook (Bicycle Cover)",
    price: 45.00,
    description: "A high-quality, unruled notebook from Camlin, featuring a vibrant bicycle cover design. Ideal for sketching, note-taking, or creative writing. Standard A4 size, 100 pages.",
    imageUrl: "/IMG_20251101_161216_390.jpg",
  },
  // Product 17: Set of 6 Colorful Gel Pens (using IMG_20251101_161308_512.jpg)
  {
    id: 17,
    category: "Stationery",
    title: "Set of 6 Colorful Gel Pens",
    price: 99.00,
    description: "A set of six smooth-writing gel pens in assorted vibrant colors. Perfect for highlighting, journaling, and adding a splash of color to notes and artwork.",
    imageUrl: "/IMG_20251101_161308_512.jpg",
  },
  // Product 18: Cartoon Character Eraser Set (using IMG_20251101_161313_144.jpg)
  {
    id: 18,
    category: "Stationery",
    title: "Cartoon Character Eraser Set",
    price: 30.00,
    description: "A fun set of erasers shaped like popular cartoon characters. High-quality rubber for clean, smudge-free erasing. Great for kids and collectors.",
    imageUrl: "/IMG_20251101_161313_144.jpg",
  },
  // Product 19: Transparent Geometry Box/Pencil Case (using IMG_20251101_161329_092.jpg)
  {
    id: 19,
    category: "Stationery",
    title: "Transparent Geometry Box/Pencil Case",
    price: 120.00,
    description: "A durable, transparent plastic pencil case or geometry box. Provides clear visibility of contents, making it easy to find pens, pencils, and other small stationery items.",
    imageUrl: "/IMG_20251101_161329_092.jpg",
  },
  // Product 20: Miniature Stapler and Pin Set (using IMG_20251101_161348_044.jpg)
  {
    id: 20,
    category: "Stationery",
    title: "Miniature Stapler and Pin Set",
    price: 75.00,
    description: "A compact, easy-to-carry miniature stapler with a box of pins. Ideal for quick fixes, school projects, and portable office use.",
    imageUrl: "/IMG_20251101_161348_044.jpg",
  },
  // Product 21: Colorful Paper Clips and Binder Clips Set (using IMG_20251101_161350_955.jpg)
  {
    id: 21,
    category: "Stationery",
    title: "Colorful Paper Clips and Binder Clips Set",
    price: 50.00,
    description: "An assortment of colorful paper clips and small binder clips for organizing documents and papers. Comes in a reusable plastic container.",
    imageUrl: "/IMG_20251101_161350_955.jpg",
  },
  // Product 22: Large Capacity Pencil Pouch (Blue) (using IMG_20251101_161455_212.jpg)
  {
    id: 22,
    category: "Stationery",
    title: "Large Capacity Pencil Pouch (Blue)",
    price: 150.00,
    description: "A spacious, durable blue fabric pencil pouch with a zipper closure. Designed to hold a large number of pens, pencils, markers, and other school supplies.",
    imageUrl: "/IMG_20251101_161455_212.jpg",
  },
  // Product 23: Set of 12 Color Pencils (using IMG_20251101_161504_020.jpg)
  {
    id: 23,
    category: "Stationery",
    title: "Set of 12 Color Pencils",
    price: 120.00,
    description: "A standard set of 12 high-quality color pencils. Features smooth lead for vibrant coloring and shading. Perfect for students and artists.",
    imageUrl: "/IMG_20251101_161504_020.jpg",
  },
  // Product 24: Wooden Scale/Ruler (30cm) (using IMG_20251101_161512_767.jpg)
  {
    id: 24,
    category: "Stationery",
    title: "Wooden Scale/Ruler (30cm)",
    price: 25.00,
    description: "A classic 30cm wooden ruler with clear markings. Durable and essential for school, office, and crafting use.",
    imageUrl: "/IMG_20251101_161512_767.jpg",
  },
  // Product 25: Assorted Fashion Jewelry Set (using jewelry.jpg)
  {
    id: 25,
    category: "Jewelry",
    title: "Assorted Fashion Jewelry Set",
    price: 399.00,
    description: "A collection of trendy fashion jewelry, including necklaces, earrings, and bracelets. Perfect for gifting or adding a stylish touch to any outfit.",
    imageUrl: "/jewelry.jpg",
  },
  // Product 26: Dual-Compartment Metal Pencil Box (using pencil box.jpg)
  {
    id: 26,
    category: "Stationery",
    title: "Dual-Compartment Metal Pencil Box",
    price: 180.00,
    description: "A sturdy, dual-compartment metal pencil box with a magnetic closure. Features a built-in sharpener and a timetable slot. Ideal for school children.",
    imageUrl: "/pencil-box.jpg",
  },
  // Product 27: Assorted Decorative Sticker Sheets (Pack of 10) (using stickers.jpg)
  {
    id: 27,
    category: "Hobby & Craft",
    title: "Assorted Decorative Sticker Sheets (Pack of 10)",
    price: 99.00,
    description: "A pack of 10 sheets of assorted decorative stickers, including cartoon, floral, and motivational designs. Perfect for scrapbooking, decorating notebooks, and crafts.",
    imageUrl: "/stickers.jpg",
  },
  // Product 28: Premium A4 White Drawing Paper (50 Sheets) (using white page.jpg)
  {
    id: 28,
    category: "Handwritten Book/Copy",
    title: "Premium A4 White Drawing Paper (50 Sheets)",
    price: 150.00,
    description: "A pack of 50 sheets of high-quality, thick A4 white paper, ideal for drawing, sketching, and printing. Acid-free for long-lasting artwork.",
    imageUrl: "/white-page.jpg",
  },
  // Product 29: Transparent Correction Tape Dispenser (using cost tape.jpg)
  {
    id: 29,
    category: "Stationery",
    title: "Transparent Correction Tape Dispenser",
    price: 45.00,
    description: "An easy-to-use transparent correction tape dispenser. Provides instant, clean corrections over pen, marker, or print. Essential for school and office work.",
    imageUrl: "/cost-tape.jpg",
  },
  // Product 30: Set of 4 High-Quality Black Gel Pens (using IMG_20251101_160046_934.jpg)
  {
    id: 30,
    category: "Stationery",
    title: "Set of 4 High-Quality Black Gel Pens",
    price: 120.00,
    description: "A set of four premium black gel pens with a fine tip for smooth, consistent writing. Quick-drying ink, perfect for professional and academic use.",
    imageUrl: "/IMG_20251101_160046_934.jpg",
  },
];

// Function to get all unique categories from the products
export const getCategories = (): string[] => {
  const categories = demoProducts.map(product => product.category);
  return [...new Set(categories)]; // Return unique category names
};
