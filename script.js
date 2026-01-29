// Loader functionality
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const content = document.getElementById("content");
  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 500);
});

// Auto-detect download button
const downloadBtn = document.getElementById("download-btn");
const userAgent = navigator.userAgent;

if (/Windows/.test(userAgent)) {
  downloadBtn.innerText = "Download for Windows";
} else if (/Mac/.test(userAgent)) {
  downloadBtn.innerText = "Download for macOS";
} else if (/Linux/.test(userAgent)) {
  downloadBtn.innerText = "Download for Linux";
} else {
  downloadBtn.innerText = "Download Launcher";
}

// Click handler for download
downloadBtn.addEventListener("click", () => {
  if (/Windows/.test(userAgent)) {
    window.location.href = "res/images/pyro-launcher-windows.exe";
  } else if (/Mac/.test(userAgent)) {
    window.location.href = "res/images/pyro-launcher-mac.dmg";
  } else if (/Linux/.test(userAgent)) {
    window.location.href = "res/images/pyro-launcher-linux.AppImage";
  } else {
    alert("No compatible launcher detected.");
  }
});
