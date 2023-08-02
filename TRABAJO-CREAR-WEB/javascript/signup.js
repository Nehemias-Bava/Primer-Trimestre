const $form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log(form.get('name'));
    console.log(form.get('email'));
    console.log(form.get('password'));
    $form.reset();
}
