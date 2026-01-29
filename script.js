// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 600);
});

// Download auto-detect
const btn = document.getElementById("download-btn");
if (btn) {
  const ua = navigator.userAgent;

  if (ua.includes("Windows")) {
    btn.textContent = "Download for Windows";
    btn.onclick = () => {
      location.href = "res/images/pyro-launcher-windows.exe";
    };
  } else {
    btn.textContent = "Download (Coming Soon)";
    btn.disabled = true;
  }
}
