function validate_required(field, alerttxt) {
  with (field) {
    if (value == null || value == "") {
      alert(alerttxt);
      return false;
    } else {
      return true;
    }
  }
}

function validate_form(thisform) {
  if (validate_required(thisform.email, "Email harus diisi.") == false) {
    thisform.email.focus();
    return false;
  }
}
