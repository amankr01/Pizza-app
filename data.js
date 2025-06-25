const inventory = [
  {
    type: 'veg',
    items: [
      { img: '/v3/assets/veg1.webp', name: 'Fresh Green Capsicum', price: 100 },
      { img: '/v3/assets/veg2.jpg', name: 'Juicy Red Tomato', price: 105 },
      { img: '/v3/assets/veg3.jpg', name: 'Crispy Sliced Onion', price: 110 },
      { img: '/v3/assets/veg4.jpg', name: 'Sweet Golden Corn', price: 115 },
      { img: '/v3/assets/veg5.jpg', name: 'Tender White Mushroom', price: 120 },
    ],
  },
  {
    type: 'non veg',
    items: [
      { img: '/v3/assets/non.webp', name: 'Spicy Chicken Tikka', price: 140 },
      { img: '/v3/assets/non2.webp', name: 'Barbecue Grilled Chicken', price: 145 },
      { img: '/v3/assets/nonveg1.jpg', name: 'Smoked Pork Pepperoni', price: 150 },
      { img: '/v3/assets/nonveg2.jpg', name: 'Hot Spicy Sausage', price: 155 },
      { img: '/v3/assets/nonveg3.jpg', name: 'Honey Glazed Ham', price: 160 },
    ],
  },
  {
    type: 'chesse',
    items: [
      { img: '/v3/assets/chesse1.jpg', name: 'Classic Mozzarella Cheese', price: 180 },
      { img: '/v3/assets/chesse2.jpg', name: 'Sharp Aged Cheddar', price: 185 },
      { img: '/v3/assets/chesse3.jpg', name: 'Grated Parmesan Blend', price: 190 },
      { img: '/v3/assets/chesse4.jpg', name: 'Creamy Gouda Slices', price: 195 },
      { img: '/v3/assets/chesse5.jpg', name: 'Bold Blue Cheese', price: 200 },
      { img: '/v3/assets/cheese6.jpg', name: 'Fresh Soft Ricotta', price: 205 },
    ],
  },
  {
    type: 'garlic',
    items: [
      { img: '/v3/assets/garlic.jpg', name: 'Crushed Fresh Garlic', price: 110 },
      { img: '/v3/assets/garlic1.jpg', name: 'Golden Roasted Garlic', price: 115 },
      { img: '/v3/assets/garlic2.jpg', name: 'Creamy Garlic Butter', price: 120 },
      { img: '/v3/assets/garlic3.jpg', name: 'Toasted Garlic Flakes', price: 125 },
    ],
  },
  {
    type: 'special',
    items: [
      { img: '/v3/assets/special.jpg', name: 'Special Fresh Pizza Mix', price: 299 },
      { img: '/v3/assets/special1.jpg', name: 'Mix Special Roasted Pizza', price: 249 },
    ],
  },
];

// Get DOM elements
const item = document.getElementById('items');
let types = document.querySelectorAll('.options');
let all = document.getElementById('all');

let box = '';

// Render a single category's items
function render(category) {
  category.items.forEach((y) => {
    box += `
      <div class="card">
        <div class="img-box">
          <img src="${y.img}" alt="${y.name}">
        </div>
        <div class="about">
          <p>${y.name}</p>
          <div class="xflex price-addbtn">
            <p>₹${y.price}</p>
            <button type="button">+</button>
          </div>
        </div>
      </div>
    `;
  });
}

// Show all items initially
function soweAllItems() {
  box = '';
  inventory.forEach((x) => render(x));
  item.innerHTML = box;

  // Remove 'focus' from all category buttons
  types.forEach(el => el.classList.remove('focus'));
  if (all) all.classList.add('focus'); // Optional: highlight "All"
}

soweAllItems(); // initial load

// Handle each category click
types.forEach((optionBox, boxindex) => {
  optionBox.addEventListener('click', () => {
    box = '';
    render(inventory[boxindex]);
    item.innerHTML = box;

    // Highlight selected category
    types.forEach(el => el.classList.remove('focus'));
    optionBox.classList.add('focus');
    if (all) all.classList.remove('focus'); // Remove "All" highlight if category is clicked
  });
});

// Handle "All" button click
if (all) {
  all.addEventListener('click', soweAllItems);
}