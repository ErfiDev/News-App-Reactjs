import React,{Fragment} from 'react';

import Header from './Components/header/header';
import News from './Components/news/index';
class App extends React.Component
{
    render()
    {
        return(
            <Fragment>
                <Header />
                <News />
            </Fragment>
        );
    }
}

export default App;