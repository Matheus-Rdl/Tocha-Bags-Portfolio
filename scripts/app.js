// Import Firebase modules from CDN
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getFirestore, collection, getDocs, query } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

// Firebase configuration object containing all necessary API keys and identifiers
const firebaseConfig = {
  apiKey: "AIzaSyCcchcZ0nmaDnAshLwN9j9J6g5Q6wk_nlE",          // API key for authentication
  authDomain: "tochabags-ca50b.firebaseapp.com",             // Domain for Firebase Auth
  projectId: "tochabags-ca50b",                              // Firebase project ID
  storageBucket: "tochabags-ca50b.appspot.com",              // Cloud Storage bucket
  messagingSenderId: "463444887130",                         // Cloud Messaging sender ID
  appId: "1:463444887130:web:38930920373b471a01fa63",       // Firebase app ID
  measurementId: "G-LXLWLTCVNN"                              // Google Analytics ID (optional)
};

// Initialize Firebase app with the configuration
const app = initializeApp(firebaseConfig);
// Get Firestore database instance
const db = getFirestore(app);


// Get reference to the HTML container where images will be displayed
const cavaquinhoContainer = document.getElementById('productCavaquinho');
const guitarraContainer = document.getElementById('productGuitarra');
const banjoContainer = document.getElementById('productBanjo');
const bandolimContainer = document.getElementById('productBandolim');

// Initialize the loading process when DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadCavaquinhos);
document.addEventListener('DOMContentLoaded', loadGuitarra);
document.addEventListener('DOMContentLoaded', loadBanjo);
document.addEventListener('DOMContentLoaded', loadBandolim);

/**
 * Main function to load cavaquinho images from Firestore
 * Handles the complete data fetching and rendering process
 */
async function loadCavaquinhos() {
  try {
    // Clear container before loading new images to avoid duplicates
    cavaquinhoContainer.innerHTML = '';

    // Get all documents from the 'products' collection
    const productsSnapshot = await getDocs(collection(db, "products"));

    // Process each product document to find nested cavaquinho subcollections
    for (const productDoc of productsSnapshot.docs) {
      // Get all documents from the 'cavaquinho' subcollection of each product
      const cavaquinhosSnapshot = await getDocs(
        collection(db, "products", productDoc.id, "cavaquinho")
      );
      
      // Process each cavaquinho document found
      cavaquinhosSnapshot.forEach((doc) => {
        const data = doc.data();
        // Check if images array exists and has at least one image
        if (data.images && data.images.length > 0) {
          // Add the first image to the container
          addImageToContainer(data.images[0], data.title, data.description, data.images, data.type, data.color);
        }
      });
    }
  } catch (error) {
    // Error handling: log to console and show user-friendly message
    console.error("Erro ao carregar cavaquinhos:", error);
    cavaquinhoContainer.innerHTML = '<p>Erro ao carregar as imagens. Por favor recarregar a página.</p>';
  }
}

async function loadGuitarra() {
    try {
      //guitarraContainer.innerHTML = '';
  
      const productsSnapshot = await getDocs(collection(db, "products"));

      for (const productDoc of productsSnapshot.docs) {
        const guitarraSnapshot = await getDocs(
          collection(db, "products", productDoc.id, "guitarra")
        );
        
        guitarraSnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.images && data.images.length > 0) {
            addImageToContainer(data.images[0], data.title, data.description, data.images, data.type, data.color);
          }
        });
      }
    } catch (error) {
      console.error("Erro ao carregar guitarras:", error);
      guitarraContainer.innerHTML = '<p>Erro ao carregar as imagens. Por favor recarregar a página.</p>';
    }
  }

async function loadBanjo() {
    try {
        banjoContainer.innerHTML = '';

        const productsSnapshot = await getDocs(collection(db, "products"));

        for (const productDoc of productsSnapshot.docs){
            const banjoSnapshot = await getDocs(collection(db, "products", productDoc.id, "banjo"));

            banjoSnapshot.forEach((doc) => {
                const data = doc.data();

                if (data.images && data.images.length > 0){
                    addImageToContainer(data.images[0], data.title, data.description, data.images, data.type, data.color);
                }
            });
        }
    } catch (error){
        console.error("Erro ao carregar banjos: ", error);
        banjoContainer.innerHTML = '<p>Erro ao carregar as imagens. Por favor recarregar a página.</p>';
    }
}

async function loadBandolim() {
  try {
      bandolimContainer.innerHTML = '';

      const productsSnapshot = await getDocs(collection(db, "products"));

      for (const productDoc of productsSnapshot.docs){
          const bandolimSnapshot = await getDocs(collection(db, "products", productDoc.id, "bandolim"));

          bandolimSnapshot.forEach((doc) => {
              const data = doc.data();

              if (data.images && data.images.length > 0){
                  addImageToContainer(data.images[0], data.title, data.description, data.images, data.type, data.color);
              }
          });
      }
  } catch (error){
      console.error("Erro ao carregar bandolins: ", error);
      bandolimContainer.innerHTML = '<p>Erro ao carregar as imagens. Por favor recarregar a página.</p>';
  }
}

/**
 * Helper function to create and append an image element to the container
 * @param {string} imageUrl - URL of the image to display
 * @param {string} title - The title of the product
 * @param {string} description - Description of the product
 * @param {string} otherImages - Others images of the product
 * @param {string} type - The type of the product
 * @param {string} color - The color to use for the background
 */
function addImageToContainer(imageUrl, title, description, otherImages, type, color) {
  // Create new image element
  const img = document.createElement('img');
  // Set image source
  img.src = imageUrl;
  // Set alt text with fallback to default
  img.alt = title || "Bag de instrumento";
  // Enable lazy loading for better performance
  img.loading = "lazy";
  // Add CSS class for styling
  img.classList.add('thumbnail');

  img.style.backgroundColor = imgBackgroundColor(color);

  // Add click handler that will work with our modal
  img.addEventListener('click', function() {
    // This will be handled by our modal system
    window.dispatchEvent(new CustomEvent('imageClick', {
      detail: {
        src: imageUrl,
        title: title,
        description: description,
        otherImages: otherImages
      }
    }));
  });

  // Append image to the container
  if (type == "cavaquinho") {
    cavaquinhoContainer.appendChild(img);
  }
  else if (type == "guitarra") {
    guitarraContainer.appendChild(img)
  } 
  else if (type == "banjo") {
    banjoContainer.appendChild(img);
  } 
  else if (type == "bandolim"){
    bandolimContainer.appendChild(img);
  }

}

function imgBackgroundColor(color){
    let imgColor = color;
    
    switch (color) {
        case 'yellow':
            imgColor = ' #FBAB18';
            break;
        case 'green':
            imgColor = ' #5C9F43';
            break;
        case 'brown':
            imgColor = ' #B66032';
            break;
        case 'light-brown':
            imgColor = ' #818274';
            break;
        case 'dark-blue':
            imgColor = ' #87CEFA';
            break;
        case 'light-blue':
            imgColor = ' #818274';
            break;
        case 'gray':
            imgColor = ' #5C9F43';
            break;    
        default:
            imgColor = color;    
    }
    return (imgColor);
}
