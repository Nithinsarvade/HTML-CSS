var myStrsize=window.prompt("Enter String array size:");

var myStr = new Array(myStrsize);
strArrayPrint(myStr);
function strArrayPrint(myStr) {
    document.write("*********<br>");
    for(var i=0; i<=myStrsize; i++){
        myStr[i]=window.prompt("enter "+i+"value for array 1");
        document.write("* " + myStr[i] + " *<br>");
    }

document.write("*********");
}