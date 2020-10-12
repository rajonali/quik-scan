import React, {useState, useEffect} from 'react'
import db from '../firebase/firebase';
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom';

function ProductListItem({
    id,
    addNewProduct,
    name = "",
    upc,
    imageURL
}) {

    useEffect(() => {}, [])

    return !addNewProduct
        ? (
            <tr>
                <td><img width='100' src={imageURL}/>
                </td>
                <td>{upc}</td>
            </tr>

        )
        : (
            <div>
                <h2>Add New Chat</h2>
            </div>
        )
}

export default ProductListItem;
