import service from '../services/httpService';
import {toast} from 'react-toastify';

const getNewsAction = ()=>{
    return async (dispatch , getState)=>{
        try{
            const value = getState().input;
            const url = `https://newsapi.org/v2/everything?q=${value}&apiKey=ef2bb3c2614b45b9be62bd52f005c85f`;
            const response = await service.get(url);
            const {data} = await response;
            const {articles} = await data;
            await dispatch({type: "GET_NEWS" , payload: {data}})
            await dispatch({type: "GET_ARTICLE" , payload: articles});
        }
        catch(err)
        {
            toast.error("Please check your network!" , {
                closeOnClick: true,
                position: "bottom-left"
            });
        }
    }
}

export default getNewsAction;