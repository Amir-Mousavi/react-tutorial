const age = 20;

if (age > 18) {
    console.log("Qualifies for driving");
} else if (age == 18) {
    console.log("You can start learning to drive....");
} else {
    console.log("Does not qualify for driving");
}


const weedDayNumber = 3;


switch(weedDayNumber) {
    case 1:
        console.log("Monday");
    break;
    
    case 2:
        console.log("Tuesday");
    break;

    case 3:
        console.log("Wednsday");
    break;

    case 4:
        console.log("Thursday");
    break;

    case 5:
        console.log("Friday");
    break;

    case 6:
        console.log("Saturday");
    break;

    case 7:
        console.log("Sunday");
    break;

    default:
        console.log("Unknown");

}