// generate button
const generateInput = ()=>{
    let generateInput = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generateInput').value = generateInput;
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('submitBtn').style.backgroundColor = '#495BC3';
}
let generateBtn = document.getElementById('generateBtn').addEventListener('click', generateInput);


//submit button
const submitBtn = document.getElementById('submitBtn').addEventListener('click', ()=>{
    const output = document.getElementById('output').value;
    const generateInput = document.getElementById('generateInput').value;
    if(output == generateInput){
        document.getElementById('successNotify').style.display = 'block';
        printOutput('');
        setTimeout(openUrl, 1000); // Wait 1 seconds

        function openUrl(){

            window.open('https://ak.picdn.net/shutterstock/videos/9909506/thumb/2.jpg');

        }
    }
    else{
        document.getElementById('denyNotify').style.display = 'block';
        printOutput('');
        let warning = document.getElementById('warning').innerText;
        warning -= 1;
        document.getElementById('warning').innerText = warning;
        if(warning == 0){
            document.getElementById('submitBtn').disabled = 'true';
            document.getElementById('submitBtn').style.backgroundColor = 'red';
            document.getElementById('denyNotify').style.display = 'none';
            document.getElementById('disableNotify').style.display = 'block';
        }
    }
    
})


const getOutput = ()=>{
    return document.getElementById('output').value;
}
const printOutput = num=>{
    document.getElementById('output').value= num;
}


const operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', ()=>{
        if (event.target.id == 'clear') {
            printOutput('');
            document.getElementById('denyNotify').style.display = 'none';
            document.getElementById('successNotify').style.display = 'none';
        }
        if (event.target.id == 'backspace') {
            let output = getOutput().toString();
            printOutput(output.substr(0, output.length - 1))
        }
    })   
}


const number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', ()=>{
        let output = getOutput();
        if (output != NaN){
            output = output+event.target.id;
            printOutput(output);
        }
    })   
}