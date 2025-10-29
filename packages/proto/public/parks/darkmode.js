function initDarkMode() {
    const body = document.body;
    const input = document.getElementById("dark-mode-toggle");
    if (!input || !body) return;
  
    const relayHost = input.closest("label") || input.parentElement || input;
  
    const relayChangeToCustom = (event) => {
      event.stopPropagation(); 
      const checked = !!event.target.checked;
      const custom = new CustomEvent("darkmode:toggle", {
        bubbles: true,
        detail: { checked }
      });
      relayHost.dispatchEvent(custom);
    };
    relayHost.addEventListener("change", relayChangeToCustom);
  
    const onDarkModeToggle = (event) => {
      const on = !!(event?.detail && event.detail.checked);
      body.classList.toggle("dark-mode", on);
      try {
        localStorage.setItem("prefers-darkmode", String(on));
      } catch (_) {}
    };
    body.addEventListener("darkmode:toggle", onDarkModeToggle);
  
    let initial = null;
    try {
      const stored = localStorage.getItem("prefers-darkmode");
      if (stored === "true" || stored === "false") initial = stored === "true";
    } catch (_) {}
  
    if (initial === null) {
      initial = false;
    }
  
    input.checked = !!initial;
    body.classList.toggle("dark-mode", !!initial);
  }
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDarkMode);
  } else {
    initDarkMode();
  }
  