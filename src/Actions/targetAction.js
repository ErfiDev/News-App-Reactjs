export function setTargetAction(value)
{
    return async (dispatch)=>{
        const data = value;

        await dispatch({type: "SET_TARGET" , payload: data});
    }
}

export function clearTargetAction()
{    
    return ({type: "CLEAR_TARGET"});   
}