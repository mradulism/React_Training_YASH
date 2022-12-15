console.log("This is calculator script");
let display = document.getElementById("display");;
//Array.from take the html collection and convert it into array
let buttons = Array.from(document.getElementsByClassName('button'));
console.log(buttons);
buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        // console.log("clicked");
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.innerText);
        switch(e.target.innerText){
            case 'C':
                display.innerText='';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case "=":
                try{
                    display.innerText =eval(display.innerText);
                }catch{
                    display.innerText='invalid Expression';
                }
                break;
            default:
                display.innerText+=e.target.innerText;
        }
    });

});

