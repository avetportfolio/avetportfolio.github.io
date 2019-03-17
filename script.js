/*console.log(truefalse(13));

function truefalse(a){

    if(a%2==0){
        a = "zuyg";
    }
    else{
        a = "kent";
    }

    return a;


}
*/
/*
var t = fak(5);
console.log(t);

function fak(d){
    var art = 1;
    for(var i = d; i > 0; i-- ){
        art *= i;
    }
    return art;


}
*/
/*
var arr = [1,2,3,4,5,6,7];
var t = rty(arr,3);
console.log(t);

function rty(x,y){
    var arr = x;
    var res = 1;
    for(var i = 0; i < arr.length; i++){
        if(arr[i]==y){
            res = arr[i];


        }
        else{
            res = false;
        }
    }

}
*/
/*
var a = 100;
var b = 200;
var p = calcPer(a,b);
var s = calcSq(a,b);
console.log(p,s);

function calcPer(c,d){
   var res = c + d + c + d;
   return res;
}

function calcSq(e,f){
   //write your code here
   var res = e * f;
   return res;
}
*/
/*
var c = [45,60,12,98,78,154,65];
var m = [15,98,45,33,78,98,100,56,98];
var s1 = sumArray(c);
var s2 = sumArray(m);
console.log(s1, s2);


function sumArray(a){
   //write your code here
   var sum = 0;
   for(var i = 0; i<a.length; i++){
       sum += a[i];

   }
   return sum;
}
*/
/*

var c = [45,60,12,98,78,154,65];
var b = reverseArray(c);
console.log(b); //պիտի տպի 65,154,78,98,12,60,45

var t = ["php","javascript","html","css","mysql"];
var m = reverseArray(t);
console.log(m); //պիտի տպի mysql, css, html, javascript, php

function reverseArray(a){
     //write your code here
     var   arr= [];
     for(var i = a.length - 1; i>0; i--){
         console.log(a[i]);
         arr.push(a[i]);


     }
     return arr;
}
*/
/*
function dzaynavorneriqanaky(str){
    var dzaynavorner = ["a","e","i","u","o",];
    var n = 0;
    for(var i = 0; i< str.length; i++){
        if(dzaynavorner.indexOf(Str[1]) != -1){
            n++;
        }

    }
    return n;

}
*/
/*
var matrix = [
    [0,1,0,2,2,0,0,0],
    [0,3,0,1,1,0,0,0],
    [0,2,0,1,0,0,1,3],
    [0,0,1,2,2,0,2,2],
    [0,0,1,0,0,0,2,0],
    [0,0,3,0,1,1,0,0]
];
var sum = 0;
for(var y = 0; y < matrix.length; y++){
    for(var x = 0; x < matrix[y].length; x++){
        if(matrix[y][x] == 1){
            sum ++;

        }
    }
}
console.log(sum);
*/
/*
function setup() {
    createCanvas(500, 600);
    background('#acacac');
    noStroke();
  ;
    
}

function draw() {

    fill(0,0,255);
    var x = random(500);
    var y = random(500);
    var s = random(100);

    ellipse(x, y, s, s);
    


    
    
    
}
*/
/*

function setup() {
    createCanvas(500, 600);
    background('#acacac');
    noStroke();
    var fps = random(50);
    frameRate(10);
}

function draw() {

    fill(0,0,255);
    var x = random(500);
    var y = random(500);
    background('#acacac');
    

    ellipse(x, y, 10, 10);
   
    
  


    
    
    
}
*/
/*
var matrix = [
    [0,1,0,2,2,0,0,0],
    [0,3,0,1,1,0,0,0],
    [0,2,0,1,0,0,1,3],
    [0,0,1,2,2,0,2,2],
    [0,0,1,0,0,0,2,0],
    [0,0,3,0,1,1,0,0]
 ];
var side = 60;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    noStroke();
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/

/*
var matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]
];

var side = 20;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    noStroke();
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/
/*
var matrix2 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  var side = 20;
function  setup(){
    createCanvas(matrix2[0].length * side,matrix2.length * side);
    background('#acacac');
    noStroke();
}
  function draw() {
    for(var y = 0; y < matrix2.length; y++){
        for(var x = 0; x < matrix2[y].length; x++){
            if(matrix2[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/
// axper esa a 
/*
var a = parseInt(Math.random()*6);
console.log(a);


var matrix = [];
var e = 0;

function givearr(){
    var a = 0;
    var arr = [];
    for(var i = 0; i < 21; i++){
        a = parseInt(Math.random()*6);
        arr.push(a);

    }
    return arr;
}

var tr = givearr();
console.log(tr);

for(var i = 0; i < 21; i++){
    e = givearr();
    matrix.push(e);
}
console.log(matrix);




var side = 30;
function  setup(){
    createCanvas(matrix[0].length * side,matrix.length * side);
    background('#acacac');
    noStroke();
}
function draw() {
    for(var y = 0; y < matrix.length; y++){
        for(var x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 2){
                fill("yellow");
                rect(x * side,y * side,side,side);
            }
                
                else if(matrix[y][x] == 3){
                    fill("red");
                    rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 4){
                fill("blue");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 5){
                fill("#ffa31a");
                rect(x * side,y * side,side,side);
            }
            else if(matrix[y][x] == 0){
                fill("#ff471a");
                rect(x * side,y * side,side,side);
            }
        }
    }    
}
*/
function haverj(){
    for(var i = 0;i<250;i++){

    }
return i;
}

var arr = [];
var ki = prompt("Քանի համար եք ներմուծելու?")
for(var i = 0;i <ki;i++){
    var num = Number(prompt("ներմուծել համարը"));
    arr.push(num);


}


console.log(arr);
var arr1 = arr;

var tyr = [];
/*
for(var i = 0;i<arr.length;i++){
    console.log(arr[i]);
    for(var y = i + 1;y<arr1.length;y++){
        if(arr[i]==arr1[y]){
            
            qwe.push(arr[i]);
            console.log(qwe);
            

        }
        else{
            
        }
        
    }
  
}

*/
var er = [];
for(var i = 0;i<arr.length;i++){
var qwe = [];
var top1 = [];

    for(var t = i + 1;t<arr.length;t++){
        if(arr[i]==arr1[t] ){
            qwe.push(arr1[t]);

        }

    }
    qwe.push(arr[i]);

er.push(qwe);
    
  
}


var lop = [[1,3,6],[2,2,2,2],[3,5,5,5],[4,4,4,4,4,4,4]]
for(var i = 0;i<er.length;i++){
    var fg = er[i].length;
    top1.push(fg);
}
console.log(lop);
console.log(er);
console.log(Math.max(...lop))
console.log(top1);
var oli = Math.max(...top1);
console.log(top1.indexOf(oli))
var a = top1.indexOf(oli);
console.log(oli);
alert("Համար: "+er[a][0] + " Քանակ: " + oli);


