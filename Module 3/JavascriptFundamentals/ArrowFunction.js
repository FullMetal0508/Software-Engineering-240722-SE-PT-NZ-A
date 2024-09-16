const sayHiExpression = function() {
    console.log('Hi');
    console.log(arguments);
    }

    function sayHiDeclaration() {
    console.log('Hi');
    console.log(arguments);
    }

    const sayHiArrow = () => {
    console.log('Hi');
    console.log(arguments);
    }

    sayHiDeclaration() // [Arguments] {}
    sayHiExpression() // [Arguments] {}
    sayHiArrow(arguments) // ReferenceError: arguments is not defined