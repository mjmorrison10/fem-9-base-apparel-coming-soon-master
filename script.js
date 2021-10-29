const EmailAlert = document.querySelector(".email-alert");
const AlertCircle = document.querySelector(".alert-circle");

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.email.email.focus();
    return true;
  } else {
    document.email.email.focus();
    EmailAlert.style.display = "block";
    AlertCircle.style.display = "block";
    return false;
  }
}
