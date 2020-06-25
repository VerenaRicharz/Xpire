import Dexie from 'dexie'

const db = new Dexie('Xpire');
db.version(1).stores({
    products: "++id,name,amount,purchaseDate,expireDate"
});

export const addProduct = async (name, amount, purchaseDate, expireDate) => {
    await db.products.add({
        name: name,
        amount: amount,
        purchaseDate: purchaseDate,
        expireDate: expireDate
    });
    return await db.products.toArray().then(function (arr) {
        return arr;
    });
}

export const clearTable = async (tableName) => {
    await db.table(tableName).clear().catch(() => {
        console.log('scheise')
    })
}

export const deleteProductById = async (theId) => {
    await db.products.where('id').equals(theId).delete()
}

export const getProductById = async (id) => {
    return await db.products.where('id').equals(id);
}

export const getAllProducts = async () => {
    return await db.products.toArray().then(function (arr) {
        // console.log(arr);
        return arr;
    }).catch((err) => {
        return console.log(err)
    })
}

export const createDatabase = async () => {
    const db = new Dexie('Xpire');
    db.version(1).stores({
        products: "++id,name,amount,purchaseDate,expireDate"
    });
}