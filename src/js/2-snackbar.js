import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const form = document.querySelector(".form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const delayMs = Number(form.elements.delay.value);
  const state = form.elements.state.value;

  const promise = createPromise(state, delayMs);

  promise
    .then((result) => {
      iziToast.success({
        title: "Fulfilled promise",
        message: "✅ Fulfilled promise in " + delayMs + "ms",
      });
    })
    .catch((error) => {
      iziToast.error({
        title: "Rejected promise",
        message: "❌ Rejected promise in " + delayMs + "ms",
      });
    });
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (position === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}