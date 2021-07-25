//Variables
const $btnComprobar = document.querySelector('.btn-comprobar3');
const radioRespuesta = document.querySelectorAll('.r-radio');
const $modalGood3 = document.querySelector('.modal-verde3'),
      $modalBad3 = document.querySelector('.modal-rojo3');
const $progress3 = document.querySelector('.progress3');
const $vida = document.querySelector('.vida');

//variable contador de vida
let vida = parseInt($vida.textContent);


export const solucion = ()=>{
 //seleccionando radio 
  radioRespuesta.forEach( btn => 
    btn.addEventListener('click',()=>{
      //habilitando boton para comparar
      $btnComprobar.disabled = false;
      $btnComprobar.style.background="#6B47DC";

      //comparando valor del radio con la respues correcta
      $btnComprobar.addEventListener('click',()=>{
        if(btn.value === 'vue'){
          $modalGood3.classList.add('opacity');
          
          //valorando el progreso
          $progress3.value= 100;
          
        }else{
          //descontando vida
          vida --;
          $modalBad3.classList.add('opacity');
          $modalBad3.innerHTML = '<p style="color:#EF4565; margin-top:1rem;text-align:center;font-size:.8rem">La respuesta correcta es: Vue.js </p><p style="color:#EF4565;">FIN DEL JUEGO</p><div style="display:flex;justify-content:space-between;margin-bottom:1rem;width:100%"><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Home</a><a href="juego3.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Siguiente</a></div>';
          $vida.innerHTML = vida;
        };

      });

    }));

};

