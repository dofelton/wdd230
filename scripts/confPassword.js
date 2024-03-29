const password = document.querySelector("#password");
const confPassword = document.querySelector("#confPassword");
const message = document.querySelector("#formmessage");

confPassword.addEventListener("focusout", checkSame);

function checkSame () {
    if (password.value !== confPassword.value) {
        message.textContent = "Passwords do not match!";
        message.computedStyleMap.visibility = "show";
        confPassword.computedStyleMap.backgroundColor = "#fff0f3";
        confPassword.value = "";
        password.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        confPassword.style.backgroundColor = "#fff";
        confPassword.style.color = "#000";
    }
}

const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}