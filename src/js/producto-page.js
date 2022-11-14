
import { obtenerProductos } from "./crud-productos";

const body = document.body;
let tBody;
let num = 0;

const crearHtml = () => {
    const html = `
    <h1 class="mt-5">CRUD - API</h1>
    <hr>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Imagen</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);
    tBody = document.querySelector('tbody');
}
//Los botones no tienen funcionalidad, aún....
const crearFilaProducto = (producto) => {
    const html = `
    <th scope="row">${num}</th>
    <td>${producto.title}</td>
    <td>${producto.price}</td>
    <td><img src="${producto.image}" class="img-thumbnail"></td>
    <td>
        <button class="editar">Editar</button> 
        <button class="borrar">Borrar</button>
    </td>
    `;
    const tr = document.createElement('tr');
    tr.innerHTML = html;
    tBody.appendChild(tr);
}
export const init = async () => {
    crearHtml();
    const productos = await obtenerProductos();
    productos.forEach(producto => {
        num++;
        crearFilaProducto(producto);
    });

}


