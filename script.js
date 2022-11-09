debugger;   
function Validation(){
var a=document.getElementById("One").value;
var b=document.getElementById("Two").value;
var c=document.getElementById("Three").value;
var d=document.getElementById("Four").value;
var e=document.getElementById("Five").value;

const Arr=[];
Arr.push(a);
Arr.push(b);
Arr.push(c);
Arr.push(d);
Arr.push(e);

const maxi=Math.max(...Arr);

alert("Maximum Value is: "+ maxi);
}