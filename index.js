function saturdayFun (activity1 = "roller-skate") {
    return `This Saturday, I want to ${activity1}!`;
}
saturdayFun();
function saturdayFun (activity1 = "roller-skate") {
    return `This Saturday, I want to ${activity1}!`;
}
saturdayFun("bathe my dog");
function mondayWork (task = "go to the office") {
    return `This Monday, I will ${task}.`;
}
mondayWork("write a report");
function wrapAdjective (visual = "*") {
    return function (mine = "special") {
        return `You are ${visual}${mine}${visual}!`;
    };
} 
wrapAdjective("%")("a dedicated programmer");