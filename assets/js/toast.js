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
  let toastShown = false;
  if (params.has("msg")) {
    showToast(params.get("msg"), false);
    toastShown = true;
  } else if (params.has("error")) {
    showToast(params.get("error"), true);
    toastShown = true;
  }
  if (toastShown && window.history.replaceState) {
    const url = window.location.origin + window.location.pathname;
    setTimeout(() => {
      window.history.replaceState({}, document.title, url);
    }, 500);
  }
})();
