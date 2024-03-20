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
      hideControls: true
    });
  }
}

// TODO: Add recaptcha handler
// NOT USED ANYMORE
function contactFormSubmit() {
  const form = document.querySelector(".gp-cf__form form");
  if (!form) {
    return;
  }

  form.addEventListener("submit", function (e) {
    console.log('contactFormSubmit');
    watchFields(form);
    e.preventDefault();
    let hasError = isValidated(form);
    console.log({hasError})
    if (hasError) {
      return;
    }

    // form submit
    const formData = new FormData(form);

    console.log({formData})
    alert('done');

    // var btnSubmit = document.querySelector('.gp-cf__form .gp-cf__submit button');
    // btnSubmit.classList.add('disabled');
    // var prevText = btnSubmit.innerHTML;
    // btnSubmit.innerHTML = 'sending...';

    // fetch("/contact-form", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then(function (response) {
    //     return response.json();
    //   })
    //   .then(function (data) {
    //     // handle the response and UI element here
    //     if (data.success) {
    //       form.reset();
    //       alert("Your message has been sent successfully");
    //     } else {
    //       alert("Something went wrong. Please try again later");
    //     }
    //     btnSubmit.classList.remove('disabled');
    //     btnSubmit.innerHTML = prevText;
    //   })
    //   .catch(function (error) {
    //     alert("Something went wrong. Please try again later");
    //     btnSubmit.classList.remove('disabled');
    //     btnSubmit.innerHTML = prevText;
    //   });
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



// contact form recaptcha handler
window.contact_form__onSubmit = function (token) {
  // console.log('contact_form__onSubmit', token);
  const form = document.querySelector(".gp-cf__form form");
  const formData = new FormData(form);

  var btnSubmit = document.querySelector('.gp-cf__form .gp-cf__submit button');
  btnSubmit.classList.add('disabled');
  var prevText = btnSubmit.innerHTML;
  btnSubmit.innerHTML = 'sending...';

  fetch("/contact-form", {
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
      btnSubmit.classList.remove('disabled');
      btnSubmit.innerHTML = prevText;
    })
    .catch(function (error) {
      alert("Something went wrong. Please try again later");
      btnSubmit.classList.remove('disabled');
      btnSubmit.innerHTML = prevText;
    });
}

function contact_form__validate(event) {
  // console.log('contact_form__validate');
  event.preventDefault();

  const form = document.querySelector(".gp-cf__form form");
  watchFields(form);
  let hasError = isValidated(form);
  // console.log({hasError})
  if (hasError) {
    return;
  } else {
    // console.log({grecaptcha});
    grecaptcha.execute();
  }
}

function contact_form__onload() {
  // console.log('contact_form__onload');
  var element = document.getElementById('submit');
  element.onclick = contact_form__validate;
}


window.addEventListener("DOMContentLoaded", () => {
  contactFormSubmit();
  initVideoPlyr();
  isNewsPage();
  toggleProductDescription();
  consultationFormSubmit();
  contact_form__onload();
});
