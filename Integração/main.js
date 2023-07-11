const form = document.getElementById('form-exercicio');

let formValid = false;

function numbervalid (CampoA, CampoB){
    return CampoB > CampoA;
}

form.addEventListener('submit', function(e){
    e.preventDefault(); //previne carregamento da página após "submit"
    let ValA = parseFloat(document.getElementById('valor-a').value);
    let ValB = parseFloat(document.getElementById('valor-b').value);

    const messagesucess = '<b>Parabéns ! "Valor A" menor que "Valor B"!</b>';
    const containermessagesucess = document.querySelector('.success-message');
    
    formValid = numbervalid(ValA, ValB);
    
    if (formValid){
        document.querySelector('.error-message').style.display = 'none';
        containermessagesucess.innerHTML = messagesucess;
        containermessagesucess.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';

        ValA.value = '';
        ValB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        containermessagesucess.style.display = 'none';
    }    
})
