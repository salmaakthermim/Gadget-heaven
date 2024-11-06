const getStoredAdd = () => {
    const stordListStr = localStorage.getItem('card-list');
    if (stordListStr) {
        const storedList = JSON.parse(stordListStr);
        return storedList;
    }
    else {
        return [];
    }
}
const addToStored = (product_id) => {
    const storedList = getStoredAdd();
    if (storedList.includes(product_id)) {
        console.log(product_id, 'already exists in the card list')
    }
    else {
        storedList.push(product_id);
        const stordListStr = JSON.stringify(storedList);
        localStorage.setItem('card-list', stordListStr);
    }
}
const getStoredWishList = () => {
    // read-list
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (product_id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(product_id)) {
        // already exists. do not add it
        console.log(product_id, 'already exists in the wish list')
    }
    else {
        storedWishList.push(product_id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export { addToStored, addToStoredWishList,getStoredAdd }