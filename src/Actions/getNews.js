import service from '../services/httpService';
import {toast} from 'react-toastify';
import {v4 as uuidv4} from 'uuid';

export const getNewsAction = ()=>{
    return async (dispatch , getState)=>{
        try{
            const value = getState().input;
            const getNowDate = getNowTime();
            const url = `https://newsapi.org/v2/everything?q=${value}&from=${getNowDate}&sortBy=popularity&apiKey=ef2bb3c2614b45b9be62bd52f005c85f&language=en&pageSize=40`;
            const response = await service.get(url);
            const {data} = await response;
            const {articles} = await data;
            await dispatch(getEnArticle(articles));
        }
        catch(err)
        {
            toast.error("Please check your network!" , {
                closeOnClick: true,
                position: "bottom-left"
            });
        }
    }
};


function getNowTime(){
    Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1;
        var dd = this.getDate();
 
        return [this.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
               ].join('-');
      };
      var date = new Date();
      return date.yyyymmdd()
}


export const getEnArticle = (article)=>{
    return async dispatch =>{
        const Copy = [...article];

        let finnaly = [];
        for(let i = 0; i < article.length; i++)
        {
            finnaly.push({
                _id: uuidv4(),
                source: Copy[i]
            });
        }

        await dispatch({type: "SET" , payload: finnaly});
    }
}
