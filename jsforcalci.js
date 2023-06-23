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
        if (buttonText == '√') {
            buttonText = '√';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C/AC') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            if(screen.value == ''){
                alert("enter any value to calculate ")
            }
//             else{
//                     if(screenValue.indexOf('√')){
//                         console.log(screenValue.indexOf('√'))
//                         console.log(screenValue.indexOf('√')+1)
                        
// let rootElemNO = screenValue.indexOf('√')+1;
// console.log(screenValue[rootElemNO])
//           rootEleValue = Math.sqrt(parseInt(screenValue[rootElemNO]));
//           console.log(rootEleValue)
//           rootEleString = rootEleValue.toString();
//           console.log(rootEleString)
//           elem = '√'+screenValue[rootElemNO];
//           console.log(elem)
//           screenValue.replace('√'+${screenValue[rootElemNO]},rootEleString)
//           console.log(screenValue)            
//         }
//             screen.value = eval(screenValue.replace('X', '*'));
        }
    
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
    )
}
);
