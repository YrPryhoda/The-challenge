export const listTree = (arr) => {
    const clonedList = JSON.parse(JSON.stringify(arr));

    const findRecursive = (arr, parentId) => {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id === parentId) {
                return arr[i];
            }
            if (arr[i].children) {
                return findRecursive(arr[i].children, parentId);
            }
        }
    };

    return clonedList.reduce((total, current) => {
        if (!current.parent_id) {
            total.push(current);
            return total;
        }

        const item = findRecursive(total, current.parent_id);
        item.children = [...(item.children || []), current];
        return total;
    }, []);
};
