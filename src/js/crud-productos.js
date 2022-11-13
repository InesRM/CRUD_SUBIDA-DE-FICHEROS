import '../styles.scss';

const urlProducts='https://fakestoreapi.com/products';

const obtenerCategorias=async()=>{
    const resp=await fetch(urlProducts);
    const data=await resp.json();
    const categorias=data.map(producto=>producto.category);
    const categoriasUnicas=[...new Set(categorias)];
    return categoriasUnicas;
}
const obtenerProductos=async()=>{
    const resp=await fetch(urlProducts);
    const data=await resp.json();
    const productos=data;
    return productos;
}

const crearProducto=async(product)=>{
 const resp=await fetch(urlProducts, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
 });
 return await resp.json();
}

const actualizarProducto=async(id,product)=>{
    const resp=await fetch(`${urlProducts}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(product),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    return await resp.json();
    }

const borrarProducto=async(id)=>{
    const resp=await fetch(`${urlProducts}/${id}`, {
        method: 'DELETE',      
    });
    return await resp.json();
    }


export{
    crearProducto,
    actualizarProducto,
    borrarProducto,
    obtenerProductos,
    obtenerCategorias
}