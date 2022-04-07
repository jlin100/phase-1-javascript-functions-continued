// code your solution here
function saturdayFun(a = "roller-skate") {
    return (`This Saturday, I want to ${a}!`);
}
saturdayFun(); 

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`);
}
mondayWork();

function wrapAdjective(h = "*") {
    return function (emphatic = "a hard worker"){
    return `You are ${h}${emphatic}${h}!`
}
  }