// Utility functions to handle cart and wish list in localStorage

// Cart Functions
const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
};

const addToStoredCartList = (id) => {
    const storedList = getStoredCartList();
    if (!storedList.includes(id)) {
        storedList.push(id);
        localStorage.setItem('cart-list', JSON.stringify(storedList));
    } else {
        console.log(id, 'already exists in the cart');
    }
};

const removeFromStoredCartList = (id) => {
    const storedList = getStoredCartList();
    const updatedList = storedList.filter(itemId => itemId !== id);
    localStorage.setItem('cart-list', JSON.stringify(updatedList));
};

const clearStoredCart = () => {
    localStorage.removeItem('cart-list');
};

// Wish List Functions
const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }
    return [];
};

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (!storedWishList.includes(id)) {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
    } else {
        console.log(id, 'already exists in the wish list');
    }
};

const removeFromStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    const updatedList = storedWishList.filter(itemId => itemId !== id);
    localStorage.setItem('wish-list', JSON.stringify(updatedList));
};

export {
    getStoredCartList,
    addToStoredCartList,
    removeFromStoredCartList,
    clearStoredCart,
    getStoredWishList,
    addToStoredWishList,
    removeFromStoredWishList
};
