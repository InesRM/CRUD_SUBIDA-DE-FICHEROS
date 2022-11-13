const productosUrl='https://fakestoreapi.com/products';
const categoriasUrl='https://fakestoreapi.com/products/categories';

const obtenerProductos=async()=>{
    try{
    const respuesta=await fetch(productosUrl);
    if(!respuesta.ok) throw ('No se pudo obtener los productos');
    const datos=await respuesta.json();
    return datos; // devuelve todos los datos, se puede especificar solo algunos
    }catch(error){
        throw error;
    }
}
const obtenerCategorias=async()=>{
    try{
    const respuesta=await fetch(categoriasUrl);
    if(!respuesta.ok) throw ('No se pudo obtener las categorias');
    const datos=await respuesta.json();
    return datos; // devuelve todos los datos, se puede especificar solo algunos
    }catch(error){
        throw error;
    }
}

export {
    obtenerProductos,
    obtenerCategorias
}
