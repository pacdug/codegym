function addition(){
    const sothu1 = document.getElementById('sothu1').value;
    const sothu2 = document.getElementById('sothu2').value;
    const add= (sothu1 + sothu2).toFixed(2);
    document.getElementById('result').innerText = "kết quả : " + add ;
}

function subtraction(){
    const sothu1 = document.getElementById('sothu1').value;
    const sothu2 = document.getElementById('sothu2').value;
    const sub = (sothu1 - sothu2).toFixed(2);
    document.getElementById('result').innertext = "kết quả : " + sub;
}

function multiplication(){
    const sothu1 = document.getElementById('sothu1').value;
    const sothu2 = document.getElementById('sothu2').value;
    const mul= (sothu1 * sothu2).toFixed(2);
    document.getElementById('result').innertext = "kết quả : " + mul;
}

function division(){
    const sothu1 = document.getElementById('sothu1').value;
    const sothu2 = document.getElementById('sothu2').value;
    const divis= (sothu1 / sothu2).toFixed(2);
    document.getElementById('result').innerText =  "kết quả : " + divis ;
}
