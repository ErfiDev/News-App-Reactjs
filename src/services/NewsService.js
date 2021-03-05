import config from './service.json';
import Service from './httpService';

function getNewsApi ()
{
    return Service.get(config.url);
}

export default getNewsApi;