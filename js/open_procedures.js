var modal = document.getElementById('myModal');
var care = document.getElementById('myCare');
var span =document.getElementsByClassName('close')[0];

var modal1 = document.getElementById('myModal1');
var care1 = document.getElementById('myCare1');
var span1 =document.getElementsByClassName('close1')[0];

var modal2 = document.getElementById('myModal2');
var care2 = document.getElementById('myCare2');
var span2 =document.getElementsByClassName('close2')[0];

var modal3 = document.getElementById('myModal3');
var care3 = document.getElementById('myCare3');
var span3 =document.getElementsByClassName('close3')[0];

var modal4 = document.getElementById('myModal4');
var care4 = document.getElementById('myCare4');
var span4 =document.getElementsByClassName('close4')[0];
var $header = $('#header');
var $body =$('body');

care.onclick = function(){
    modal.style.display ='block';
    $header.addClass('active');
    $body.addClass('active');
}
span.onclick = function() {
    modal.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');
}

care1.onclick = function(){
    modal1.style.display ='block';
    $header.addClass('active');
    $body.addClass('active');
}
span1.onclick = function() {
    modal1.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');
    
}

care2.onclick = function(){
    modal2.style.display ='block';
    $header.addClass('active');
    $body.addClass('active');
}
span2.onclick = function() {
    modal2.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');
}

care3.onclick = function(){
    modal3.style.display ='block';
    $header.addClass('active');
    $body.addClass('active');
}
span3.onclick = function() {
    modal3.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');
}

care4.onclick = function(){
    modal4.style.display ='block';
    $header.addClass('active');
    $body.addClass('active');
}
span4.onclick = function() {
    modal4.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');

}
