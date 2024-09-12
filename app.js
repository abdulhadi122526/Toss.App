
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var img = document.querySelector("img");

function toss_head(clicked){
    var num= Math.floor(Math.random()*2) +1;
    if (num === 1 && clicked === "head"){
        p1.innerHTML = "Cong! You won the toss "
        p2.innerHTML = " "
 
        img.src="img/images.jfif"
        
    }else if (num === 1 && clicked === "tail"){
        p1.innerHTML = "cong! you won the toss"
        p2.innerHTML = " "
        img.src="img/TAIL-TOSSING-COIN.jpg"
        
    }else if (num === 2 && clicked === "head"){
        p2.innerHTML = "Sorry, you lost the toss"
        p1.innerHTML = " "
 
        img.src="img/TAIL-TOSSING-COIN.jpg"
       
        
    } else {
        num === 2 && clicked === "tail"
        p2.innerHTML = "Sorry, you lost the toss"
        p1.innerHTML = " "
 
        img.src="img/images.jfif"
    }
    console.log(num);
    

}




 











