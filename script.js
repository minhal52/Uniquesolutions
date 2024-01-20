// mobile toggle menu script
function toggleMobileMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  }


 
  // contact form script
  function validateFormAndSend() {
    var form = document.getElementById("contactForm");

    if (form.checkValidity()) {
        // If the form is valid, proceed to send the message
        sendWhatsAppMessage();
    } else {
        // If the form is not valid, display a validation message
        alert("Please fill in all required fields.");
    }
}

function sendWhatsAppMessage() {
    var name = encodeURIComponent(document.getElementById('name').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var whatsappLink = 'https://wa.me/+919945883157?text=Name:%20' + name +
        '%0AEmail:%20' + email +
        '%0AMessage:%20' + message;

    window.open(whatsappLink, '_blank');
}


