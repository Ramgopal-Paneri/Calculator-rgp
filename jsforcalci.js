let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
// for (item of buttons) 
buttons.forEach(element => {
    element.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        // console.log('Button text is ', buttonText);        
        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += 'X';
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
            else{
            screen.value = eval(screenValue.replace('X', '*'));
        }
    }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    }
    )
}
);
