//Cashier program 

//Create an array below with a list of euro denominations

// const euroNotes=[5,10,20,50,100,200,500];
// const euroCents=[1,2,5,10,20,50];
// const euroCoins=[1,2];


    euroNotes= [5,10,20,50,100,200,500];
    euroCents= [1,2,5,10,20,50];
    euroCoins= [1,2];  
  


//sort all the denominations in descending order

euroNotes.sort((a,b)=>b-a);
euroCents.sort((a,b)=>b-a);
euroCoins.sort((a,b)=>b-a);

//write a function to calculate change
let bill=3.75;
let amountPaid=50;
let change=0;
let overdueMessage;
let changeBreakdown=[];


//write a function to breakdown change. 

function breakdownChange(){
 if(amountPaid>bill) {
    change=amountPaid-bill;
    for(let item of euroNotes) {
        if((Math.sign(change-item))===0){
         changeBreakdown.push(item);
       } else if((Math.sign(change-item))===1) {
           change = change-item;
           changeBreakdown.push(item);
           if(change>item) {
               change=change-item;
               changeBreakdown.push(item)
           }
       }
    } 
 } else {
    change=bill-amountPaid;
    overdueMessage= `You buy more than you can afford! You have an overdue amount of -${change}. Pay or leave!`
    return overdueMessage;
 }
   console.log(change);
   return changeBreakdown;
}

console.log(breakdownChange())
 