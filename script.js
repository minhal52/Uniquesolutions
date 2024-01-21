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
    keywords: ["Aluminium Containers"],
    fileName: "product.html",
  },
  "Sugarcane Bagasse Products": {
    keywords: ["Sugarcane", "Bagasse", "Plates", "Bowls"],
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
    keywords: ["Skewers"],
    fileName: "product-3.html",
  },
  "Icecream Cups": {
    keywords: ["Ice Cream", "Cups"],
    fileName: "product-4.html",
  },
  "Paper Bags": {
    keywords: ["Paper Bags", "Carry Bags"],
    fileName: "product-4.html",
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
