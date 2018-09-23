var solution = document.getElementById("#quiz");
var add = function(one,two,three,four,five){
let result = 0;
if (!isNaN(one)) {
    result = result + one;
}

    if (!isNaN(two)){
    result += two;
}

    if (!isNaN(three)){
    result += three
}

    if (!isNaN(four)){
    result += four
}

    if (!isNaN(five)) {
    result += five
}

    //var result = one + two + three + four + five;
    return result;
}
function total(answer) {
    var endResult = "your score is&nbsp;" + answer;
    document.getElementById("returnedResults").innerHTML = endResult;
}
function hideSection() {
    let sectionOne  = document.getElementById("sectionOne");
    if (sectionOne.style.display === "none") {
        sectionOne.style.display = "block";
    } else {
        sectionOne.style.display = "none";
    }

    let sectionTwo = document.getElementById("sectionTwo");
    if (sectionTwo.style.display === "none") {
        sectionTwo.style.display = "block";
    } else {
        sectionTwo.style.display = "none";
    }
}

$(document).ready(function () {
    //$("#submit").fadeToggle("slow");

   $("form#quiz").submit(function (event) {

        var question1 = parseInt ($("input:radio[name=question1]:checked").val());
       var question2 = parseInt($("input:radio[name=question2]:checked").val());
       var question3 = parseInt($("input:radio[name=question3]:checked").val());
       var question4 = parseInt($("input:radio[name=question4]:checked").val());
       var question5 = parseInt($("input:radio[name=question5]:checked").val());

       total(add(question1, question2, question3, question4, question5));
    
  event.preventDefault();  
    
});
});  