function checkPassword() {
  var password = document.getElementById("password").value;

  if (password == "seo-kurs") {
    // redirect user to /bad-seo.html
    window.location.href = "bad-seo.html";
  }
}

// add event listener to text input
if (document.getElementById("password")) {
  document.getElementById("password").addEventListener("keyup", checkPassword);
}
function activateDesignMode() {
  console.log("test");
  document.designMode = "on";
}

// add event listener to button
document
  .getElementById("bearbeiten")
  .addEventListener("click", activateDesignMode);

function showHelp() {
  alert(
    "Welche SEO Probleme findest du auf dieser Webseite? Schreibe sie in den Chat."
  );
}

function showHint() {
  alert(
    "Achte auf die Überschriften, die interne Verlinkung, die html Meta Tags und die Ladezeiten"
  );
}
