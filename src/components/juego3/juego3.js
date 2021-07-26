//Variables
import * as LocalStorage from "../commons/localStorage.js";

const $btnComprobar = document.querySelector('.btn-comprobar3');
const radioRespuesta = document.querySelectorAll('.r-radio');
const $modalGood3 = document.querySelector('.modal-verde3'),
      $modalBad3 = document.querySelector('.modal-rojo3');
const $progress = document.querySelector('.progress');
const $vida = document.querySelector('.vida');

const restarVida = () => {
  let vidaActual = parseInt($vida.textContent);
  if(vidaActual >= 1)
    vidaActual --;

  if(vidaActual <= 0) {
    LocalStorage.limpiarStorage();
    window.location.reload();
  }

  LocalStorage.guardarUserLife({
    vida: vidaActual
  });

  $vida.innerHTML = `${vidaActual}`;
};

export const checkLocalData = () => {
  let vidasDeUsuario = LocalStorage.traVidaUsuario();

  if(!vidasDeUsuario.vida)
    vidasDeUsuario.vida = 4;

  $vida.innerHTML = `${vidasDeUsuario.vida}`;
}


export const solucion = ()=>{

  let botonSelecionado = {
    value: null
  };

 //seleccionando radio
  radioRespuesta.forEach( btn =>
    btn.addEventListener('click',()=>{
      //habilitando boton para comparar
      $btnComprobar.disabled = false;
      $btnComprobar.style.background="#6B47DC";
      botonSelecionado = btn;
    }));

  //comparando valor del radio con la respues correcta
  $btnComprobar.addEventListener('click',()=>{
    if(botonSelecionado.value === 'vue'){
      $modalGood3.classList.add('opacity');

      //valorando el progreso
      $progress.value= $progress.value + 20;

      $btnComprobar.style.display = 'none'
    }else{
      //descontando vida
      restarVida();
      $modalBad3.classList.add('opacity');
      $modalBad3.innerHTML = '<p style="color:#EF4565; margin-top:1rem;text-align:center;font-size:.8rem">La respuesta correcta es: Vue.js </p><p style="color:#EF4565;">FIN DEL JUEGO</p><div style="display:flex;justify-content:space-between;margin-bottom:1rem;width:100%"><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Home</a><a href="juego3.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Siguiente</a></div>';
    };
  });

};

