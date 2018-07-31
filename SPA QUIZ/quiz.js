var count=0;
var n = 1;
var nextdata;
var correct=0;
 function start(){
     $.get("quiz.json",function(data,status){
         var num="Question $(n)";
         $("#qNumber").text(num);
         $("#question").text(data[count].question);
         var options="<input type="radio" name="ans" value="a" onclick="correctanswer();">
     })
 }