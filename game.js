let playerOne =document.getElementById("player_one");
let inputOne =document.getElementById("input_01");
let buttonOne =document.getElementById("btn_01");
let errorOne =document.getElementById("error_1");


let playerTwo =document.getElementById("player_two");
let inputTwo =document.getElementById("input_02");
let buttonTwo =document.getElementById("btn_02");
let errorTwo =document.getElementById("error_02");
let chance =document.getElementById("chance_tag");


let chanceTime =5;

errorOne.style.display ="none";
errorTwo.style.display="none";

buttonOne.addEventListener('click',(e)=>{
    e.preventDefault();
    let value =inputOne.value;
   

    if(value === ""){
        errorOne.style.display ="block"
        errorOne.textContent ="Please Enter A Value";
    }else if(isNaN(value)){
        errorOne.style.display ="block"
        errorOne.textContent ="Please Enter Only Number";
    }else if(!(value < 10 && value >0)){
        errorOne.style.display ="block"
        errorOne.textContent ="Please Enter Number 1 To 10";
    }else{
        errorOne.textContent ="";

         firstInput =Number(inputOne.value);
       
        playerOne.style.display ="none";
        inputOne.style.display ="none";
        buttonOne.style.display ="none";
        errorOne.style.display ="none";


        playerTwo.style.display ="block";
        inputTwo.style.display ="block";
        buttonTwo.style.opacity ="1";
        errorTwo.style.display ="block";
        chance.style.display="block";
        chance.innerText =`Your chance : ${chanceTime}`
    }
    
    inputOne.value ="";
})

buttonTwo.addEventListener('click',(e)=>{
    let valueOne =inputTwo.value;

    if(valueOne ===""){
        errorTwo.style.display="block";
        errorTwo.textContent ="Please Enter A Value";
    }else if(isNaN(valueOne)){
        errorTwo.style.display="block";
        errorTwo.textContent ="Please Enter Only Number";
    }else if(!(valueOne <10 && valueOne >0)){
        errorTwo.style.display="block";
        errorTwo.textContent ="Please Enter Number 1 To 10";
    }else{
        errorTwo.textContent ="";

        secondInput =Number(inputTwo.value)
        
       

        if (chanceTime > 1) {
            chanceTime--;
            chance.innerText =`Your chance : ${chanceTime}`
            if(firstInput == secondInput){
                playerTwo.textContent = "Second Player Won The Game";
                buttonTwo.style.display = "none";
             }
        } else {
            chanceTime = 0;
            chance.innerText =`Your chance : ${chanceTime}`
            buttonTwo.style.display = "none";
            playerTwo.textContent = "First Player Won The Game";
        }
    }

    inputTwo.value ="";
})


