let screen = document.getElementById('screen');
const buttons = document.getElementsByClassName('btn');
let screenValue = '';
let cross = document.getElementById('cross');
// for (item of buttons) 
Array.from(buttons).forEach(element => {
    element.addEventListener('click', (e) => {
        // console.log(e.target.firstElementChild)
        let buttonText = e.target.innerText;


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
            if (screen.value == '') {
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
    cross.addEventListener('click', backSpace);

}
);

function backSpace() {
    screen.value = screen.value.substring(0, screenValue.length - 1);
    screenValue = screen.value;
}
const rootUtility = document.getElementsByClassName('utility');
rootUtility[0].style.display = "none";
function sqRoot() {
    let utilityInp = document.getElementById('utility');
    let utilityInpVal = utilityInp.value;
    let outPut = document.getElementById('res');
    let root = Math.sqrt(utilityInpVal);
    outPut.value = root;
}
function showELE() {
    rootUtility[0].style.display = "block";
}
const powerEle = document.getElementById('power');
powerEle.style.display = "none";
function power() {
    let pow1st = document.getElementById('pow');
    let pow1stVal = pow1st.value;
    let powNUM = document.getElementById('powNUM');
    let powNUMVal = powNUM.value;
    let ans = document.getElementById('ans');
    let finalVal = Math.pow(pow1stVal, powNUMVal);
    ans.value = finalVal;
}

function showPow() {
    powerEle.style.display = "block";
}

function factorial() {
    let factNUM = document.getElementById('fact');
    let factNUMVal = parseInt(factNUM.value);
    const FactOUt = document.getElementById('out');
    let res = 1;
    let temp = factNUMVal;
    for (let index = 1; index < factNUMVal; index++) {
        res = res * temp;
        temp = temp - 1;
    }
    FactOUt.value = res;
}
document.getElementById('factorial').style.display = "none";
function showFact() {
    document.getElementById('factorial').style.display = "block";
}
let element = document.getElementsByTagName('td');
let targetVal = Array.from(element);
anime({
        targets: targetVal,
        rotate: 360,
        delay: anime.stagger(75) // increase delay by 100ms for each elements.
      });
