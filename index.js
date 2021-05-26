//Cashier program 

//Create an array below with a list of euro denominations

euroNotes = [5, 10, 20, 50, 100, 200, 500];
euroCents = [0.01, 0.02, 0.05, 0.10, 0.20, 0.50];
euroCoins = [1, 2];


//sort all the denominations in descending order

euroNotes.sort((a, b) => b - a);
euroCents.sort((a, b) => b - a);
euroCoins.sort((a, b) => b - a);

//write a function to calculate change
let bill = 10;
let amountPaid = 50;

let change = 0;
let overdueMessage;
let changeBreakdown = {
    euroNotes: [],
    euroCoins: [],
    euroCents: []
};


function breakdownChange() {
    if (amountPaid > bill) { //calculate the change if the change is greater
        change = amountPaid - bill;
        for (let item of euroNotes) { //check for the notes in the change
            if ((Math.sign(change - item)) === 0) { //if there is no remainder left, then push the last item and break the loop.
                changeBreakdown["euroNotes"].push(item);
                change-=item;
                break;
            } else if ((Math.sign(change - item)) === 1) { //as long as there is a positive remainder, continue looking for change.
                change-=item;
                changeBreakdown["euroNotes"].push(item);
                if (change >= item) { //if the change is still greater than the current item, use the current note.
                    change-=item;
                    changeBreakdown["euroNotes"].push(item);
                }
            }
        }

        for (let item of euroCoins) { //check for the coins in the change and follow the same above pattern. 
            if ((Math.sign(change - item)) === 0) {
                changeBreakdown["euroCoins"].push(item);
                change-=item;
                break;
            } else if ((Math.sign(change - item)) === 1) {
                change-=item;                
                changeBreakdown["euroCoins"].push(item);
                console.log(`coins change: ${change}, item: ${item}`)
                if (change >= item) {
                    change-=item;
                    changeBreakdown["euroCoins"].push(item);
                }
            }
        }

        for (let item of euroCents) { //check for the cents and follow the same above pattern.       
            if ((Math.sign(change - item)) === 0) {
                changeBreakdown["euroCents"].push(item);
                change-=item;
                break;
            } else if ((Math.sign(change - item)) === 1) {
                change = (change - item).toFixed(2);
                changeBreakdown["euroCents"].push(item);
                if (change >= item) {
                    change = (change - item).toFixed(2);
                    changeBreakdown["euroCents"].push(item);
                }
            }
        }
    } else { //in case amount paid is less than the bill, show the below message. 
        change = bill - amountPaid;
        overdueMessage = `You buy more than you can afford! You have an overdue amount of -${change}. Pay or leave!`
        return overdueMessage;
    }
    console.log(change);
    return changeBreakdown;
}

console.log(breakdownChange())


