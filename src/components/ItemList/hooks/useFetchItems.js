import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchItems} from '../../../actions/items';
import {selectItems} from '../../../reducers/items';

export const useFetchItems = () => {
    const dispatch = useDispatch();
    const {loading, items, error} = useSelector(selectItems);

    useEffect(() => {
        dispatch(fetchItems());
    }, []);

    return {
        loading,
        items,
        error
    };
};
