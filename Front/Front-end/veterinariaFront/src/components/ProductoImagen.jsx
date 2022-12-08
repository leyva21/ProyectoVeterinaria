export default function ProductoImagen(props) {
    return (
        <div className='contenedor-img'>
            <img  src={props.url} alt={'Imagen de nuestro producto'} className={props.clase}/>
        </div>
    )
}
