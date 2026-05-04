const STORAGE_KEY = 'feedback-form-state';
const formData = { email: "", message: "" };
const form =
    document.querySelector('.feedback-form');
    const savedData = localStorage.getItem(STORAGE_KEY);
import '../css/form.css'
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
  const { name, value } = event.target;

  if (name !== 'email' && name !== 'message') {
    return;
  }
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData.email = '';
  formData.message = '';
});