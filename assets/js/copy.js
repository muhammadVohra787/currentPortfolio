function copyitem(linkCopy) {
  var input = document.createElement("input");
  input.style.position = "fixed";
  input.style.opacity = 0;
  input.value = linkCopy;
  document.body.appendChild(input);

  // Select the link and copy it to the clipboard
  input.select();
  document.execCommand("copy");

  // Remove the temporary input
  document.body.removeChild(input);

  // Add Bootstrap alert for notification
  var alertDiv = document.createElement("div");
  alertDiv.classList.add(
    "alert",
    linkCopy ? "alert-success" : "alert-danger",
    "mt-3",
    "fade",
    "show",
    "transition"
  );
  alertDiv.style.fontSize = "1.15rem";
  alertDiv.setAttribute("role", "alert");
  alertDiv.innerHTML = linkCopy
    ? "GitHub Link copied!" + '<i class="bi bi-link-45deg"></i>'
    : "Link needs to be updated";
  document.getElementById("alerts").appendChild(alertDiv);

  setTimeout(function () {
    alertDiv.classList.remove("show");
    alertDiv.classList.add("hide");
    setTimeout(function () {
      document.getElementById("alerts").removeChild(alertDiv);
    }, 1000);
  }, 2000);
}
