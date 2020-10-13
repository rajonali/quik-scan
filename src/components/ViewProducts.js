import React, {Component, useEffect, useState} from 'react';
import {db} from '../firebase/firebase';
import ProductListItem from './ProductListItem';
import {Table, Container} from 'react-bootstrap';

function ViewProducts() {

    const [products,
        setProducts] = useState([]);

    useEffect(() => {
        const unsubscribe = db
            .collection('products')
            .onSnapshot(snapshot => (setProducts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))));
    
        }, []);



            return (
                <Container >
                    <br />
                    <h1>View Products</h1>
<Table>
<thead>
    <tr>
      <th>Img</th>
      <th>UPC</th>
    </tr>
  </thead>
<tbody>
{products.map((product) => (

                    <ProductListItem key={product.id} id={product.id} name={product.data.name} imageURL={product.data.files} upc={product.data.upc} />
                    
                ))}
                </tbody>

                </Table>
                </Container>
            );
    }

    export default ViewProducts;