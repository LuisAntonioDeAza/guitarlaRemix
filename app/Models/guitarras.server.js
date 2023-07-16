export async function getGuitar(){
    const respuesta =  await fetch('http://192.168.2.75:1337/api/guitarras?populate=imagen');
    return  await respuesta.json();
   
}

export async function getGuita(url){
    const respuesta = await fetch(`https://strapi-70ig.onrender.com/api/guitarras?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}


export async function getPost(){
    const respuesta =  await fetch('https://strapi-70ig.onrender.com/api/blogs?populate=imagen');
    return  await respuesta.json();
   
}

export async function getposts(url){
    console.log(url);
    const respuesta = await fetch(`https://strapi-70ig.onrender.com/api/blogs?filters[url]=${url}&populate=imagen`);
    return await respuesta.json();
}

export async function getCourse(){
    const respuesta =  await fetch('https://strapi-70ig.onrender.com/api/curso?populate=imagen');
    return  await respuesta.json();
   
}

