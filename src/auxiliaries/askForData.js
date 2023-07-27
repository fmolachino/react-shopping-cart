import data from "../data/products.json";

export const askData = () => {
    return new Promise((resolve, rejected) => {
        setTimeout( () => {
            resolve(data);
        }, 500)
    })
}

export const askItemFromId = (id) => {
    return new Promise((resolve, rejected) => {

        const item = data.find((element) => element.id === id);

        if(item) {
            resolve(item);
        } else {
            rejected({
                error: "Product didn't find"
            })
        }

    })
}