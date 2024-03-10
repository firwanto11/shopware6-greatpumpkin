function headerNavigation() {
  const headerElm = document.querySelector(".header");
  if (!headerElm) {
    return;
  }

  const headerNav = document.querySelector("nav[data-visible]");
  // toggle menu
  const headerToggle = document.querySelector(".header__toggle");
  headerToggle.addEventListener("click", function () {
    let isExpanded = headerToggle.getAttribute("aria-expanded");
    if (isExpanded === "false") {
      headerToggle.setAttribute("aria-expanded", "true");
      headerNav.setAttribute("data-visible", "true");
    } else {
      headerToggle.setAttribute("aria-expanded", "false");
      headerNav.setAttribute("data-visible", "false");
    }
  });
}

// social media share button
function socialMediaShare() {
  const shareBtn = document.querySelectorAll(".share-badge__button");
  if (!shareBtn[0]) {
    return;
  }

  shareBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      const url = window.location.href;
      const socialMedia = btn.getAttribute("data-social-media");
      let shareUrl = "";
      switch (socialMedia) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
          break;
        case "twitter":
          shareUrl = `https://twitter.com/intent/tweet?url=${url}`;
          break;
      }
      window.open(shareUrl, "_blank");
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  headerNavigation();
  // TODO: currently still don't know if the socialMediaShare function is needed
  // socialMediaShare();
});
