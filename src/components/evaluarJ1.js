//Obteniendo valor del boton radio
const respuesta1 = document.querySelectorAll('.radio-juego');
const btnComprobar = document.querySelector('#btn-juego1');
const btnComprobar2 = document.querySelector('#btn-juego2');
const btnComprobar3 = document.querySelector('#btn-juego3');
const modalGood = document.querySelector('.modal-verde');
const modalBad = document.querySelector('.modal-rojo');
const btnRed = document.getElementById('btn-rojo');
const btnGreen = document.getElementById('btn-verde');
const preguntaUno = document.getElementById('container-p1');
const preguntaDos = document.getElementById('container-p2');
const preguntaTres = document.getElementById('container-p3');

export const res = () => {
  for(let i = 0; i < respuesta1.length; i++){
    respuesta1[i].addEventListener('click',()=>{
      respuesta1[i].value
       btnComprobar.value = respuesta1[i].value;
       btnComprobar2.value = respuesta1[i].value;
       btnComprobar3.value = respuesta1[i].value;
      
    });
    btnComprobar.addEventListener('click',(e)=>{
      e.preventDefault();   
      if(btnComprobar.value === 'main'){
        modalGood.classList.add('opacity');
      }else{
        modalBad.classList.add('opacity');
      }
    });
    btnComprobar2.addEventListener('click',(e)=>{
      e.preventDefault();   
      if(btnComprobar2.value === 'script'){
        modalGood.classList.add('opacity');
      }else{
        modalBad.classList.add('opacity');
      }
    });
    btnComprobar3.addEventListener('click',(e)=>{
      e.preventDefault();   

      if(btnComprobar3.value === 'Dontrepeatyourself'){
        modalGood.classList.add('opacity');
      }else{
        modalBad.classList.add('opacity');
      }
    });
  }
}
  
export const closeModal = ()=>{
  btnRed.addEventListener('click',()=>{
    modalBad.classList.remove('opacity');
    
    if(preguntaUno.classList[1] === 'display'){
      preguntaDos.classList.add('display');
      preguntaUno.classList.remove('display');
    }else if(preguntaDos.classList[1] === 'display'){
      preguntaDos.classList.remove('display');
      preguntaTres.classList.add('display');
    }else if(preguntaTres.classList[1]==='display'){
      preguntaTres.innerHTML = '<p style="color:#fff;">FIN DEL JUEGO</p><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">CONTINUAR</a>';
    }

  });

  btnGreen.addEventListener('click',()=>{
    modalGood.classList.remove('opacity');
    
    if(preguntaUno.classList[1] === 'display'){
      preguntaDos.classList.add('display');
      preguntaUno.classList.remove('display');
    }else if(preguntaDos.classList[1] === 'display'){
      preguntaDos.classList.remove('display');
      preguntaTres.classList.add('display');
    }else if(preguntaTres.classList[1]==='display'){
      preguntaTres.innerHTML = '<p style="color:#fff;">FIN DEL JUEGO</p><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">CONTINUAR</a>';
    }
  });
}
