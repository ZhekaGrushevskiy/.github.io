var block = document.getElementById('myblock');
var openimg = document.getElementById('openimg');
var openimg1 = document.getElementById('openimg1');
var openimg2 = document.getElementById('openimg2');
var openimg3 = document.getElementById('openimg3');
var openimg4 = document.getElementById('openimg4');
var blockimg = document.getElementById('img01');
var captiontext = document.getElementById('caption');
var span = document.getElementsByClassName('close')[0];
var $header = $('#header');
var $body =$('body');

openimg.onclick = function(){
    block.style.display ='block';
    blockimg.src = this.src;
    $header.addClass('active');
    $body.addClass('active');
    captiontext.innerHTML = this.alt;
}
openimg1.onclick = function(){
    block.style.display ='block';
    blockimg.src = this.src;
    $header.addClass('active');
    $body.addClass('active');
    captiontext.innerHTML = this.alt;
}
openimg2.onclick = function(){
    block.style.display ='block';
    blockimg.src = this.src;
    $header.addClass('active');
    $body.addClass('active');
    captiontext.innerHTML = this.alt;
}
openimg3.onclick = function(){
    block.style.display ='block';
    blockimg.src = this.src;
    $header.addClass('active');
    $body.addClass('active');
    captiontext.innerHTML = this.alt;
}
openimg4.onclick = function(){
    block.style.display ='block';
    blockimg.src = this.src;
    $header.addClass('active');
    $body.addClass('active');
    captiontext.innerHTML = this.alt;
}
span.onclick = function() {
     block.style.display="none";
    $header.removeClass('active');
    $body.removeClass('active');
}