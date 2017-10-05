module.exports = function () {
    return {
        add: function (num1, num2) {
            console.log("the sum is:", num1 + num2);
            return num1 + num2;
        },
        multiply: function (num1, num2) {
            console.log("the maltiplication result is:", num1 * num2);
            return num1 * num2;
        },
        square: function (num) {
            console.log("the square result is:", num);
            return num * num; 
        },
        random: function (num1, num2) {
            console.log("the randome number between" + num1 + " and " + num2 + " is: ", Math.floor(Math.random() * num2) + num1);
            return (Math.floor(Math.random() * num2) + num1);            
        }
    }
};