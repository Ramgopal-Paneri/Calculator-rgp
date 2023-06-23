let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
// for (item of buttons) 
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);        
        if (buttonText == 'X') {
            screen.value = screenValue;
        }
        // if (buttonText == '√') {
        //     buttonText = '√';
        //     screenValue += buttonText;
        //     screen.value = screenValue;
        // }
        else if (buttonText == 'C/AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if(screen.value == ''){
                alert("enter any value to calculate ")
            }
            if(screenValue.length == 2){
                if(screenValue.indexOf('√')==0){
                   const getElem = screenValue[screenValue.indexOf('√')+1]
                const getSqValue = Math.sqrt(parseInt(getElem));   
                screenValue.replace('√',null);
                screenValue.replace(getElem.value,null)
               screenValue = screenValue.concat('',getSqValue)
                }
            }
            else{
                    if(screenValue.indexOf('√')){
                        console.log(screenValue.indexOf('√'))
                        console.log(screenValue.indexOf('√')+1)
                    }     
// let rootElemNO = screenValue.indexOf('√')+1;
// console.log(screenValue[rootElemNO])
//           rootEleValue = Math.sqrt(parseInt(screenValue[rootElemNO]));
//           console.log(rootEleValue)

        // }

            screen.value = eval(screenValue.replace('X', '*'));
        }
    
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
    )
}
);
