console.log('This is signup...');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
    event.preventDefault();
    fetch('/views/dash', {
        method: 'POST',
    })
        .then((dataStream) => dataStream.json())
        .then((data) => window.location = '/views/success')
        .catch((error) => console.log(error))
});