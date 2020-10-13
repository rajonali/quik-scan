import React, {useState, useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {requestSignIn, signedIn} from '../redux/actions/user'
import {auth} from '../firebase';
import * as routes from '../redux/constants/routes';
import {Form, Button, Card, Container} from 'react-bootstrap';
import {db} from '../firebase/firebase';

function AllProducts({}) {

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

        <div
            style={{
            display: 'flex',
            flex: 1,
            flexDirection:'row',
justifyContent:'space-around'
        }}>

            <div
                style={{
                        padding:'20px',
                display: 'flex',
                width: '400px',
            }}>
                <Container
                    style={{
                    flex: 1,
                    display: 'flex',
                    borderStyle: "solid",
                    borderWidth:'1px',
                    justifyContent:'center',
                    alignItems:'center',
                    
                }}>
<p>Coming Soon ...</p>
                </Container>

            </div>

            <Container
                style={{
                display: 'grid',
                
                placeItems: 'center',
                
            }}>
                <div class="row">
                    {products.map((product) => (
                        <div class="col-sm">
                            <Card
                                style={{
                                display: 'grid',
                                placeItems: 'center'
                            }}>
                                <Card.Body
                                    style={{
                                    display: 'grid',
                                    placeItems: 'center'
                                }}>

                                    <div
                                        style={{
                                        display: 'flex',
                                        height: 200,
                                        width: 200
                                    }}>
                                        <img
                                            style={{
                                            display: 'flex',
                                            maxWidth: '250px',
                                            backgroundColor: 'yellow',
                                            maxHeight: '250px'
                                        }}
                                            src={product.data.files}/>
                                    </div>
                                    {/*                                    <div>{product.data.upc}</div> */}
                                    <h2>$4.99</h2>
                                    <h4>Qty: 23</h4>
                                    <Button>Add to Cart</Button>

                                </Card.Body>
                            </Card>
                        </div>

                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllProducts;