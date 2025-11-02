import re

# Read the content of the products.ts file
with open('avishek_bookstore/src/data/products.ts', 'r') as f:
    content = f.read()

# Define the three final categories
CATEGORY_STATIONERY = "Stationery & Writing"
CATEGORY_ART = "Art & Craft"
CATEGORY_APPAREL = "Accessories & Apparel"

# Function to determine the new category based on title and description
def determine_category(title, description):
    title_lower = title.lower()
    description_lower = description.lower()

    # Keywords for Accessories & Apparel
    apparel_keywords = ["shirt", "t-shirt", "earring", "jewelry", "bag cover"]
    if any(keyword in title_lower or keyword in description_lower for keyword in apparel_keywords):
        return CATEGORY_APPAREL

    # Keywords for Art & Craft
    art_keywords = ["brush", "color", "glue", "craft", "decorative", "sequins", "spangles", "stickers", "drawing paper"]
    if any(keyword in title_lower or keyword in description_lower for keyword in art_keywords):
        return CATEGORY_ART

    # Default to Stationery & Writing (Pens, Pencils, Notebooks, Office/School supplies)
    return CATEGORY_STATIONERY

# Regex to find product objects and extract title, description, and current category
# This regex is complex, so we will use a simpler approach to replace the category field directly
# and rely on the fact that the original file structure is consistent.

# We will create a list of all product data and re-write the file.
# First, extract all product objects from the file content.
product_regex = re.compile(r'\{\s*id: (\d+),\s*category: ".*?",\s*title: "(.*?)",\s*price: (.*?),\s*description: "(.*?)",\s*imageUrl: "(.*?)",\s*\},', re.DOTALL)
products_data = product_regex.findall(content)

# Reconstruct the product array with new categories
new_products_array = []
for id_val, title, price, description, imageUrl in products_data:
    # Clean up description to remove extra spaces/newlines
    clean_description = description.strip().replace('\n', ' ').replace('\r', '')
    
    new_category = determine_category(title, clean_description)
    
    new_product_string = f"""  {{
    id: {id_val},
    category: "{new_category}",
    title: "{title}",
    price: {price},
    description: "{clean_description}",
    imageUrl: "{imageUrl}", 
  }},"""
    new_products_array.append(new_product_string)

# Find the start and end of the demoProducts array
start_index = content.find('export const demoProducts: Product[] = [')
end_index = content.find('];', start_index) + 2

# Reconstruct the entire file content
header = content[:start_index]
footer = content[end_index:]

new_content = header + 'export const demoProducts: Product[] = [\n' + '\n'.join(new_products_array) + '\n];' + footer

# Write the updated content back to a new file for review
with open('avishek_bookstore/src/data/products_updated_v2.ts', 'w') as f:
    f.write(new_content)

print("Updated content written to avishek_bookstore/src/data/products_updated_v2.ts")
