// Write your solution in this file!
var customerName = 'bob'; 
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase(); 
    return customerName; 
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 
}
function overwriteBestCustomer(input) {
    bestCustomer = input; 
}
const leastFavoriteCustomer = 'Jane'; 
function changeLeastFavoriteCustomer(input2) {
    leastFavoriteCustomer = input2; 
}