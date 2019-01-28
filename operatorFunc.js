function arithmetic(a, b, operator){
    const add = "add";
    const sub = "subtract";
    const mul = "multiply";
    const div = "divide";
    if (operator.toLowerCase() === add) {
    return a + b
    } else if (operator.toLowerCase() === sub) {
    return a - b
    } else if (operator.toLowerCase() === div) {
    return a / b
    } else if (operator.toLowerCase() === mul) {
    return a * b
    }
  }

  console.log(arithmetic(4, 5, "mUltiPly"))

  function operatorFunc(a, b, operator){
    const add = "add";
    const sub = "subtract";
    const mul = "multiply";
    const div = "divide";
    while (operator.toLowerCase() === add) {
    return a + b
    } while (operator.toLowerCase() === sub) {
    return a - b
    } while (operator.toLowerCase() === div) {
    return a / b
    } while (operator.toLowerCase() === mul) {
    return a * b
    }
  }

  console.log(operatorFunc(4, 8, "divide"))

  function arithmetic2(a, b, operator){
    optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
    return eval(a + optable[operator] + b);
  }

    console.log(arithmetic2(4, 8, "add"))


function arithmetic3(a, b, operator){
    switch(operator) {
        case 'add':
        return a + b;
        case 'subtract':
        return a - b;
        case 'multiply':
        return a * b;
        case 'divide':
        return a / b;
    }
    }

    console.log(arithmetic3(6, 1, "subtract"))