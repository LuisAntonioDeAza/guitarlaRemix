export async function getGuitar(){
    const respuesta =  await fetch('http://192.168.2.75:1337/api/guitarras?populate=imagen');
    return  await respuesta.json();
   
}

export async function getGuita(url){
    const respuesta = await fetch(`http://192.168.2.75:1337/api/guitarras?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}