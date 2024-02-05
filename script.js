// mobile toggle menu
function toggleMobileMenu() {
    let nav = document.querySelector("nav");
    
    // Toggle the class for smaller screens
    if (window.innerWidth <= 1024) {
      nav.classList.toggle('nav-show');
    }
  }

// contact form script
function validateFormAndSend() {
  let form = document.getElementById("contactForm");

  if (form.checkValidity()) {
    // If the form is valid, proceed to send the message
    sendWhatsAppMessage();
  } else {
    // If the form is not valid, display a validation message
    alert("Please fill in all required fields.");
  }
}

function sendWhatsAppMessage() {
  let name = encodeURIComponent(document.getElementById("name").value);
  let email = encodeURIComponent(document.getElementById("email").value);
  let message = encodeURIComponent(document.getElementById("message").value);

  let whatsappLink =
    "https://wa.me/+919945883157?text=Name:%20" +
    name +
    "%0AEmail:%20" +
    email +
    "%0AMessage:%20" +
    message;

  window.open(whatsappLink, "_blank");
}

// ===========Search bar script ========/
const availableKeywords = {
  "Aluminium Containers": {
    keywords: ["Aluminium Containers","Foils","Precut sheets","Takeaways","Airway containers"],
    fileName: "product.html",
  },
  "Sugarcane Bagasse Products": {
    keywords: ["Sugarcane Bagasse Products", "Plates", "Bowls","Cups"],
    fileName: "product-3.html",
  },
  "Disposable products": {
    keywords: ["Disposable", "Cups", "Plates", "Cutlery"],
    fileName: "product-4.html",
  },
  Takeaways: {
    keywords: ["Takeaways", "Food Packaging"],
    fileName: "product-2.html",
  },
  Skewers: {
    keywords: ["Skewers","Coffee Stirrer","Fruit Skewers","Teppo Skewers","Knotted Skewers"],
    fileName: "product-3.html",
  },
  "Icecream Cups": {
    keywords: ["Ice Cream Cups", "Ice Cream Spoons"],
    fileName: "product-4.html",
  },
  "Paper Bags": {
    keywords: ["Paper Bags", "Carry Bags","Tamper Evident Bags","Bakery Paper Bags","Restaurant Paper Bags","Sweet Paper Bags"],
    fileName: "product-4.html",
  },
  "Cutlery's":{
  keywords: ["Spoons", "Knives", "Forks","Toothpicks", "Cutlery"],
  fileName: "product-3.html",
  },
  "Disposables":{
    keywords: ["Car Premier Tissue", "Masks", "Bouffmant Cap","Toilet Paper Rolls", "Kitchen Paper Rolls","Bubble Wrap"],
    fileName: "product-5.html",
    }, 
};

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const searchBox = document.querySelector(".search-box");

inputBox.onkeyup = function () {
  let result = [];
  let input = inputBox.value.toLowerCase();
  if (input.length) {
    result = Object.keys(availableKeywords).filter((category) => {
      return availableKeywords[category].keywords.some((keyword) =>
        keyword.toLowerCase().includes(input)
      );
    });
    display(result);
    searchBox.classList.add("border-top");
  } else {
    searchBox.classList.remove("border-top");
    resultBox.innerHTML = "";
  }
};

function display(result) {
  const content = result.map((category) => {
    const keywords = availableKeywords[category].keywords;
    return keywords
      .map((keyword) => {
        return `<a href="${availableKeywords[category].fileName}"><li onclick="selectInput(this)">${keyword}</li></a>`;
      })
      .join("");
  });

  resultBox.innerHTML = "<ul>" + content.join("") + " </ul>";
}

function selectInput(list) {
  inputBox.value = list.innerHTML;
  resultBox.innerHTML = "";
}

// Search for products
function performSearch() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var productContainers = document.querySelectorAll('.product-container');
  
    productContainers.forEach(function (container) {
      var productName = container.querySelector('.product-details h3').innerText.toLowerCase();
      if (productName.includes(searchInput)) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  }

// Search for products
function indexSearch() {
    var searchInput = document.getElementById('searchInput').value.toLowerCase();
    var productContainers = document.querySelectorAll('.best-seller .best-p1');
  
    productContainers.forEach(function (container) {
      var productName = container.querySelector('.best-p1-txt p').innerText.toLowerCase();
      if (productName.includes(searchInput)) {
        container.style.display = 'block';
      } else {
        container.style.display = 'none';
      }
    });
  }
  


// home sliding bar script
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }
    slides[slideIndex].style.display = "block";
    updateDots();
}

function updateDots() {
    var dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

function setCurrentSlide(index) {
    slideIndex = index;
    showSlides();
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}




// carousel
$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});



// view detail -product display
document.addEventListener('DOMContentLoaded', function () {
  // Get the product ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('product');

  // Show the corresponding product details container
  if (productId) {
      const selectedProduct = document.getElementById(productId);
      if (selectedProduct) {
          selectedProduct.style.display = 'block';
      }
  }
});


