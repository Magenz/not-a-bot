var atk = document.querySelector('input[value*="ATTACK"]');


var myEles = document.querySelectorAll('strong');
for(var i=0; i<myEles.length; i++){
    
    if(myEles[i].innerHTML == 'No space in your inventory.'){
        window.location.href = "https://blackdragon.mobi/buildings/view/building=calh/action=sell/c=14749?submit=SELL";
        
    }
    else{
     atk.click();  
    }
}
