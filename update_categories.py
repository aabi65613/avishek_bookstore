import re

# Read the content of the products.ts file
with open('avishek_bookstore/src/data/products.ts', 'r') as f:
    content = f.read()

# Define the category mapping
category_map = {
    "Brushes & Tools": "Art & Craft",
    "Office Supplies": "Stationery & Writing",
    "Art Supplies": "Art & Craft",
    "Apparel": "Accessories & Apparel",
    "Decorative": "Art & Craft",
    "School Supplies": "Stationery & Writing",
    "Craft Material": "Art & Craft",
    "Notebooks & Diaries": "Stationery & Writing",
    "Writing Supplies": "Stationery & Writing",
    "Jewelry & Accessories": "Accessories & Apparel",
    "Stationery": "Stationery & Writing",
    "Hobby & Craft": "Art & Craft",
    "Handwritten Book/Copy": "Stationery & Writing",
}

# Function to replace the category string
def replace_category(match):
    old_category = match.group(1)
    new_category = category_map.get(old_category, old_category)
    return f'category: "{new_category}",'

# Use regex to find and replace the category field in the product objects
# The regex looks for: category: "..."
updated_content = re.sub(r'category: "(.*?)",', replace_category, content)

# Write the updated content back to a new file for review
with open('avishek_bookstore/src/data/products_updated.ts', 'w') as f:
    f.write(updated_content)

print("Updated content written to avishek_bookstore/src/data/products_updated.ts")
