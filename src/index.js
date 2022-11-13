import * as CRUD from './js/crud-productos';
import { obtenerProductos } from './js/http-provider';
import * as init from './js/producto-page';



CRUD.obtenerProductos().then(console.log);
CRUD.crearProducto({
    title: 'Nuevo producto',
    price: 500,
    image: 'https://picsum.photos/50/100',
}).then(console.log);

CRUD.actualizarProducto(1, {
    title: 'Producto actualizado',
    price: 500,
    image: 'https://picsum.photos/50/100',
}).then(console.log);


CRUD.borrarProducto(2).then(console.log);
   

obtenerProductos().then(console.log);
init.init();