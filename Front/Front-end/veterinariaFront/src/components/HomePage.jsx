import { useEffect } from 'react';
import ProductoImagen from './ProductoImagen'
import img from '../assets/img/bienvenido.png'
import '../assets/style/estilos.css';
export default function HomePage() {
    useEffect(()=>{
        document.title = 'Veterinaria';
    })
    return (
        <div className='contenedor-img'>
            <ProductoImagen url={img} clase='ImgBienvenida'/>
        </div>
    )
}
