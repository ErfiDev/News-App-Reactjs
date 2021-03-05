import newsApi from '../services/NewsService';

const getNewsAction = ()=>{
    return async (getDispatch , getStore)=>{
        const response = await newsApi();

        console.log(response);
    }
}

export default getNewsAction;