import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage() {
    try {
        //throw 'error1';
        //this throws an error and skips the rest of the code and directly executes the catch function    

        await loadProductsFetch();
        //await lets us write asynchronous code like normal code , and waits for the execution of the function 
        //can only be used inside an async function 

        const value = await new Promise((resolve, reject) => {
            //throw 'error2';
            loadCart(() => {
                //reject('error3');
                //reject() creates an error in the future
                resolve('value3');
            });
        });//the 'value3' gets returned to the variable value

    } catch (error) {
        console.log('Unexpected error. Please try again later.')
    }

    //the code inside the 'try' gets checked for an error , and if their is an error the catch() function catches it and runs the code inside it 

    

    renderOrderSummary();
    renderPaymentSummary();

}
//async makes the function return a promise

loadPage();

/*

Promise.all([
    loadProductsFetch(),

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*

new Promise((resolve) => {
    //Promise runs the inner function immediately
    //resolve() lets us control when to go to the next step
    loadProducts(() => {
        resolve('value1');
    });

}).then((value) => {
    console.log(value);

    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
//This is the next step that the resolve() calls

*/

/*
loadProducts(() => {
    loadCart(() => {
        renderOrderSummary();
        renderPaymentSummary();
    });
});


*/