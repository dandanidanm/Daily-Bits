import * as LocalStorage from "../commons/localStorage.js";

//Obteniendo valor del boton radio
const respuesta1 = document.querySelectorAll('.radio-juego');

//boton para comprarar las preguntas
const btnComprobar = document.querySelector('#btn-juego1');
const btnComprobar2 = document.querySelector('#btn-juego2');
const btnComprobar3 = document.querySelector('#btn-juego3');

//modal de respuesta
const modalGood = document.querySelector('.modal-verde');
const modalBad = document.querySelector('.modal-rojo');

//botones de los modales
const btnRed = document.getElementById('btn-rojo');
const btnGreen = document.getElementById('btn-verde');

//seccion de preguntas
const preguntaUno = document.getElementById('container-p1');
const preguntaDos = document.getElementById('container-p2');
const preguntaTres = document.getElementById('container-p3');

//parrafo del modal con solucion
const ok = document.getElementById('respuesta-ok');

const $progress = document.querySelector('.progress');

const vidas = document.querySelector('.vida');

const restarVida = () => {
  let vidaActual = parseInt(vidas.textContent);
  if(vidaActual >= 1)
    vidaActual --;

  if(vidaActual <= 0) {
    LocalStorage.limpiarStorage();
    window.location.reload();
  }

  LocalStorage.guardarUserLife({
    vida: vidaActual
  });

  vidas.innerHTML = `${vidaActual}`;
};

export const checkLocalData = () => {
  let vidasDeUsuario = LocalStorage.traVidaUsuario();
  if(!vidasDeUsuario.vida)
    vidasDeUsuario.vida = 4;

  vidas.innerHTML = `${vidasDeUsuario.vida}`;
}

//obteniendo comparacion del radio y la respuesta correcta
export const res = () => {
  for(let i = 0; i < respuesta1.length; i++){
    respuesta1[i].addEventListener('click',()=>{
        
        
      btnComprobar.value = respuesta1[i].value
      btnComprobar.disabled = false;
      btnComprobar.style.background="#6B47DC";
          

      btnComprobar2.value = respuesta1[i].value;
      btnComprobar2.disabled = false;
  


      btnComprobar3.value = respuesta1[i].value;
      btnComprobar3.disabled = false;
    });
  }

  //igualando el boton comparar con el radio correcto
  btnComprobar.addEventListener('click',(e)=>{
    e.preventDefault();
    if(btnComprobar.value === 'main'){
      modalGood.classList.add('opacity');
      //valorando el progreso
      $progress.value= $progress.value + 20;
    }else{
      restarVida();
      modalBad.classList.add('opacity');
      ok.innerHTML = '<p style="color:#EF4565; margin:1rem;text-align:center;">La respuesta correcta es: Main </p>';
    }
  });

  btnComprobar2.addEventListener('click',(e)=>{
    e.preventDefault();
    if(btnComprobar2.value === 'script'){
      modalGood.classList.add('opacity');
      //valorando el progreso
      $progress.value= $progress.value + 20;
    }else{
      restarVida();
      modalBad.classList.add('opacity');
      ok.innerHTML = '<p style="color:#EF4565; margin:1rem;text-align:center;">La respuesta correcta es: Script </p>';
    }
  });

  btnComprobar3.addEventListener('click',(e)=>{
    e.preventDefault();

    if(btnComprobar3.value === 'Dontrepeatyourself'){
      modalGood.classList.add('opacity');
      //valorando el progreso
      $progress.value= $progress.value + 20;
    }else{
      restarVida();
      modalBad.classList.add('opacity');
      ok.innerHTML = '<p style="color:#EF4565; margin:1rem;text-align:center;">La respuesta correcta es: Dont repeat yourself</p>';
    }
  });
}

//boton para cerrando modal
export const closeModal = ()=>{
  btnRed.addEventListener('click',(e)=>{
    e.preventDefault();
    modalBad.classList.remove('opacity');

    if(preguntaUno.classList[1] === 'display'){
      preguntaDos.classList.add('display');
      preguntaUno.classList.remove('display');
    }else if(preguntaDos.classList[1] === 'display'){
      preguntaDos.classList.remove('display');
      preguntaTres.classList.add('display');
    }else if(preguntaTres.classList[1]==='display'){
      preguntaTres.innerHTML = '<p style="color:#fff;">FIN DEL JUEGO </p><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">Home</a><a href="juego2.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">Siguiente</a>';
    }

  });


  btnGreen.addEventListener('click',()=>{
    modalGood.classList.remove('opacity')

    if(preguntaUno.classList[1] === 'display'){
      preguntaDos.classList.add('display');
      preguntaUno.classList.remove('display');
    }else if(preguntaDos.classList[1] === 'display'){
      preguntaDos.classList.remove('display');
      preguntaTres.classList.add('display');
    }else if(preguntaTres.classList[1]==='display'){
      preguntaTres.innerHTML = '<p style="color:#fff;">FIN DEL JUEGO</p><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">Home</a><a href="juego2.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:2rem;">Siguiente</a>';
    }
  });
}
