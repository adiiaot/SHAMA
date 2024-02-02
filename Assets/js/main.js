//SIDE BAR FUNCTION
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggle = document.querySelector(".theme-toggle");

//show sidebar
menuBtn.addEventListener("click", function(){
    sideMenu.style.display = "block";
});

//hide sidebar
closeBtn.addEventListener("click", function(){
    sideMenu.style.display = "none";
});

//change theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggle.querySelector(".bx:nth-child(1)").classList.toggle("active");
    themeToggle.querySelector(".bx:nth-child(2)").classList.toggle("active");
});

//FILL CASH FLOW TABLE
CashFlow.forEach(cashflow => {
    //create the tr content
    const tr = document.createElement("tr");
    
    //add contents into tr from the Tabledata.js file
    const trContent =   `
                <td>${cashflow.Banks}</td>
                <td>${cashflow.AccountNo}</td>
                <td>${cashflow.OpeningBal}</td>
                <td>${cashflow.Deposit}</td>
                <td>${cashflow.Payment}</td>
                <td>${cashflow.ClosingBal}</td>
    `
    tr.innerHTML = trContent;
    document.querySelector("table tbody").appendChild(tr);
});


//FILL SALES/RECEIVED TABLE
/*Sales.forEach(sales => {
    //create the tr content
    const tr = document.createElement("tr");
    
    //add contents into tr from the Tabledata.js file
    const trContent1 =   `
                <td>${sales.Proforma}</td>
                <td>${sales.Number}</td>
                <td>${sales.Amount}</td>
                <td>${sales.Number}</td>
                <td>${sales.Amount}</td>
                `
    tr.innerHTML = trContent1;
    document.querySelector("table tbody").appendChild(tr);
});



//FILL INVENTORY TABLE
Inventory.forEach(inventory => {
    //create the tr content
    const tr1 = document.createElement("tr");
    
    //add contents into tr from the Tabledata.js file
    const trContent2 =   `
                <td>${inventory.StockHeld}</td>
                <td>${inventory.OpeningBal}</td>
                <td>${inventory.StockPurchased}</td>
                <td>${inventory.StockSold}</td>
                <td>${inventory.ClosingBal}</td>
    `
    tr1.innerHTML = trContent2;
    document.querySelector("table tbody").appendChild(tr1);
});


//FILL ACCOUNT PAYABLE FLOW TABLE
AccountPayable.forEach(account => {
    //create the tr content
    const tr = document.createElement("tr");
    
    //add contents into tr from the Tabledata.js file
    const trContent3 =   `
                <td>${account.Proforma}</td>
                <td>${account.Number}</td>
                <td>${account.Amount}</td>
                <td>${account.Number}</td>
                <td>${account.Amount}</td>
                   `
    tr.innerHTML = trContent3;
    document.querySelector("table tbody").appendChild(tr);
});*/


