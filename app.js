

let input = document.getElementById("id-check");
let spanWarn = document.querySelector("#span");


const idCheck = ()=>{
    
    const regexPattern = /[1-9]{1}[0-9]{9}[02468]{1}/;
    let total_odd = 0;
    let total_even = 0;
    total_10 = 0;
    for (let i = 0; i < 9; i += 2 ) {
        total_odd += Number(input.value[i])        
    }
    for (let k = 1; k < 9; k += 2){
        total_even += Number(input.value[k]);       
    }
    for (let m = 0; m < 10; m++) {
        total_10 += Number(input.value[m]);
        
    }

    if (!regexPattern.test(input.value)) {
        if (input.value == ""){
            spanWarn.style.visibility = "hidden"
        }else{
            spanWarn.style.visibility = "visible"
        }
        spanWarn.innerHTML= "invalid entry";
        
        spanWarn.setAttribute("id","span-invalid");
    }
    else if((total_odd * 7 - total_even) %10 != input.value[9]){        
        spanWarn.innerHTML= "invalid entry";        
        spanWarn.setAttribute("id","span-invalid");
    }
    else if(total_10 %10 != input.value[10] ){
        spanWarn.innerHTML= "invalid entry";        
        spanWarn.setAttribute("id","span-invalid");
    }
    
    else{        
        spanWarn.innerHTML = "valid entry";
        spanWarn.setAttribute("id","span-valid")
    }
}

input.addEventListener("keyup", idCheck);


