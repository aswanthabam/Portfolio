var placeholders = {
  email: "Enter Your Email ID",
  phone: "Enter Your Phone Number",
  whatsapp: "Enter Your WhatsApp Number",
};
var types = {
  email: "email",
  phone: "tel",
  whatsapp: "tel",
};

function onButtonTap(element, name) {
  var inp = document.querySelector("#contact-option");
  inp.placeholder = placeholders[name];
  inp.type = types[name];
  inp.name = name;
  if (name != "email") {
    document.querySelector("#contact-option").style.display = "block";
  }else {
    document.querySelector("#contact-option").style.display = "none";
  }
  document.querySelector("#contact-preference").value = name;
  var buttons = document.querySelectorAll(".option-button");
  buttons.forEach((val) => {
    val.classList.remove("selected");
  });
  element.classList.add("selected");
}

function submit() {
  var name = document.querySelector("#contact-name").value;
  var message = document.querySelector("#contact-message").value;
  var contact_option = document.querySelector("#contact-preference").value;
  var contact = document.querySelector("#contact-option").value;
  var email = document.querySelector("#contact-email").value;
  if (contact_option == "email") {
    contact = email;
  }
  if (
    !name ||
    !message ||
    !contact_option ||
    !contact ||
    !email ||
    name.length < 3 ||
    message.length < 3 ||
    contact.length < 3 ||
    email.length < 3 ||
    (contact_option != "email" &&
      contact_option != "phone" &&
      contact_option != "whatsapp")
  ) {
    showPopup(
      "PLEASE FILL FORM CORRECTLY!",
      "All fields in the contact form are mandatory, and cannot be left empty."
    );
    return;
  }
  showLoader();
  sendMessage(name, message, contact_option, contact, email).then((res) => {
    hideLoader();
    console.log(res);
    if (res) {
      showPopup(
        "MESSAGE SENT!",
        "Your message has been sent successfully. We will get back to you soon."
      );
    } else {
      showPopup(
        "MESSAGE SENT FAILED!",
        "There was an error sending your message. Please try again later."
      );
    }
  });
}

function hideLoader() {
  document.querySelector("#contact-submit").classList.remove("loading");
}

function showLoader() {
  document.querySelector("#contact-submit").classList.add("loading");
}

function closePopup() {
  document.querySelector(".popup").classList.remove("show");
  document.querySelector(".overlay").classList.remove("show");
}

function showPopup(title, message) {
  document.querySelector(".popup").classList.add("show");
  document.querySelector(".overlay").classList.add("show");
  document.querySelector(".overlay").addEventListener("click", closePopup);
  document.querySelector("#popup-title").innerText = title;
  document.querySelector("#popup-message").innerText = message;
}

async function sendMessage(name, message, contact_option, contact, email) {
  if (
    !name ||
    !message ||
    !contact_option ||
    !contact ||
    name.length < 3 ||
    message.length < 3 ||
    contact.length < 3 ||
    (contact_option != "email" &&
      contact_option != "phone" &&
      contact_option != "whatsapp")
  ) {
    return false;
  }
  const url = "https://mlokzychglfzjobnkkwo.supabase.co/functions/v1/resend";
  const options = {
    method: "POST",
    headers: { "content-type": "application/json", 'Access-Control-Allow-Origin': window.location.origin, 'Access-Control-Allow-Credentials': true},
    body: `{"name":"${name}","message":"${message}","contact_option":"${contact_option}","contact":"${contact}","email":"${email}"}`,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return true;
  }
}
