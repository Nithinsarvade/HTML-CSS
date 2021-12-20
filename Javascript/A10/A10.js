let number = parseInt(prompt());
let n1=1,n2=1,nextTerm;

for(let i=1;i<=number;i++){
    document.write(n1+"");
    nextTerm=n1+n2;
    n1=n2;
    n2=nextTerm;
}