var temp = 1;

for (var i = 1; i <= 100; i++)
{

    if (i % 3 == 0)
    {
        temp *=  i;
    }
    console.log(temp);
}
alert(temp);