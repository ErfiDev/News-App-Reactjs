function inputAction(e)
{
    let value = e.target.value;

    return {type: "CHANGED" , payload: value}
}

export default inputAction;