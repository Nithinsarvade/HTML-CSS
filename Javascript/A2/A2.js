const num=prompt("Enter a positive number:");
function Result(num){
    var sum = 0;
    for(var i = 1; i<num; i++){
      if(i % 3 == 0 || i % 5 ==0){
        sum += i;
      }
    }
    return sum
}
document.write(Result(num))