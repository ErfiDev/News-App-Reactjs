function Target(state = [] , action) {
    switch(action.type) 
    {
        case "SET_TARGET":
            return action.payload;

        case "CLEAR_TARGET":
            return state = [];

        default: return state;
    }
}

export default Target;