/**Getting The Values */

const getValues = ()=>{
    const fullname = localStorage.getItem('fullname');
    const investAmnt = localStorage.getItem('investAmnt');
    const lastMonthRev = localStorage.getItem('lastMonthRev');
    const lastMonthExp = localStorage.getItem('lastMonthExp');
    const amountPercent = localStorage.getItem('amountPercent');
    const defaultWorth = 100000000;
    const defaultProfitBalance = 40000;
    companyValue = ((parseInt(defaultWorth) + parseInt(lastMonthRev) + parseInt(investAmnt))/1000000);
    const investAmntString = investAmnt/1000000;
    
    
    const percentWorth = ((parseInt(amountPercent)* companyValue)/1000000);
    lastMonthProfit = ((lastMonthRev - lastMonthExp)/1000000);
    lastMonthExpString = lastMonthExp/1000000 ;
    lastMonthRevString = lastMonthRev/1000000 ;
    
    
    percentMonthProfit = ((parseInt(amountPercent)*lastMonthProfit)/1000000).toFixed(5);
    
    const accruedProfit = ((defaultProfitBalance + percentMonthProfit)/1000000).toFixed(5);
    
    const annualProfit = ((percentMonthProfit*12).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

    postDay = new Date(Date.now()).toDateString();
    today = new Date().toDateString();


    const downloadButton =document.getElementById('download-btn')

    /* appending values to page*/
    
    
    document.getElementById('company-value').textContent = `₦${companyValue}M`;
    document.getElementById('company-revenue').textContent = `₦${lastMonthRevString}M`;
    document.getElementById('company-expense').textContent = `₦${lastMonthExpString}M`;
    
    document.getElementById('company-profit').textContent = `₦${lastMonthProfit}M`;
    document.getElementById('full-name').textContent =fullname;
    document.getElementById('amount-invested').textContent = `₦${investAmntString}M`;
    document.getElementById('percent-worth').textContent = `₦${percentWorth}M`;
    document.getElementById('amount-percent').textContent = amountPercent;
    document.getElementById('month-profit').textContent = `₦${percentMonthProfit}M`;
    document.getElementById('accrued-profit').textContent = `₦${accruedProfit}M`;
    document.getElementById('annual-profit').textContent = `₦${annualProfit}M`;
    document.getElementById('investment-date').textContent =postDay;
    document.getElementById('maturity-date').textContent = today;
    downloadButton.addEventListener('click',()=>{
        window.print();
    })
    
    
    console.log(postDay,today);

    
    
    
    console.log(localStorage);
    
}
getValues();

