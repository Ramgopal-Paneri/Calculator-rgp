let screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('btn');
let screenValue = '';
let cross = document.getElementById('cross');
// for (item of buttons) 
Array.from(buttons).forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.firstElementChild)
        let buttonText = e.target.innerText;

        if(e.target.innerText == '√'){
            buttonText = buttonText;
        }
                // console.log('Button text is ', buttonText);        
                      if (buttonText == 'X') {
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
          screen.value = eval(screenValue.replace('X', '*'));
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
    )
    cross.addEventListener('click',backSpace);
        
}
);
function backSpace(){
// const arr =  Array.from(screenValue);
//     arr.pop();
    
//     const strVal = arr.toString();
//     screen.value = strVal;
//     screenValue = strVal
//     console.log(screenValue)
//     console.log(screen.value)

// console.log(arr)
// console.log(strVal)
     screen.value = screen.value.substring(0,screenValue.length-1);   
    screenValue = screen.value;

   
}
