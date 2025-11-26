const xhr = new XMLHttpRequest();


xhr.addEventListener('load', () => {
    console.log(xhr.response);
});
//waits for the backend to send the response to our request and then puts performs the function

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();



