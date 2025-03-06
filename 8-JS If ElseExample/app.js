//! Market automation
/*
1-chocalete: 2.5$
2-chips: 3.7$
3-juice: 1.9$
*/

let chocalete = 2.5, chips = 3.7, juice = 1.9;

const newLine = "\r\n";

const text = "1-Chocalate: 2.5$" + newLine + "2-Chips: 3.7$" +newLine + "3-Juice: 1.9$" + newLine +"Select Product:";

let textType = Number(prompt(text));
let piece = Number(prompt("Enter Product Quantity:"));
let balance = Number(prompt("Enter Your Balance:"));
if(textType == 1){
    // chocalete
    let totalAmount = chocalete*piece;
    if(balance >= totalAmount){
        alert("Transaction Completed." + newLine + "Remaining Balance:" + (balance-totalAmount) );
    }
    else{
        alert("Insufficient Balance!" + newLine + "Missing Amount:" + (totalAmount-balance) );
    }
}
else if(textType == 2){
    // chips
    let totalAmount = chips*piece;
    if(balance >= totalAmount){
        alert("Transaction Completed." + newLine + "Remaining Balance:" + (balance-totalAmount) );
    }
    else{
        alert("Insufficient Balance!" + newLine + "Missing Amount:" + (totalAmount-balance) );
    }
}
else if(textType == 3){
    // juice
    let totalAmount = juice*piece;
    if(balance >= totalAmount){
        alert("Transaction Completed." + newLine+ "Remaining Balance:" + (balance-totalAmount) );
    }
    else{
        alert("Insufficient Balance!" + newLine + "Missing Amount:" + (totalAmount-balance) );
    }
}
else{
    alert("Invalid Operation!");
}