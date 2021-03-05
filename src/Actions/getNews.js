import service from '../services/httpService';

const getNewsAction = ()=>{
    return async (dispatch , getState)=>{
        const value = getState().input;
        const url = `https://newsapi.org/v2/everything?q=${value}&apiKey=ef2bb3c2614b45b9be62bd52f005c85f`;
        const response = await service.get(url);
        const {data} = await response;

        await dispatch({type: "GET_NEWS" , payload: {data}})
    }
}

export default getNewsAction;