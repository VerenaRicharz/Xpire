import React, { useState, useEffect } from 'react'
import { addProduct, deleteProductById, clearTable, getAllProducts, updateProductById, getProductById } from './Idb'
import axios from 'axios'
import { downloadFile } from './File';

function IdbTest() {
    //component for testing the IDB
    const [allProducts, setProducts] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            await getAllProducts().then((arr) => {
                setProducts(arr)
            })
        }
        fetch();
    })

    const handleAdd = async () => {
        await addProduct('Test', 'Test', 'Test', '22.02.2022').then((arr) => {
            setProducts(arr);
        })
    }

    const handleDelete = async (id) => {
        await deleteProductById(id)
    }

    const handleClear = async () => {
        await clearTable('products');
        await getAllProducts().then((arr) => {
            setProducts(arr)
        })
    }

    const handleGetAll = async () => {
        await getAllProducts().then((arr) => {
            setProducts(arr)
        })
    }
    const handleUpdate = async (id, newName) => {
        await updateProductById(id,
            {
                name: newName,
                expireDate: "27.06.2020"
            }
        ).then(function (updated) {
            if (updated)
                console.log("update success");
            else
                console.log("Nothing was updated - error");
        }).catch(function (e) {
            console.log(e)
        });
    }

    const handleImgFetch = async () => {
        // fetch('https://static.openfoodfacts.org/images/products/431/150/168/2036/front_de.4.400.jpg').then((res) => {
        //     res.json()
        // }).then((result) => {
        //     if (result.status === 1) {
        //         console.log(result)
        //     }
        // })
        // const res = await fetch("https://static.openfoodfacts.org/images/products/431/150/168/2036/front_de.4.400.jpg");
        // const blob = await res.blob();
        // console.log(blob)
        // console.log('img fetch')
        // let img = await axios.get("https://static.openfoodfacts.org/images/products/431/150/168/2036/front_de.4.400.jpg")
        let prod = await axios.get("https://static.openfoodfacts.org/images/products/431/150/168/2036/front_de.4.400.jpg", { 'headers': { 'content-type': 'application/x-www-form-urlencoded' } })
        console.log(prod)
        downloadFile('https://static.openfoodfacts.org/images/products/431/150/168/2036/front_de.4.400.jpg', './Test')
    }

    return (
        <div>
            <button onClick={handleAdd}>Add Product</button>
            <button onClick={handleClear}>Delete all Products</button>
            <button onClick={handleGetAll}>Refresh Data</button>
            <ul>
                {allProducts ? allProducts.map((product) =>
                    <li key={product.id}><span>Name: {product.name}</span><span> ID: {product.id} </span>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                        <button onClick={() => handleUpdate(product.id, "UpdateTest")}>Update</button><button onClick={() => handleImgFetch()}>Fetch Picture</button></li>
                ) : null}
            </ul>
        </div>
    )
}

export default IdbTest