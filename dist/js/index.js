const classes = {
  form: ".footer__form",
  formInput: '[name="email"]',
  formError: "footer__form--error",
  formSuccess: "footer__form--success",
  mobileNavToggle: ".mobile-nav__toggle",
};

const form = document.querySelector(classes.form);
const emailInput = document.querySelector(classes.formInput);
const mobileNavToggle = document.querySelector(classes.mobileNavToggle);

function isEmailValid(email) {
  const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return email.match(regExp);
}

function removeFormError() {
  form.classList.remove(classes.formError);
}

function showFormError() {
  form.classList.add(classes.formError);
}

function showFormSuccess() {
  form.classList.add(classes.formSuccess);
}

//validate email and then show feedback
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get("email");

  if (isEmailValid(email)) {
    showFormSuccess();
  } else {
    showFormError();
  }
});

//remove errors whenever the user inputs new data
emailInput.addEventListener("input", removeFormError);

//make the nav button "toggleable"
mobileNavToggle.addEventListener("click", () => {
  mobileNavToggle.parentElement.classList.toggle("mobile-nav--open");
});

//setup the sliding in the testimonial section
$(document).ready(function () {
  $(".testimonials__cards").slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
