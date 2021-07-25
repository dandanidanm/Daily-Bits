function guardar (name,item){
  try {
    if(typeof item === "object" || Array.isArray(item)){
      window.localStorage.setItem(name,JSON.stringify(item))
    } else {
      throw new Error('Invalid item for save on local storage')
    }
  } catch (error) {
    return {}
  }
}

function traer(name){
  try {
    const localItem = window.localStorage.getItem(name)
    const dataParse = JSON.parse(localItem);

    let defaultData = {};

    if(dataParse)
      defaultData = dataParse;

    return defaultData;
  } catch (error) {
    return {}
  }
}

export function limpiarStorage(){
  window.localStorage.clear();
}

export const guardarUserLife = item => guardar('@app/usuarioVida', item);
export const guardarUserResponses = item => {
  const respuestasUsuarios = traerRespuestaUsuario();

  guardar('@app/usuarioRespuestas', {
    ...respuestasUsuarios,
    ...item,
  });
};

export const traVidaUsuario = () => traer('@app/usuarioVida');
export const traerRespuestaUsuario = () => traer('@app/usuarioRespuestas');

