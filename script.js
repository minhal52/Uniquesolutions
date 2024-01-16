// mobile toggle menu script
function toggleMobileMenu() {
    var nav = document.querySelector('nav');
    nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
  }


  // search bar 
  function performSearch() {
    // Get the value from the input field
    var searchQuery = document.querySelector('.search-input').value;
    alert('Searching for: ' + searchQuery);
}
  // contact form script
  function sendWhatsAppMessage() {
    var name = encodeURIComponent(document.getElementById('name').value);
    var email = encodeURIComponent(document.getElementById('email').value);
    var message = encodeURIComponent(document.getElementById('message').value);

    var whatsappLink = 'https://wa.me/+919945883157?text=Name:%20' + name +
        '%0AEmail:%20' + email +
        '%0AMessage:%20' + message;

    window.open(whatsappLink, '_blank');
}