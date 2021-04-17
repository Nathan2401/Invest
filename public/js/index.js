const allPage = ()=>{

    /* Begining of Form Page */

const formPage = () => {
    const inputTags = document.querySelectorAll('input'); //selecting the input tags
    let investAmnt = inputTags[1];//selecting the second input element
    let investAmntVal = investAmnt.value
    
    
    
    
    investAmnt.addEventListener('keypress',(e)=>{
    let investAmountPercent = ((e.target.value/100000000)*100)
    if(investAmntVal===""||null){
        document.getElementById('ev-color').textContent ='0%';
        
    }
    
    document.getElementById('ev-color').textContent = `${investAmountPercent}%`;
    
    })
    
    /**Getting input values */
    const submit = document.getElementById("submit-btn")
    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        const fullname = document.getElementById("fullname").value
        const investAmnt = document.getElementById("invest-amount").value
        const lastMonthRev = document.getElementById("last-monthrev").value
        const lastMonthExp = document.getElementById("last-monthexp").value
        const amountPercent = document.getElementById('ev-color').textContent 
        console.log(fullname,investAmnt,lastMonthRev, lastMonthExp, amountPercent)
       
    localStorage.setItem('fullname',fullname);
    localStorage.setItem('investAmnt',investAmnt);
    localStorage.setItem('lastMonthRev',lastMonthRev);
    localStorage.setItem('lastMonthExp',lastMonthExp);
    localStorage.setItem('amountPercent',amountPercent);
    console.log(localStorage);
    })
    
    /** */
    }
    formPage()
    
    /**Getting The Values */

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
        document.getElementById('full-name').textContent =fullname;
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







}

allPage();

        



