

    /* Begining of Form Page */

const formPage = () => {
    const inputTags = document.querySelectorAll('input'); //selecting the input tags
    let investAmnt = inputTags[1];//selecting the second input element
    let investAmntVal = investAmnt.value
    
    
    
    
    investAmnt.addEventListener('input',(e)=>{
    //let investAmountPercent = ((parseFloat(e.target.value)/10000000)*100)
    if(investAmntVal===""||investAmntVal===null||investAmntVal==="0"){
        document.getElementById('ev-color').textContent ='0%';
        
    }
    //console.log(e.target.value);
    let investAmntString = e.target.value.split(',').join('');
    //console.log(investAmntString);
    let investAmntNum =(parseInt(investAmntString,10));
    let investAmountPercent = investAmntNum/100000000 *100;
    
    document.getElementById('ev-color').textContent = `${investAmountPercent}%`;
    
    })

    

    
    /**Getting input values */
    const submit = document.getElementById("submit-btn")
    submit.addEventListener("click", (e)=>{
        e.preventDefault()
        const fullname = document.getElementById("fullname").value
        const investAmnt = document.getElementById("invest-amount").value.split(',').join('')
        const lastMonthRev = document.getElementById("last-monthrev").value.split(',').join('')
        const lastMonthExp = document.getElementById("last-monthexp").value.split(',').join('')
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
    
    







        



