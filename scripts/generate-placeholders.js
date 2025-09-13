const fs = require('fs');
const path = require('path');

// List of all images that need placeholders
const images = [
  'premium-headphones.jpg',
  'hero-product-showcase.jpg',
  'ergonomic-office-chair.jpg',
  'smart-fitness-watch.jpg',
  'gamer-1.jpg',
  'gamer-2.jpg',
  'gamer-3.jpg',
  'gamer-4.jpg',
  'gamer-5.jpg',
  'admin-avatar.jpg',
  'customer-1.jpg',
  'customer-2.jpg',
  'customer-3.jpg',
  'customer-4.jpg',
  'product-1.jpg',
  'product-2.jpg',
  'product-3.jpg',
  'product-4.jpg',
  'student-1.jpg',
  'student-2.jpg',
  'student-3.jpg',
  'doctor-avatar.jpg',
  'patient-1.jpg',
  'patient-2.jpg',
  'patient-3.jpg',
  'farm-1.jpg',
  'farm-2.jpg',
  'farm-3.jpg',
  'placeholder-user.jpg',
  'placeholder-dashboard.jpg'
];

// Create placeholder images
images.forEach(image => {
  const imagePath = path.join(__dirname, '..', 'public', image);
  const placeholderContent = `# Placeholder for ${image}
# This is a placeholder image file
# In a real application, this would be an actual image file`;
  
  fs.writeFileSync(imagePath, placeholderContent);
  console.log(`Created placeholder for ${image}`);
});

console.log('All placeholder images created successfully!');
