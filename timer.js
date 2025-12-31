function show(){
    var count=15;
    //count=count+1;
    count++;
    console.log(count); 
};
function display(company){
    console.log("Company Name: "+company);
};

function addition(num1,num2){
    var sum=num1+num2;
    return sum;
};

show();

var provider="Transflower";
display(provider);

var num1=10;
var num2=20;
var total=addition(num1,num2);
console.log("Sum: "+total);