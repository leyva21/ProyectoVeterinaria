import { useState,useEffect } from 'react';
import '../../assets/style/estilos.css';
import TablaMascota from './TablaMascota';
import MascotaCDuenio from './MascotaCDuenio';
import DeleteM from './DeleteM';
import AddMascota from './AddMascota';
import ActualizarM from './ActualizarM';
import BuscarM from './BuscarM';
export default function MenuPrincipalM() {
    const [mascotas, setMascotas] = useState(null);
    const [mascota,setMascota] = useState(null);
    const [estado,setEstado] = useState(1);
    useEffect(()=>{
        obtenerMascotas();
    },[])
    const obtenerMascotas = async () => {
        const dato = await fetch('http://localhost:9998/listMascotas',{
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
                'Content-Type': 'application/json',
            }
        });
        const mascotaA = await dato.json();
        setMascotas(mascotaA);
    }
    return (
        <div className="tabla">
            {mascotas!==null && <TablaMascota mascotas ={mascotas} onMascotaChange={setMascota} onChangeEstado={setEstado} estado={estado}/>}
            {estado===1 && <MascotaCDuenio mascota={mascota}/>}
            {estado===3 && <DeleteM mascota={mascota} onMascotasChange={setMascotas}/>}
            <div className="contenedor">
                {estado===2 && <AddMascota mascotas={mascotas} onMascotasChange={setMascotas}/>}
                {estado===2 && <ActualizarM onMascotasChange={setMascotas}/>}
                {estado===2 && <BuscarM onMascotasChange={setMascotas}/>}
            </div>
        </div>
    )
}
