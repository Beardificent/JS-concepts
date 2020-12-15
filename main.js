/* First, we need to create the XMLHttpRequest object using the new operator.
 Save this object in a const called xhr, it is a common practice to name this object xhr.*/
const xhr = new XMLHttpRequest;

/*Next, save the following URL to a const called url.
Make sure the URL is wrapped in quotes so that it is a string.*/
const url = "https://api-to-call.com/endpoint";
/*Set the responseType property of the xhr object to equal 'json'. */
xhr.responseType = 'json';
/*Set the xhr.onreadystatechange event handler equal to an anonymous arrow function.*/
xhr.onreadystatechange = () => {
    /*The purpose of this conditional statement checks to see if the request has finished. */
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response;
    }
    /*.open() creates a new request and the arguments passed in determine the type and URL of the request. */
    xhr.open('GET', url);
    xhr.send();
}



/* AJAX POST request using an XMLHttpRequest object.*/

const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
/*JSON.stringify() will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server.  */
const data = JSON.stringify({id: '200'});
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE){
        return xhr.response;
    }
}

xhr.open('POST', url);
xhr.send(data);
