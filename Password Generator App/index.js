   const createPass = document.getElementById("gen-btn")
   
   createPass.addEventListener("click", function() {

    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@%$*&!~+';
    let password = "";
    for (let p = 0; p < 10; p++){
        let random = character[ Math.floor(Math.random() * 72)];
        password += random
    }
    
    let characterTwo = 'abcdefghijklmnopqrstuvwxyz0123456789#@%$*&!~+ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordTwo = "";
    for (let i = 0; i < 10; i++){
        let randomTwo = characterTwo[ Math.floor(Math.random() * 72)];
        passwordTwo += randomTwo
    }
    
     let characterThree = '0123456789#@%$*&!~+abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let passwordThree = "";
    for (let i = 0; i < 10; i++){
        let randomThree = characterThree[ Math.floor(Math.random() * 72)];
        passwordThree += randomThree
    }
    
     let characterFour = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%$*&!~+';
    let passwordFour = "";
    for (let i = 0; i < 10; i++){
        let randomFour = characterFour[ Math.floor(Math.random() * 72)];
        passwordFour += randomFour
    }
    let parent = document.getElementById("passOne").innerHTML = password;
    let parentTwo =  document.getElementById("passTwo").innerHTML = passwordTwo;
    let parentThree =   document.getElementById("passThree").innerHTML = passwordThree;
    let parentFour =   document.getElementById("passFour").innerHTML = passwordFour;
})
