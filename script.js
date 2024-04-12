// Tool tip box 1
document.getElementById('help-1').addEventListener("mouseover",()=>{
    const element = document.getElementById('help-text-1') ;
    element.style.visibility = "visible" ;
});
document.getElementById('help-1').addEventListener("mouseleave",()=>{
    const element = document.getElementById('help-text-1') ;
    element.style.visibility = "hidden" ;
});

// Tool tip box 2
document.getElementById('help-2').addEventListener("mouseover",()=>{
    const element = document.getElementById('help-text-2') ;
    element.style.visibility = "visible" ;
});
document.getElementById('help-2').addEventListener("mouseleave",()=>{
    const element = document.getElementById('help-text-2') ;
    element.style.visibility = "hidden" ;
});

// Tool tip box 3
document.getElementById('help-3').addEventListener("mouseover",()=>{
    const element = document.getElementById('help-text-3') ;
    element.style.visibility = "visible" ;
});
document.getElementById('help-3').addEventListener("mouseleave",()=>{
    const element = document.getElementById('help-text-3') ;
    element.style.visibility = "hidden" ;
});

// Tool tip box 4
document.getElementById('help-4').addEventListener("mouseover",()=>{
    const element = document.getElementById('help-text-4') ;
    element.style.visibility = "visible" ;
});
document.getElementById('help-4').addEventListener("mouseleave",()=>{
    const element = document.getElementById('help-text-4') ;
    element.style.visibility = "hidden" ;
});


function validate_1(){
    const num = document.getElementById('grossAmt').value ;
    if(isNaN(num)){
        document.getElementById('error-1').style.visibility = "visible" ;
        document.getElementById('error-1-text').textContent = "Please enter numbers only !!" ;
    }else if(num === ""){
        document.getElementById('error-1').style.visibility = "visible" ;
        document.getElementById('error-1-text').textContent = "This field is required !!" ;
    }
    else{
        document.getElementById('error-1').style.visibility = "hidden" ;
    }
}

function validate_2(){
    const num = document.getElementById('extraIncome').value ;
    if(isNaN(num)){
        document.getElementById('error-2').style.visibility = "visible" ;
        document.getElementById('error-2-text').textContent = "Please enter numbers only !!" ;
    }else if(num === ""){
        document.getElementById('error-2').style.visibility = "visible" ;
        document.getElementById('error-2-text').textContent = "This field is required !!" ;
    }
    else{
        document.getElementById('error-2').style.visibility = "hidden" ;
    }
}

function validate_3(){
    const string = document.getElementById('age').value ;
    if(string === "Select Age Group"){
        document.getElementById('error-3').style.visibility = "visible" ;
    }else{
        document.getElementById('error-3').style.visibility = "hidden" ;
    }
}

function validate_4(){
    const num = document.getElementById('deductAmt').value ;
    if(isNaN(num)){
        document.getElementById('error-4').style.visibility = "visible" ;
        document.getElementById('error-4-text').textContent = "Please enter numbers only !!" ;
    }else if(num === ""){
        document.getElementById('error-4').style.visibility = "visible" ;
        document.getElementById('error-4-text').textContent = "This field is required !!" ;
    }
    else{
        document.getElementById('error-4').style.visibility = "hidden" ;
    }
}
// Error tool tip 1

document.getElementById('error-1').addEventListener("mouseover",()=>{
    document.getElementById('error-1-text').style.visibility = "visible" ;
});
document.getElementById('error-1').addEventListener("mouseout",()=>{
    document.getElementById('error-1-text').style.visibility = "hidden" ;
});

// Error tool tip 2

document.getElementById('error-2').addEventListener("mouseover",()=>{
    document.getElementById('error-2-text').style.visibility = "visible" ;
});
document.getElementById('error-2').addEventListener("mouseout",()=>{
    document.getElementById('error-2-text').style.visibility = "hidden" ;
});

// Error tool tip 3

document.getElementById('error-3').addEventListener("mouseover",()=>{
    document.getElementById('error-3-text').style.visibility = "visible" ;
});
document.getElementById('error-3').addEventListener("mouseout",()=>{
    document.getElementById('error-3-text').style.visibility = "hidden" ;
});

// Error tool tip 4

document.getElementById('error-4').addEventListener("mouseover",()=>{
    document.getElementById('error-4-text').style.visibility = "visible" ;
});
document.getElementById('error-4').addEventListener("mouseout",()=>{
    document.getElementById('error-4-text').style.visibility = "hidden" ;
});


// Calculate Tax

function Calculate_Tax(){
    let grossAmt = document.getElementById('grossAmt').value ;
    grossAmt = parseFloat(grossAmt) ;
    let extraIncome = document.getElementById('extraIncome').value ;
    extraIncome = parseFloat(extraIncome) ;
    const age = document.getElementById('age').value ;
    let deduction = document.getElementById('deductAmt').value ;
    deduction = parseFloat(deduction) ;

    let tax ;

    if((grossAmt + extraIncome - deduction) <= 800000){
        tax = 1 ;
    }else{
        if(age === "<40"){
            tax = 0.3 ;
        }else if(age === ">40&<60"){
            tax = 0.4 ;
        }else if(age === ">60"){
            tax = 0.1 ;
        }
    }

    return (tax * (grossAmt + extraIncome - deduction)).toFixed(2) ;
}

document.getElementById('submit').addEventListener("click",()=>{
    validate_1();
    validate_2();
    validate_3();
    validate_4();

    const error_1 = document.getElementById('error-1').style.visibility === "hidden" ;
    const error_2 = document.getElementById('error-2').style.visibility === "hidden" ;
    const error_3 = document.getElementById('error-3').style.visibility === "hidden" ;
    const error_4 = document.getElementById('error-4').style.visibility === "hidden" ;

    if(error_1 && error_2 && error_3 && error_4){
        const result = document.getElementById('result') ;
        result.textContent = Calculate_Tax() ;
    document.getElementById('section').style.visibility = "visible" ;
    }
});

document.getElementById('close').addEventListener("click",()=>{
    document.getElementById('section').style.visibility = "hidden" ;
})