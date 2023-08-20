import React, {useState, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Al agregar "Fragment" en la importacion nos permite evitar utilizar "div padre" utilizable en nuestro return.

// Con const Contador = () => se le denomina funcion de flecha.

// Inicio de nuestro  hook contador

const Contador = () =>{
    const [numero, setNumero] = useState(0);// setNumero permitirá modificar el estado "numero"

    const aumnetar = () =>{
        setNumero(numero + 1)
    }

    const disminuir = () =>{
        setNumero(numero-1)
    }
      // Fin de nuestro hook contador

    return(
        <Fragment>
            <h2>Agregar al carrito { numero }</h2>
            {/* {Aqui llamamos al metodo que creamos} */}
            <button type="button" class="btn btn-success" onClick={aumnetar}>Aumentar</button>
            <button type="button" class="btn btn-danger" onClick={disminuir}>Disminuir</button>
        </Fragment>
    )
}
 export default Contador;