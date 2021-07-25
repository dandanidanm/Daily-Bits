
export function save (name,item){
  try {

    if(typeof item !== "object" || !Array.isArray(item)){
      throw new Error('Invalid item for save onlocalStorage')
    }
    
    window.localStorage.setItem(name,JSON.stringify(item))

  } catch (error) {
    return {}
  }
}


export function get (name){
  try {

    if(typeof item !== "object" || !Array.isArray(item)){
      throw new Error('Invalid item for save onlocalStorage')
    }
    
    window.localStorage.setItem(name,JSON.stringify(item))

  } catch (error) {
    return {}
  }
}