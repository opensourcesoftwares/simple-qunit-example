/* global App, test, expect, ok, strictEqual, equal */
(function () {
    module("Unit Test for Sum App", {
        setup: function () {
            // prepare something for all following tests
            createMockForm();
            App.init();
        },
        teardown: function () {
            // clean up after each test
        }
    });
    
    test('isValidNumber(n): Test for positive number', function () {
        expect(1);
        ok(App.isValidNumber(3), '3 should be true');
    });
    
    test('isValidNumber(n): Test for negative numbers', function () {
        expect(1);
        ok(App.isValidNumber(-3), '-3 should be true');
    });
    
    test('isValidNumber(n): Test for zero', function () {
        expect(1);
        ok(App.isValidNumber(0), '0 should be true');
    });
    
    test('isValidNumber(n): Test for undefined value', function () {
        expect(1);
        strictEqual(App.isValidNumber(undefined), false, 'undefined should be false');
    });
    
    test('isValidNumber(n): Test for null value', function () {
        expect(1);
        strictEqual(App.isValidNumber(null), false, 'null should be false');
    });
    
    test('isValidNumber(n): Test for NaN value', function () {
        expect(1);
        strictEqual(App.isValidNumber(NaN), false, 'NaN should be false');
    });
    
    test('isValidNumber(n): Test for String values', function () {
        expect(1);
        strictEqual(App.isValidNumber("3"), false, '"3" should be false');
    });
    
    test("Sum(a, b): Call function with positive numbers as parameters", function () {
        expect(1);
        strictEqual(App.sum(4, 5), 9, "Should be 9");
    });
    
    test("Sum(a, b): Call function with positive and negative numbers as parameters", function () {
        expect(1);
        strictEqual(App.sum(4, -5), -1, "Should be -1");
    });
    
    test("Sum(a, b): Call function without parameters", function () {
        expect(1);
        strictEqual(App.sum(), null, "Should be null");
    });
    
    test("Sum(a, b): Call function with String parameters", function () {
        expect(1);
        strictEqual(App.sum("4", "5"), null, "Should be null");
    });
    
    test("Sum(a, b): Call function with NaN and valid numbers as parameters", function () {
        expect(1);
        strictEqual(App.sum(parseInt(''), 5), null, "Should be null");
    });
    
    test('sumButtonOnClickHandler(): Test for DOM element innerHTML changes', function () {
        expect(1);
        $("#number1").val(4);
        $("#number2").val(3);
        App.sumButtonOnClickHandler();
        
        equal($("#output span").html(), '7', 'should be "7"');
    });
    
    test('init(): Test for click event', function () {
        expect(1);
        $("#number1").val(4);
        $("#number2").val(3);
        $("#sum").trigger("click");
        
        equal($("#output span").html(), 7, 'should be "7" after click');
    });
    
    function createMockForm() {
        var $fixture = $( "#qunit-fixture" ),
            htmlForForm = '';
        htmlForForm += '<input type="text" id="number1" />';
        htmlForForm += '<input type="text" id="number2" />';
        htmlForForm += '<input type="button" id="sum" />';
        htmlForForm += '<div id="output"><span></span></div>';
        $fixture.append(htmlForForm);
    };
}());