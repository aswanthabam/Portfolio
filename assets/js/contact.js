---
---
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

function updateMessageLength(element) {
  document.querySelector("#message-length").innerText = element.value.length + "/1200";
}

function onButtonTap(element, name) {
  var inp = document.querySelector("#contact-option");
  inp.placeholder = placeholders[name];
  inp.type = types[name];
  inp.name = name;
  if (name != "email") {
    document.querySelector("#contact-option").style.display = "block";
  } else {
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
  var occupation = document.querySelector("#contact-occupation").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var phoneRegex = /^\+?[0-9]\d{1,14}$/;
  if (contact_option == "email") {
    contact = email;
  }
  if (
    !name ||
    !message ||
    !contact_option ||
    !contact ||
    !email ||
    !occupation ||
    email.length < 3 ||
    (contact_option != "email" &&
      contact_option != "phone" &&
      contact_option != "whatsapp")
  ) {
    showPopup(
      "PLEASE FILL FORM CORRECTLY!",
      "Please fill all the fields correctly to send the message. All fields must be filled and need to be valid. "
    );
    return;
  }
  if (message.trim().split(/\s+/).length < 10) {
    showPopup(
      "MESSAGE TOO SHORT!",
      "Please explain your message in detail. Minimum 10 words are required to send the message."
    );
    return;
  }
  if (name.length < 3) {
    showPopup(
      "INVALID NAME!",
      "Please enter a valid name to send the message."
    );
    return;
  }

  if (occupation.length < 3) {
    showPopup(
      "INVALID OCCUPATION!",
      "Please enter a valid occupation to send the message."
    );
    return;
  }

  if (contact_option != "email" && phoneRegex.test(contact) == false) {
    showPopup("INVALID CONTACT!", "Please enter a valid contact number.");
    return;
  }

  if (!emailRegex.test(email)) {
    showPopup(
      "INVALID EMAIL!",
      "Please enter a valid email address to send the message."
    );
    return;
  }
  showLoader();
  sendMessage(name, message, contact_option, contact, email, occupation).then((res) => {
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

async function sendMessage(name, message, contact_option, contact, email, occupation) {
  const url = "https://mlokzychglfzjobnkkwo.supabase.co/functions/v1/contact";
  const options = {
    method: "POST",
    headers: {
      Authorization: 'Bearer {{contact_access_token}}',
      'content-type': 'application/json'
    },
    body: `{"name":"${name}","message":"${message}","contact_option":"${contact_option}","contact":"${contact}","email":"${email}", "occupation":"${occupation}"}`,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      return false;
    }
    return true;
  } catch (error) {
    return false;
  }
}
