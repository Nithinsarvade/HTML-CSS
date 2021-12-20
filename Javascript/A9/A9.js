var array1 = ["a","b","c"];
var array2 = [1,2,3];

function newArray(){
    var arr=[];
    for(var i=0;i<array2.length;++i){
        arr.push(array1[i]);
        arr.push(array2[i]);
    }
    return arr;
}

result = newArray();
document.write(result)