document.getElementById("btn").addEventListener("click",function()
{
    var value=document.getElementById("percentage").value;
    if(value>90)
    {
        alert("Congratulations! You have secured Grade A+(Outstanding)");
    }
    else if(value>80 && value<=90)
    {
        alert("Congratulations! You have secured Grade A(Excellent)");
    }
    else if(value>70 && value<=80)
    {
        alert("Congratulations! You have secured Grade B+(Very Good) ");
    } 
    else if(value>60 && value<=70)
    {
        alert("Congratulations! You have secured Grade B(Good)");
    }
    else if(value>50 && value<=60)
    {
        alert("Congratulations! You have secured Grade C+(Satisfactory)");
    }
    else if(value>40 && value<=50)
    {
        alert("Congratulations! You have secured Grade C(Acceptable)");
    }
    else if (value>35 && value<=40)
    {
        alert("Congratulations! You have secured Grade D(Basic)");
    }
    else
    {
        alert("Congratulations! You have secured Grade NG(Not Graded) ");
    }
})