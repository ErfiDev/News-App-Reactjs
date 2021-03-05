function inputReducer(state = "" , action)
{
    switch(action.type)
    {
        case "CHANGED":
            return action.payload;

        default: return state
    }
}

export default inputReducer;