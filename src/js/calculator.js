var isOk;
var firstNumeric;
var secondNumeric;
var action;
do
{
    isOk = confirm("Інструкція!" +
        "\nВведіть два числа та виберіть дію над ними" +
        "\nдля продовження ОК для виходу Cancel");
    if (!isOk)
    {
        break;
    }
    firstNumeric = +prompt("Перше число");
    secondNumeric = +prompt("Друге число");
    action = prompt("Дія :" +
        "\n+ сума\n- різниця" +
        "\n/ ділення\n* множення" +
        "\nq-для виходу");
    switch (action)
    {
        case "+": {alert(`${firstNumeric}+${secondNumeric}=${(firstNumeric + secondNumeric).toFixed(3)}`)} break;
        case "-": {alert(`${firstNumeric}-${secondNumeric}=${(firstNumeric - secondNumeric).toFixed(3)}`)} break;
        case "*": {alert(`${firstNumeric}*${secondNumeric}=${(firstNumeric * secondNumeric).toFixed(3)}`)} break;
        case "/": {alert(`${firstNumeric}/${secondNumeric}=${(firstNumeric / secondNumeric).toFixed(3)}`)} break;
        case "q": {isOk=!isOk;} break;
        default:{alert("вибрана невідома дія")} break;
    }
    if (isOk)
    {
        isOk=confirm("Повторити?");
    }

}
while (isOk);