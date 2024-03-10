function isNewsPage() {
  const cmsPage = document.querySelector(".news-page");

  if (cmsPage) {
    document.body.classList.add("page--news");
  }
}

function initVideoPlyr() {
  const videoElm = document.querySelector("#player");
  if (videoElm) {
    const videoPlayer = new Plyr("#player", {
      hideControls: true,
      muted: true,
    });
  }
}

// TODO: Add recaptcha handler
function contactFormSubmit() {
  const form = document.querySelector(".gp-cf__form form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    watchFields(form);
    e.preventDefault();
    let hasError = isValidated(form);

    if (hasError) {
      return;
    }

    // form submit
    const formData = new FormData(form);

    fetch("https://shopware.blackhole.my.id/index.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // handle the response and UI element here
        if (data.success) {
          form.reset();
          alert("Your message has been sent successfully");
        } else {
          alert("Something went wrong. Please try again later");
        }
      })
      .catch(function (error) {
        alert("Something went wrong. Please try again later");
      });
  });
}

function toggleProductDescription() {
  const productDescription = document.querySelector(".gp-pdp__description");
  if (!productDescription) {
    return;
  }

  const toggleBtn = productDescription.querySelector(".gp-pdp__description-toggle");
  const descriptionContent = productDescription.querySelector(".gp-pdp__description-content");
  toggleBtn.addEventListener("click", function () {
    descriptionContent.classList.toggle("is-toggled");
  });
}

function consultationFormSubmit() {
  const form = document.querySelector(".consultation-form form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    watchFields(form);
    e.preventDefault();
    let hasError = isValidated(form);

    if (hasError) {
      return;
    }

    // form submit
    const formData = new FormData(form);

    fetch("https://shopware.blackhole.my.id/consultation.php", {
      method: "POST",
      body: formData,
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // handle the response and UI element here
        if (data.success) {
          form.reset();
          alert("Your message has been sent successfully");
        } else {
          alert("Something went wrong. Please try again later");
        }
      })
      .catch(function (error) {
        alert("Something went wrong. Please try again later");
      });
  });
}

function isValidated(form) {
  const requiredFields = form.querySelectorAll("[data-validation]");
  let hasError = false;

  requiredFields.forEach(function (field) {
    const fieldValue = field.value;

    if (fieldValue === "") {
      field.parentNode.classList.add("error");
      hasError = true;
    } else {
      field.parentNode.classList.remove("error");
    }
  });

  return hasError;
}

function watchFields(form) {
  const requiredFields = form.querySelectorAll("[data-validation]");

  // form error message on change
  requiredFields.forEach(function (field) {
    field.addEventListener("blur", function () {
      const fieldValue = field.value;
      if (fieldValue === "") {
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });

    field.addEventListener("change", function () {
      const fieldValue = field.value;
      if (fieldValue === "") {
        field.parentNode.classList.add("error");
      } else {
        field.parentNode.classList.remove("error");
      }
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  contactFormSubmit();
  initVideoPlyr();
  isNewsPage();
  toggleProductDescription();
  consultationFormSubmit();
});
