/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

const { set } = require("express/lib/response");

function wait(n) {
    const n = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, n);

    });
    return n;
}
const ans = wait(n);
ans.then(function(){
})

module.exports = wait;
