const $botoncito = document.querySelectorAll('.botoncito');
const $pizzarra = document.querySelector('.solucion');
const $btnComprobar = document.getElementById('btn-comprobar2');

const modalBad2 = document.querySelector('.modal-rojo2');
const modalGood2 = document.querySelector('.modal-verde2');




const pizarron = [];

export const pintando = () =>{
  for(let i = 0; i < $botoncito.length; i++){
    // selecionando el valor del boton
     $botoncito[i].addEventListener('click',()=>{
       pizarron.push($botoncito[i].value)
       console.log(pizarron)
       /*console.log(pizarron.length) 
        console.log($botoncito[i].name)
       console.log($botoncito[i])
      console.log($botoncito.length) */

       if($botoncito[i].name == 1){
         $pizzarra.innerHTML = $pizzarra.innerHTML + '<input class="prueba"  style="cursor:pointer;color:#ef4565;background-color:transparent;padding:.5rem;border:2px solid #fff;border-radius:15px;font-size:1.1rem;margin:.5rem;"class="botoncito1" type="button" value="<!DOCTYPE html>">'
         $botoncito[i].classList.toggle('deshabilitado');

        
       }
       if($botoncito[i].name == 4){
        $pizzarra.innerHTML = $pizzarra.innerHTML + '<input class="prueba" style="cursor:pointer;color:#ef4565;background-color:transparent;padding:.5rem;border:2px solid #fff;border-radius:15px;font-size:1.1rem;margin:.5rem;class="botoncito1" type="button" value="<body></body>">'
        $botoncito[i].classList.toggle('deshabilitado');
      }
      if($botoncito[i].name == 3){
        $pizzarra.innerHTML = $pizzarra.innerHTML + '<input class="prueba"style="cursor:pointer;color:#ef4565;background-color:transparent;padding:.5rem;border:2px solid #fff;border-radius:15px;font-size:1.1rem;margin:.5rem;class="botoncito1" type="button" value="<head></head>">'
        $botoncito[i].classList.toggle('deshabilitado');
      }
      if($botoncito[i].name == 2){
        $pizzarra.innerHTML = $pizzarra.innerHTML + '<input class="prueba"style="cursor:pointer;color:#ef4565;background-color:transparent;padding:.5rem;border:2px solid #fff;border-radius:15px;font-size:1.1rem;margin:.5rem;class="botoncito1" type="button" value="<html>">'
        $botoncito[i].classList.toggle('deshabilitado');
      }
      if($botoncito[i].name == 5){
        $pizzarra.innerHTML = $pizzarra.innerHTML + '<input class="prueba" name= "5"style="cursor:pointer;color:#ef4565;background-color:transparent;padding:.5rem;border:2px solid #fff;border-radius:15px;font-size:1.1rem;margin:.5rem;class="botoncito1" type="button" value="</html>"> '
        $botoncito[i].classList.toggle('deshabilitado');

      }
     
    const $botoncito1 = document.querySelectorAll('.prueba');
    const btn1 = Array.from($botoncito1);
    const borrando = ()=>{
      for(let i = 0; i < btn1.length; i++){
          btn1[i].addEventListener('click',()=>{
            btn1[i].style.display='none';
            if(btn1[i].defaultValue == "<!DOCTYPE html>"){
              $botoncito[0].classList.remove('deshabilitado')
            }
            if(btn1[i].defaultValue == "<body></body>"){
              $botoncito[1].classList.remove('deshabilitado')
            }
            if(btn1[i].defaultValue == "<head></head>"){
              $botoncito[2].classList.remove('deshabilitado')
            }
            if(btn1[i].defaultValue == "<html>"){
              $botoncito[3].classList.remove('deshabilitado')
            }
            if(btn1[i].defaultValue == "</html>"){
              $botoncito[4].classList.remove('deshabilitado')
            }
            pizarron.pop()
          })
      }
    }
    borrando()

    });  
     
  }
} 

export const comprobacion = () =>{
  //igualando los array
  $btnComprobar.addEventListener('click',(e)=>{
    e.preventDefault();  
    if(JSON.stringify(resultadoTrue) === JSON.stringify(pizarron)){
      modalGood2.classList.add('opacity');
      modalGood2.innerHTML = '<p style="margin-top:1rem;text-align:center;font-size:1rem">BUEN TRABAJO!!</p><p>FIN DEL JUEGO</p><div style="display:flex;justify-content:space-between;margin-bottom:1rem;width:100%"><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Home</a><a href="juego3.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Siguiente</a></div>';
    }else{
      modalBad2.classList.add('opacity');
      modalBad2.innerHTML = '<p style="color:#EF4565; margin-top:1rem;text-align:center;font-size:.8rem">La respuesta correcta es: DOCTYPE - html - head - body -/html </p><p style="color:#EF4565;">FIN DEL JUEGO</p><div style="display:flex;justify-content:space-between;margin-bottom:1rem;width:100%"><a href="home.html" style="color:#fff;background-color:#EF4565;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Home</a><a href="juego3.html" style="color:#fff;background-color:#2CB67D;padding:1rem;border-radius:15px;text-decoration:none;margin-top:1rem;width:100px;">Siguiente</a></div>';
    }
     

  });
} 


const resultadoTrue = ["<!DOCTYPE html>","<html>","<head></head>","<body> </body'>","</html>"];
