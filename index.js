const randomNumber = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;
let resultado = document.querySelector('.resultado');
let displayTentativas =  document.querySelector('.tentativas');


function num()
{
let userPalpite = parseInt(document.querySelector('.palpite').value);
if(userPalpite < 0 || userPalpite > 100 || isNaN(userPalpite))  return;
tentativas--;
displayTentativas.innerHTML = tentativas;
verificacao(userPalpite);
}


function verificacao(userPalpite)
{
    
  if(tentativas == 0) 
    {
    resultado.innerHTML = 'Números de tentativas excedido';
    document.querySelector('.palpite').disabled = true;
    document.querySelector('.btn-class-name').style.pointerEvents = 'none'; 
    return;
    }
    
    
    if (userPalpite === randomNumber)
    {
       resultado.innerHTML = 'Palpite correto! Parabens!';
       document.querySelector('.palpite').disabled = true;
       document.querySelector('.btn-class-name').disabled = true; 
       document.querySelector('.btn-class-name').style.pointerEvents = 'none';  
       return;
    }
    
    else if(userPalpite != randomNumber)
    {
       if(userPalpite > randomNumber) resultado.innerHTML = 'Palpite <span class="red">Incorreto</span>! O número é menor!';
       else resultado.innerHTML = 'Palpite <span class="red">Incorreto</span>! O número é maior!';
    }
}