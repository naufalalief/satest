function showToast(message, isError = false) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: "bottom",
    position: "center",
    backgroundColor: isError ? "#e74c3c" : "#27ae60",
    stopOnFocus: true,
  }).showToast();
}

(function () {
  const params = new URLSearchParams(window.location.search);
  if (params.has("msg")) {
    showToast(params.get("msg"), false);
  } else if (params.has("error")) {
    showToast(params.get("error"), true);
  }
})();
