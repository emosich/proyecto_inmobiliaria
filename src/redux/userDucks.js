import axios from "axios";


// constantes
const dataInicial = {
    array : []
}

const dataInicial2 = {
    array : []
}

// types
const OBTENER_USUARIOS_EXITO = "OBTENER_USUARIOS_EXITO";
const ELIMINAR_USUARIOS_EXITO = "ELIMINAR_USUARIOS_EXITO";

// reducer
export function userReducer(state = dataInicial, action) {
    switch(action.type){
        case OBTENER_USUARIOS_EXITO:
            return {...state, array: action.payload}
        default:
            return state
        
    };
};

export function userDeleteReducer(state = dataInicial2, action) {
    switch(action.type){
        case ELIMINAR_USUARIOS_EXITO:
            return {...state, array: action.payload}
        default: return state
    };
};


// acciones
export const obtenerUsuariosAccion = () => async (dispatch, getState) => {
    try{
        const res = await axios.get("http://localhost:3001/api/user/admusers")
        dispatch({
            type: OBTENER_USUARIOS_EXITO,
            payload: res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const eliminarUsuariosAccion = (id) => async (dispatch, getState) => {
    try {
        const res = await axios.delete(`http://localhost:3001/api/user/edituser/${id}`)
        .then((res) => alert("usuario eliminado"))
        dispatch({
            type: ELIMINAR_USUARIOS_EXITO,
            payload: res.data
            
        })

    } catch (error) {
        console.log(error)
    }
}
