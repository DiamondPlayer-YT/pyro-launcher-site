// Ensure page content shows even if loader fails
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");

  // If both loader and content exist, fade loader then show content
  if (loader && content) {
    setTimeout(() => {
      loader.style.display = "none";
      content.style.display = "block";
    }, 600);
  } else if (content) {
    // Fallback: just show content if loader is missing
    content.style.display = "block";
  }
});

// DOWNLOAD BUTTON AUTO-DETECT (safe guard if button doesn’t exist)
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
