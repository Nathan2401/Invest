const getValues = ()=>{
    const fullname = localStorage.getItem('fullname');
    const investAmnt = localStorage.getItem('investAmnt');
    const lastMonthRev = localStorage.getItem('lastMonthRev');
    const lastMonthExp = localStorage.getItem('lastMonthExp');
    const amountPercent = localStorage.getItem('amountPercent');
    const defaultWorth = 100000000;
    const defaultProfitBalance = 40000;
    companyValue = parseInt(defaultWorth) + parseInt(lastMonthRev) + parseInt(investAmnt);
    
    
    const percentWorth = parseInt(amountPercent)* companyValue;
    lastMonthProfit = lastMonthRev - lastMonthExp;
    
    
    percentMonthProfit = parseInt(amountPercent)*lastMonthProfit;
    
    const accruedProfit = defaultProfitBalance + percentMonthProfit;
    
    const annualProfit = percentMonthProfit*12;

    postDay = new Date(Date.now()).toDateString();
    today = new Date().toDateString();


    const downloadButton =document.getElementById('download-btn')

    /* appending values to page*/
    
    
    document.getElementById('company-value').textContent = `₦${companyValue}`;
    document.getElementById('company-revenue').textContent = `₦${lastMonthRev}`;
    document.getElementById('company-expense').textContent = `₦${lastMonthExp}`;
    
    document.getElementById('company-profit').textContent = `₦${lastMonthProfit}`;
    document.getElementById('fullname').textContent =  fullname;
    document.getElementById('amount-invested').textContent = `₦${investAmnt}`;
    document.getElementById('percent-worth').textContent = `₦${percentWorth}`;
    document.getElementById('amount-percent').textContent = amountPercent;
    document.getElementById('month-profit').textContent = `₦${percentMonthProfit}`;
    document.getElementById('accrued-profit').textContent = `₦${accruedProfit}`;
    document.getElementById('annual-profit').textContent = `₦${annualProfit}`;
    document.getElementById('investment-date').textContent =postDay;
    document.getElementById('maturity-date').textContent = today;
    downloadButton.addEventListener('click',()=>{
        window.print();
    })
    
    
    console.log(postDay,today);

    
    
    
    console.log(localStorage);
    
}
getValues();
