function saturdayFun(action="roller-skate") {
    return (`This Saturday, I want to ${action}!`);
}
saturdayFun();

function mondayWork(work = "go to the office") {
    return `This Monday, I will ${work}.`;
}
mondayWork();

function wrapAdjective(system = "*") {
    return function(number1 = "special") {
        return `You are ${system}${number1}${system}!`
    }
}

