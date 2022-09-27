import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { obtenerUsuariosAccion } from "./redux/userDucks"

const ListaDeUsuariosRedux = () => {
  const dispatch = useDispatch()

  const usuarios = useSelector(store => store.usuarios.array)
    console.log(usuarios)

  return (
    <div>
            listaDeUsuariosRedux
            <button onClick={() => dispatch(obtenerUsuariosAccion())}>Get usuarios</button>
    </div>
  )
}

export default ListaDeUsuariosRedux