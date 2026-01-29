const downloadBtn = document.getElementById("download-btn");

const downloads = {
  windows: "https://example.com/pyro-windows.exe",
  mac: "https://example.com/pyro-macos.dmg",
  linux: "https://example.com/pyro-linux.AppImage"
};

function detectOS() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.includes("win")) {
    return { os: "Windows", url: downloads.windows };
  }
  if (userAgent.includes("mac")) {
    return { os: "macOS", url: downloads.mac };
  }
  if (userAgent.includes("linux")) {
    return { os: "Linux", url: downloads.linux };
  }
  return null;
}

const result = detectOS();

if (result) {
  downloadBtn.textContent = `Download for ${result.os}`;
  downloadBtn.href = result.url;
} else {
  downloadBtn.textContent = "Download";
  downloadBtn.href = "#";
}
