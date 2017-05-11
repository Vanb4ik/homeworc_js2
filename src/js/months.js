var numberMonths=prompt("Введіть номер місяця");
var JANUARY="Січень";
var FEBRUARY="Лютий";
var MARCH="Березень";
var APRIL="Квітень";
var MAY="Травень";
var JUNE="Черень";
var JULY="Липень";
var AUGUST="Серпень";
var SEPTEMBER="Вересень";
var OCTOBER="Жовтень";
var NOVEMBER="Листопад";
var DECEMBER="Грудень";
switch (numberMonths)
{
    case"1":{alert(numberMonths+"-й місяць "+JANUARY);}break;
    case"2":{alert(numberMonths+"-й місяць "+FEBRUARY);}break;
    case"3":{alert(numberMonths+"-й місяць "+MARCH);}break;
    case"4":{alert(numberMonths+"-й місяць "+APRIL);}break;
    case"5":{alert(numberMonths+"-й місяць "+MAY);}break;
    case"6":{alert(numberMonths+"-й місяць "+JUNE);}break;
    case"7":{alert(numberMonths+"-й місяць "+JULY);}break;
    case"8":{alert(numberMonths+"-й місяць "+AUGUST);}break;
    case"9":{alert(numberMonths+"-й місяць "+SEPTEMBER);}break;
    case"10":{alert(numberMonths+"-й місяць "+OCTOBER);}break;
    case"11":{alert(numberMonths+"-й місяць "+NOVEMBER);}break;
    case"12":{alert(numberMonths+"-й місяць "+DECEMBER);}break;
    default:{alert("ups");}break;
}