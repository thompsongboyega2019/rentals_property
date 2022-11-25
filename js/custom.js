function toRegister() {
    var regForm = document.getElementById("userReg");
    var logForm = document.getElementById("userLogin");
    var pageTitle = document.getElementById("login_registerTitle");
    var pageText = document.getElementById("login_registerText");
    regForm.style.display = "block";
    logForm.style.display = "none";
    pageTitle.innerHTML = "Register";
    pageText.innerHTML = "Register";
};

function toLogin() {
    var regForm = document.getElementById("userReg");
    var logForm = document.getElementById("userLogin");
    var pageTitle = document.getElementById("login_registerTitle");
    var pageText = document.getElementById("login_registerText");
    regForm.style.display = "none";
    logForm.style.display = "block";
    pageTitle.innerHTML = "Log In";
    pageText.innerHTML = "Log In";
};

//Search buttin on homepage
function browseListings() {
    window.location.href = "browse_listings.html";
  };