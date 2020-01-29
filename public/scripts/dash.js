console.log('Dash.js up and running!');

onSuccess = response => {
    response.forEach(input => {
        const firstName = input.firstName;
        const lastName = input.lastName;
        const email = input.email;
        const created = input.createdAt.toLocaleString();
        // console.log(`
        // ${firstName}, ${lastName}, ${email}, ${created}
        // `);

        $('#subscriberList').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${created}</td>
        </tr>
        `)

    });

};

$(document).ready(function() {

    $.ajax ({
        method: 'GET',
        url: 'http://localhost:4000/api/v1/subscribers',
        success: onSuccess,
        error: error => console.log(error),
    });

});