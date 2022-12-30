function getIFrame() {
  return document.getElementsByClassName("utterances-frame")[0];
}

function getTheme() {
  return document.documentElement.classList.contains("dark")
    ? "dark-blue"
    : "github-light";
}

function init() {
  const theme = getTheme();
  const c = document.getElementsByClassName("utteranc-comment-container")[0];
  const e = document.createElement("script");

  if (c && e) {
    const p = c.parentElement;

    e.setAttribute("src", "https://utteranc.es/client.js");
    e.setAttribute("repo", "astrawan/astrawan.github.io");
    e.setAttribute("issue-term", "pathname");
    e.setAttribute("label", "Comment");
    e.setAttribute("theme", theme);
    e.setAttribute("crossorigin", "anonymous");
    e.setAttribute("async", true)

    p.appendChild(e);
    p.removeChild(c)
  }
}

function setTheme(theme) {
  const iframe = getIFrame();
  if (iframe) {
    const url = new URL(iframe.getAttribute("src"));
    url.searchParams.set("theme", theme);
    iframe.setAttribute("src", url.toString());
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const switcher = document.getElementById("appearance-switcher");
  const switcherMobile = document.getElementById("appearance-switcher-mobile");

  init();

  if (switcher) {
    switcher.addEventListener("click", () => {
      setTheme(getTheme());
    });
  }
  if (switcherMobile) {
    switcherMobile.addEventListener("click", () => {
      setTheme(getTheme());
    });
  }
})
