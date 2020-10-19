import React, {Component, useEffect, useState} from 'react';
import {db} from '../firebase/firebase';
import ProductListItem from './ProductListItem';
import {Table,Card, Container} from 'react-bootstrap';

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

            return (unsubscribe)

    
        }, [products]);



            return (
                <Container>
                                    <Card style={{padding:15}}>

                    <br />
                    <h1>View Products</h1>
<Table>
<thead>
    <tr>
      <th>Img</th>
      <th>UPC</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
<tbody>
{products.map((product) => (

                    <ProductListItem key={product.id} id={product.id} name={product.data.name} imageURL={product.data.files} upc={product.data.upc} quantity={product.data.quantity} price={product.data.price} />
                    
                ))}
                </tbody>

                </Table>
                </Card>

                </Container>
            );
    }

    export default ViewProducts;