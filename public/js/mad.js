/**Getting The Values */

const getValues = ()=>{
    const fullname = localStorage.getItem('fullname');
    const investAmnt = localStorage.getItem('investAmnt');
    const lastMonthRev = localStorage.getItem('lastMonthRev');
    const lastMonthExp = localStorage.getItem('lastMonthExp');
    const amountPercent = localStorage.getItem('amountPercent');
    const defaultWorth = 100000000;
    const defaultProfitBalance = 40000;
    companyValue = (((defaultWorth) + parseInt(lastMonthRev) + parseInt(investAmnt)));
    companyValueString = (((defaultWorth) + parseInt(lastMonthRev) + parseInt(investAmnt))/1000000);
    
    const investAmntString = parseInt(investAmnt)/1000000;
    
    
    const percentWorth = ((parseInt(amountPercent)/100* (companyValue))/1000000).toFixed(2);
    lastMonthProfit = (parseInt(lastMonthRev) - parseInt(lastMonthExp));
    lastMonthProfitString = ((parseInt(lastMonthRev) - parseInt(lastMonthExp))/1000000);
    lastMonthExpString = parseInt(lastMonthExp)/1000000 ;
    lastMonthRevString = parseInt(lastMonthRev)/1000000 ;
    
    
    percentMonthProfitString = ((parseInt(amountPercent)/100*lastMonthProfit)/1000000).toFixed(2);
    percentMonthProfitNum = (parseInt(amountPercent)/100 *lastMonthProfit); 
    //console.log(parseInt(amountPercent));
    //console.log(percentMonthProfitNum);
    
    const accruedProfit = ((defaultProfitBalance + percentMonthProfitNum)/1000000).toLocaleString();
    
    const annualProfit = ((percentMonthProfitNum*12)/1000000).toFixed(2);
            let timeDiff = new Date().getTime() - Date.now();
            console.log(timeDiff);
            let timeLog = new Date().getTime() - timeDiff;
            console.log(timeLog)
            let dateLog = new Date(timeLog).toDateString();
            


        
    
    today = new Date().toDateString();


    const downloadButton =document.getElementById('download-btn')

    /* appending values to page*/
    
    
    document.getElementById('company-value').textContent = `₦${companyValueString}M`;
    document.getElementById('company-revenue').textContent = `₦${lastMonthRevString}M`;
    document.getElementById('company-expense').textContent = `₦${lastMonthExpString}M`;
    
    document.getElementById('company-profit').textContent = `₦${lastMonthProfitString}M`;
    document.getElementById('full-name').textContent =fullname;
    document.getElementById('amount-invested').textContent = `₦${investAmntString}M`;
    document.getElementById('percent-worth').textContent = `₦${percentWorth}M`;
    document.getElementById('amount-percent').textContent = amountPercent;
    document.getElementById('month-profit').textContent = `₦${percentMonthProfitString}M`;
    document.getElementById('accrued-profit').textContent = `₦${accruedProfit}M`;
    document.getElementById('annual-profit').textContent = `₦${annualProfit}M`;
    document.getElementById('investment-date').textContent = dateLog;
    document.getElementById('maturity-date').textContent = today;
    downloadButton.addEventListener('click',()=>{
        window.print();
    })
    
    
    console.log(dateLog,today);

    
    
    
    console.log(localStorage);
    
}
getValues();

