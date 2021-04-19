import bolitaMovSelector from "../classes/bolitaMovSelector";

window.addEventListener('load', ()=>{

    const adds = document.querySelectorAll('.add');
    const subs = document.querySelectorAll('.sub');
    const amounts = document.querySelectorAll('.square');


    adds.forEach((add, index) =>{
        add.addEventListener('mousedown', (event)=>{   
            let amount;
            amount = parseInt(amounts[index].innerHTML);
            amount++;
            amounts[index].innerHTML = amount;
            result();
        });
    });


    subs.forEach((sub, index) =>{
        sub.addEventListener('mousedown', (event)=>{
            //console.log("Chao");
            let amount;
            amount = parseInt(amounts[index].innerHTML);
            if(amount>0){
                amount--;
                amounts[index].innerHTML = amount;
                result();
            }
        });
    });

    function result(){
        var result = 0;
        amounts.forEach((amount,index)=>{
            if(index<3){
                result += parseInt(amount.innerHTML);
            }
            amounts[3].innerHTML = result;
        });
    } 
});