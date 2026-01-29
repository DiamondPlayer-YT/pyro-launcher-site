// LOADER (works on ALL pages)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  if (loader && content) {
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 600);
  }
});

// DOWNLOAD AUTO-DETECT (only if button exists)
const downloadBtn = document.getElementById("download-btn");

if (downloadBtn) {
  const ua = navigator.userAgent;

  if (ua.includes("Windows")) {
    downloadBtn.textContent = "Download for Windows";
    downloadBtn.onclick = () => {
      window.location.href = "res/images/pyro-launcher-windows.exe";
    };
  } else {
    downloadBtn.textContent = "Download (Coming Soon)";
    downloadBtn.disabled = true;
  }
}
