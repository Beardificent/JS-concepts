/*Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument.
The success callback function takes one parameter, response. .then() will fire only after the promise status of fetch() has been resolved.
*/
fetch('https://api-to-call.com/endpoint').then(response => {
        /*The reason we’re testing the ok property of the response object is that it will be a Boolean value.
        If there were no errors response.ok will be true and then your code will return response.json(). */
        if (response.ok) {
            return response.json();

        }
        /*Your code will throw this error when response.ok is falsy.*/
        throw new Error('Request failed!')

    },
    /*If we could not reach the endpoint at all, e.g., the server is down, then we would get this networkError.*/
    networkError => {
        console.log(networkError.message);
    }
)
    /*The second .then()‘s success callback won’t run until the previous .then() method has finished running.
    It will also not run if there was an error was thrown previously. */
    .then(jsonResponse => {
        return jsonResponse
    });


/* FETCH POST BOILPLATE*/
/*Chain a .then() method to the end of the fetch() function and pass it the success callback arrow function as its first argument. The success callback function takes one parameter, response.

.then() will fire only after the promise status of fetch() has been resolved.

The settings object you passed to the fetch() function will contain two properties: method, with a value of 'POST', and body, with a value of JSON.stringify({id: '200'}).

This second argument determines that this request is a POST request and what information will be sent to the API.

*/
fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({id: '200'})
}).then((response) => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Request failed!');
    }, (networkError) => {
        console.log(networkError.message);
    }
).then((jsonResponse) => {

});
