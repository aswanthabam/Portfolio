var placeholders = {
    'email': 'Enter Your Email ID',
    'phone': 'Enter Your Phone Number',
    'whatsapp': 'Enter Your WhatsApp Number'
}
var types = {
    'email': 'email',
    'phone': 'tel',
    'whatsapp': 'tel'
}

function onButtonTap(element, name) {
    var inp = document.querySelector('#contact-option');
    inp.placeholder = placeholders[name];
    inp.type = types[name];
    inp.name = name;
    var buttons = document.querySelectorAll('.option-button');
    buttons.forEach((val)=>{val.classList.remove('selected')});
    element.classList.add('selected');
}