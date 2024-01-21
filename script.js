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


// ===========Search bar script ========/
let availableKeywords = [
    'Aluminium foils rolls',
    'plastic container',
    'icecrem sticks',
    'skewers',
    'bagasse plates',
    'spoon',
    'knives'
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
          return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(result);
// calling the display function
display(result);
if(!result.length){
    resultBox.innerHTML = '';
}
    }

}
function display(result) {
    const content = result.map((list) => {
        return <a href="${list}.html"><li onclick="selectInput(this)">${list}</li></a>;
    });
    resultBox.innerHTML = "<ul>" + content.join('') + " </ul>";
}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultBox.innerHTML = '';

}