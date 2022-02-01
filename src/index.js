import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {store} from './store/configureStore';
import {ItemList} from './components/ItemList';

render(
    <Provider store={store}>
        <ItemList/>
    </Provider>,
    document.getElementById('app')
);
