console.log('This is signup...');

// const form = document.getElementById("form");

// // Submit Event Listener
// form.addEventListener('submit', handleSubmit);

// // Handle Submit
// function handleSubmit(event) {
//     let formIsValid = true;
//     const subscriberData = {};
//     event.preventDefault();

//     if (formIsValid) {
//         // SUBMIT DATA TO SERVER
//         fetch('/api/v1/dash', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(subscriberData),
//         })
//             .then((dataStream) => dataStream.json())
//             .then((dataObj) => {
//                 if (dataObj.status === 200) {
//                     window.location = '/success';
//                 }
//                 console.log(dataObj);
//             })
//             .catch((error) => console.log(error));
//     }
// };

$('#submit').on('click', () => {
    document.getElementById("form").reset();
    event.preventDefault();
    const userData = {};

    fetch('/api/v1/subscribers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    })
        .then((dataStream) => dataStream.json())
        .then((dataObj) => {
            console.log(dataObj);
            window.location = '/success';
        })
        .catch((error) => console.log(error));

    // $.ajax({
    //     method: 'POST',
    //     url: "http://localhost:4000/api/v1/subscribers", 
    //     data: $("#form").serialize(), 
    //     dataType: 'json',
    //     success: response => console.log(response),
    //     error: error => console.log(error),
    // })
});

// $(document).ready(function(){
//     $("#form").submit(function(){
//         $.ajax({
//             method: 'GET',
//             url: "http://localhost:4000/api/v1/subscribers", 
//             data: $("#form").serialize(), 
//             dataType: 'json',
//             success: response => console.log(response);
//             error: error => console.log(error);
//         }); 
//     });
// });



// $.ajax({
//     method: 'POST',
//     headers: {
//     'Content-Type': 'application/json',
//     },
//     url: 'http://localhost:4000/api/v1/subscribers',
//     success: response => console.log(response),
//     error: error => console.log(error),
// });