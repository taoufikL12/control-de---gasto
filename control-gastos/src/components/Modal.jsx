import { useState } from 'react'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

        const ocultarModal = () => {

          
            setAnimarModal(false)

            setTimeout(()=> {
                setModal(false)
            },500);
        }

  return (
    <div className="modal">
        
        <div className="cerrar-modal">

            <img

                src={CerrarBtn}
                alt="cerrar modal"
                onClick={ocultarModal}

            />

        </div>


        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>

        <legend>Nuevo Gasto</legend>

        <div className="campo">

            <label htmlFor="nombre">Nombre de Gasto</label>
            
            <input
            
            id="nombre"
            type="text"
            placeholder="Añade la cantidad del gasto"
            value={nombre}
            oneChange={ e => setNombre(e.target.velue)}
            />

        </div>

        <div className="campo">

            <label htmlFor="cantidad">Cantidad</label>
            
            <input
            
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={cantidad}
            oneChange={ e => setCantidad(Number(e.target.velue))}
            
            />

        </div>


        <div className="campo">

<label htmlFor="cantidad">Categoria</label>

    <select
    
    id="categoria"
    value={categoria}
    oneChange={ e => setCategoria(e.target.velue)}
    

    
    >

    <option value="">-- Seleccion --</option>
    <option value="ahorro">Ahorro</option>
    <option value="comida">Comida</option>
    <option value="casa">Casa</option>
    <option value="gastos">Gastos Varios</option>
    <option value="Ocio">Ocio</option>
    <option value="Salud">Salud</option>
    <option value="Suscripciones">Suscripciones</option>

        
    </select>



</div>

    <input

    type="submit"
    Value="Añadir Gasto"

    />

        </form>

    </div>
  )
}

export default Modal