
var isOk;
var firstNumeric;
var secondNumeric;
var temp;
do
{
    isOk = confirm("Інструкція!" +
        "\nВведіть два числа" +
        "\nдля продовження ОК для виходу Cancel");
    if (!isOk)
    {
        break;
    }
    firstNumeric = +prompt("Перше число");
    secondNumeric = +prompt("Друге число");
    if ( firstNumeric >= secondNumeric)
    {
        temp = secondNumeric;
        for (var i = (firstNumeric-(secondNumeric)); i >0; i--)
        {
            temp+=++secondNumeric;
        }
    }
    else
    {
        temp = firstNumeric;
        for (var i = (secondNumeric-firstNumeric); i > 0; i--)
        {
            temp+=++firstNumeric;
        }
    }
    alert(temp);
}
while (isOk);