//Cashier program 

//Create an array below with a list of euro denominations

// const euroNotes=[5,10,20,50,100,200,500];
// const euroCents=[1,2,5,10,20,50];
// const euroCoins=[1,2];


euroNotes= [5,10,20,50,100,200,500];
euroCents= [0.01,0.02,0.05,0.10,0.20,0.50];
euroCoins= [1,2];   


//sort all the denominations in descending order

euroNotes.sort((a,b)=>b-a);
euroCents.sort((a,b)=>b-a);
euroCoins.sort((a,b)=>b-a);
console.log(euroCents)

//write a function to calculate change
let bill=3.75;
let amountPaid=50;
let change=0;
let overdueMessage;
let changeBreakdown={
    euroNotes: [],
    euroCoins: [],
    euroCents: []
};


function breakdownChange(){
 if(amountPaid>bill) { //get the change if the change is greater
    change=amountPaid-bill;
    for(let item of euroNotes) { //check for the notes 
        if((Math.sign(change-item))===0){
         changeBreakdown["euroNotes"].push(item);
         break;
       } else if((Math.sign(change-item))===1) {
           change = change-item;
           changeBreakdown["euroNotes"].push(item);
           if(change>item) {
               change=change-item;
               changeBreakdown["euroNotes"].push(item)
           }
       }
    }     
    for(let item of euroCoins)  { //check for the coins
        if((Math.sign(change-item))===0){
         changeBreakdown["euroCoins"].push(item);
         break;
       } else if((Math.sign(change-item))===1) {
           change = change-item;
           changeBreakdown["euroCoins"].push(item);
           if(change>item) {
               change=change-item;
               changeBreakdown["euroCoins"].push(item)
           }
       }
    }    
    for(let item of euroCents)  { //check for the cents        
        if((Math.sign(change-item))===0){
         changeBreakdown["euroCents"].push(item);
         break;
       } else if((Math.sign(change-item))===1) {      
           change = (change-item).toFixed(2);
           console.log(change)
           changeBreakdown["euroCents"].push(item);           
            if(change>item) {
            change = (change-item).toFixed(2);            
            changeBreakdown["euroCents"].push(item)
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


 