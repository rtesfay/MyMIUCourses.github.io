function a(){
    console.log(x);
}
function b(){
    var x=10;
    a();
}
var x=20;
b();
