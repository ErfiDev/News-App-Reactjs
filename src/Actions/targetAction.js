export function setTargetAction(e)
{
    return async (dispatch , getState) => {
        const value = e;
        const data = getState().enArticle;
        const filter = data.filter(item => item._id === value);


        await dispatch({type: "SET_TARGET" , payload: filter});
    }
}

export function clearTargetAction()
{    
    return ({type: "CLEAR_TARGET"});   
}