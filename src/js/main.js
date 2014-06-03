/* global App, test, expect, ok, strictEqual, equal */
(function (App) {
    
    App.isValidNumber = function (number) {
        return (typeof number === "number") && !isNaN(number) && isFinite(number);
    };
    
    App.sum = function (number1, number2) {
        var sum = null;
        if (this.isValidNumber(number1) && this.isValidNumber(number2)) {
            sum = number1 + number2;
        }
        return sum;
    };
    
    App.sumButtonOnClickHandler = function () {
        var number1 = $("#number1").val(),
            number2 = $("#number2").val(),
            $output = $("#output span"),
            sum = App.sum(parseFloat(number1, 10), parseFloat(number2, 10));
        $output.html(sum);
        if (sum === null) {
            alert("Please enter valid number");
        } 
    };
    
    App.init = function () {
        $("#sum").on("click", App.sumButtonOnClickHandler);
    };
    
    $(document).ready(App.init);
}(window.App = window.App || {}));