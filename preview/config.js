// Single switch for the App Store button. Flip to true only after Apple approves the app,
// and set APP_STORE_URL (plan: apps.apple.com/app/id6818882908).
window.APP_LIVE = false;
window.APP_STORE_URL = "https://apps.apple.com/app/id6818882908";
(function () {
  function apply() {
    document.querySelectorAll("[data-app-store]").forEach(function (el) {
      if (window.APP_LIVE) {
        el.textContent = "Download on the App Store";
        el.setAttribute("href", window.APP_STORE_URL);
        el.removeAttribute("aria-disabled");
        el.classList.remove("is-disabled");
      }
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", apply); else apply();
})();
