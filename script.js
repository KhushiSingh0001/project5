// script.js
// header section
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    navLinks.classList.toggle('active'); // Toggle the 'active' class to show/hide menu
    menuIcon.classList.toggle('active'); // Toggle the active class for the hamburger icon animation
  }
  // JavaScript for sidebar toggle
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

// Scroll to Menu Section
function scrollToMenu() {
    document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
  }
  
  // Cart Functionality
  // Initialize an empty cart array
let cart = [];

// Function to add item to the cart
function addToCart(dishName, dishPrice, button) {
  // Add the item to the cart
  cart.push({ name: dishName, price: dishPrice });

  // Update the cart display
  updateCart();

  // Show success message
  showSuccessMessage(dishName);

  // Change button color after adding the item
  changeButtonColor(button);
}

// Function to update the cart display
function updateCart() {
  // Get the cart container element
  const cartContainer = document.getElementById('cart-container');
  const cartTotal = document.getElementById('cart-total');
  
  // Clear the existing cart contents
  cartContainer.innerHTML = '';

  // Add all items in the cart to the cart container
  let totalPrice = 0;
  cart.forEach((item, index) => {
    // Create a div for each item
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');
    itemDiv.textContent = `${item.name} - ₹${item.price}`;

    // Create a "Remove" button for each item
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-button');
    removeButton.onclick = function() {
      removeFromCart(index);
    };

    // Append the remove button to the item div
    itemDiv.appendChild(removeButton);

    // Append the item div to the cart container
    cartContainer.appendChild(itemDiv);
    
    // Add to the total price
    totalPrice += item.price;
  });

  // Update the total price
  cartTotal.textContent = `Total: ₹${totalPrice}`;
}

// Function to show success message
function showSuccessMessage(dishName) {
  // Create the message element
  const message = document.createElement('div');
  message.classList.add('success-message');
  message.textContent = `${dishName} added successfully to cart!`;

  // Append the message to the body
  document.body.appendChild(message);

  // Remove the message after 3 seconds
  setTimeout(() => {
    message.remove();
  }, 3000);
}

// Function to change the color of the "Add to Cart" button
function changeButtonColor(button) {
  // Change the button's color to indicate the item is added
  button.style.backgroundColor = '#4CAF50';  // Green color
  button.textContent = 'Added';  // Change button text to "Added"
  button.disabled = true;  // Disable the button so it cannot be clicked again
}

// Function to remove an item from the cart
function removeFromCart(index) {
  // Remove the item from the cart by its index
  cart.splice(index, 1);

  // Update the cart display
  updateCart();
}

// Function to place the order
function placeOrder() {
  if (cart.length === 0) {
    alert("Your cart is empty! Please add items to the cart before placing the order.");
    return;
  }

  // Clear the cart after placing the order
  cart = [];

  // Update the cart display (clear the items)
  updateCart();

  // Show the "Order Placed" success message
  showOrderPlacedMessage();
}

// Function to show "Order Placed" message
function showOrderPlacedMessage() {
  // Create the message element
  const message = document.createElement('div');
  message.classList.add('order-placed-message');
  message.textContent = "Your Order has been placed successfully!";

  // Append the message to the body
  document.body.appendChild(message);

  // Remove the message after 3 seconds
  setTimeout(() => {
    message.remove();
  }, 3000);
}

// Function to scroll to the menu section when "Order Now" is clicked
function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Function to handle ratings (you can extend it further if necessary)
function rateDish(dishName, rating) {
  alert(`You rated "${dishName}" with ${rating} stars!`);
}







  // Form Validation
  function validateForm(event) {
    event.preventDefault();
  
    const name = document.querySelector('input[placeholder="Your Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Your Email"]').value.trim();
    const message = document.querySelector('textarea[placeholder="Your Message"]').value.trim();
  
    let valid = true;
  
    if (name.length < 3) {
      alert("Name must be at least 3 characters long.");
      valid = false;
    }
    if (!email.includes("@") || email.length < 5) {
      alert("Please enter a valid email address.");
      valid = false;
    }
    if (message.length < 10) {
      alert("Message must be at least 10 characters long.");
      valid = false;
    }
  
    if (valid) {
      alert("Form submitted successfully!");
      document.querySelector("form").reset();
    }
  }