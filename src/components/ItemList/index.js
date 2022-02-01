import React, {useMemo} from 'react';
import {useFetchItems} from './hooks/useFetchItems';
import {listTree} from '../../utils/listTree';
import './itemList.css';

export const ItemList = () => {
    const {loading, error, items} = useFetchItems();
    const tree = useMemo(() => listTree(items), [items]);
    const renderMemo = useMemo(() => renderTreeJSX(tree), [tree]);

    function renderTreeJSX(arr) {
        const recursive = (el) => el.children
            ? <ul className="list">
                {renderTreeJSX(el.children)}
            </ul>
            : null;

        return arr.map(el => {
            return <li key={el.id} className="list__item">
                <span className="list__label">{el.label}</span>
                {recursive(el)}
            </li>;
        });
    }

    if (loading) {
        return <p> Loading ...</p>;
    }

    if (error.message) {
        return <p> Error: {error.message}</p>;
    }

    return (
        <ul className="list">
            {renderMemo}
        </ul>
    );
};
