// Get the current date.
var today = moment().format('dddd, MMMM Do');

//JQuery to append current date.
$('#currentDay').append(today);


// Grabbing the input from the user and storing it into Local Storage.
$(".b9").on("click", function() {
    var entertext = $(".e9").val();
    localStorage.setItem("9:00", entertext);
});

$(".e9").val(localStorage.getItem("9:00"));

$(".b10").on("click", function() {
    var entertext = $(".e10").val();
    localStorage.setItem("10:00", entertext);
});
$(".e10").val(localStorage.getItem("10:00"));

$(".b11").on("click", function() {
    var entertext = $(".e11").val();
    localStorage.setItem("11:00", entertext);
});
$(".e11").val(localStorage.getItem("11:00"));

$(".b12").on("click", function() {
    var entertext = $(".e12").val();
    localStorage.setItem("12:00", entertext);
});
$(".e12").val(localStorage.getItem("12:00"));

$(".b1").on("click", function() {
    var entertext = $(".e1").val();
    localStorage.setItem("1:00", entertext);
});
$(".e1").val(localStorage.getItem("1:00"));

$(".b2").on("click", function() {
    var entertext = $(".e2").val();
    localStorage.setItem("2:00", entertext);
});
$(".e2").val(localStorage.getItem("2:00"));

$(".b3").on("click", function() {
    var entertext = $(".e3").val();
    localStorage.setItem("3:00", entertext);
});
$(".e3").val(localStorage.getItem("3:00"));

$(".b4").on("click", function() {
    var entertext = $(".e4").val();
    localStorage.setItem("4:00", entertext);
});
$(".e4").val(localStorage.getItem("4:00"));

$(".b5").on("click", function() {
    var entertext = $(".e5").val();
    localStorage.setItem("5:00", entertext);
});
$(".e5").val(localStorage.getItem("5:00"));

// Grabbing the current time for color-coding purposes.

var currentTime = moment().format('H');
currentTime = parseInt(currentTime);

//Getting the hours from the page and converting them into numbers.
//Also getting each text area to add classes to them based on past, present, and future.
var t9 = document.querySelector(".t9").textContent;
t9 = parseInt(t9[0]);
var e9 = document.querySelector(".e9");

var t10 = document.querySelector(".t10").textContent;
t10 = parseInt(t10[1]) + 10;
var e10 = document.querySelector(".e10");

var t11 = document.querySelector(".t11").textContent;
t11 = parseInt(t11[1]) +10;
var e11 = document.querySelector(".e11");

var t12 = document.querySelector(".t12").textContent;
t12 = parseInt(t12[1]) + 10;
var e12 = document.querySelector(".e12");

var t1 = document.querySelector(".t1").textContent;
t1 = parseInt(t1[0]) +12;
var e1 = document.querySelector(".e1");

var t2 = document.querySelector(".t2").textContent;
t2 = parseInt(t2[0]) +12;
var e2 = document.querySelector(".e2");

var t3 = document.querySelector(".t3").textContent;
t3 = parseInt(t3[0]) +12;
var e3 = document.querySelector(".e3");

var t4 = document.querySelector(".t4").textContent;
t4 = parseInt(t4[0]) +12;
var e4 = document.querySelector(".e4");

var t5 = document.querySelector(".t5").textContent;
t5 = parseInt(t5[0]) +12;
var e5 = document.querySelector(".e5");


//function that color codes the various time rows depending on current hour.
var hours  = [t9, t10, t11, t12, t1, t2, t3, t4, t5];
var inputs = [e9, e10, e11, e12, e1, e2, e3, e4, e5];
function colorcoding() {
    for (i = 0; i < hours.length; i ++) {
        if (hours[i] < currentTime) {
            inputs[i].classList.add("past");
        }
        else if (hours[i] === currentTime) {
            inputs[i].classList.add("present");
        }
        else {
            inputs[i].classList.add("future");
        }
    }
}
colorcoding();