import * as CRUD from './js/crud-productos';
import { obtenerCategorias } from './js/http-provider';
import {ProductoHtml} from './js/crud-productos';

CRUD.obtenerProductos().then(console.log);
CRUD.crearProducto({
    title: 'Nuevo producto',
    price: 500,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
}).then(console.log);

CRUD.actualizarProducto(2, {
    title: 'Producto actualizado',
    price: 500,
    thumbnail: 'https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png',
}).then(console.log);

CRUD.borrarProducto(2).then(console.log);

export const init=async()=>{
    const producto=await CRUD.obtenerProductos();
    console.log(producto);
    ProductoHtml();
}