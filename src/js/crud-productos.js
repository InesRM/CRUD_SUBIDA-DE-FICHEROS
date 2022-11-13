
import {ProductoHtml} from "./crud-productos";
const urlProducts='https://fakestoreapi.com/products';

// const ProductoHtml=async(product)=>{
// const html=`
// <div class="card">
//     <img src="${product.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${product.title}</h5>
//         <p class="card-text">${product.description}</p>
//         <p class="card-text">$${product.price}</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>
// `;
// }

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
    return (resp.ok) ? 'Borrado' : 'No se pudo eliminar';
    }


export{
    ProductoHtml,
    crearProducto,
    actualizarProducto,
    borrarProducto,
    obtenerProductos,
    obtenerCategorias
}