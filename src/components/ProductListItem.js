import React, {useState, useEffect} from 'react'
import {db} from '../firebase/firebase';
import {Card, Modal, Button, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import firebase from 'firebase';

function ProductListItem({id, addNewProduct, upc, imageURL, name, quantity}) {
 
 
    const [show,
        setShow] = useState(false);
    const [UPC, setUPC] = useState(upc);
    const [IMAGEURL, setIMAGEURL] = useState(imageURL);
    
    const [NAME,setNAME] = useState(name)   

    const [QUANTITY, setQUANTITY] = useState(quantity)
    
    

const handleSubmit = (e) => {
    e.preventDefault();
    db
        .collection("products")
        .doc(id)
        .update({upc:UPC, files:IMAGEURL, name:NAME, quantity:QUANTITY})
        .then(() => {
            console.log(id);
        })
        .catch = (e) => {
        console.log(e)
    }

    handleClose();


}



const deleteItem = (e, id) => {
    e.preventDefault();
    db
        .collection("products")
        .doc(id).delete()
        .then(() => {
            console.log("Successfully deleted" + id);
        })
        .catch = (e) => {
        console.log(e)
    }
}




    const handleClose = () => {
        setShow(false);
    }


      

    const handleShow = () => setShow(true);

    
    return !addNewProduct
        ? (
            <tr>
                <td><img width='100' src={imageURL}/></td>
                <td>{upc}</td>
                <td>
                    <Button onClick={handleShow} variant="warning">EDIT</Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Item {id}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>



<div>

<div
    style={{
    display: 'flex',
    height: '250px',
    flex: 1
}}>

    <img
        style={{
        display: 'flex',
        flex: 1,
        maxWidth: '100%',
        maxHeight: '100%'
    }}
        src={imageURL}/>
</div>
<br/>
<Form onSubmit={e => (handleSubmit(e))}>
    
    
<Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Product Name
        </Form.Label>
        <Form.Control type="text" value={NAME} onChange={e => {setNAME(e.target.value)}}/>
    </Form.Group>

    
    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Product UPC
        </Form.Label>
        <Form.Control type="text" value={UPC} onChange={e => {setUPC(e.target.value)}}/>
    </Form.Group>

    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Product Quantity
        </Form.Label>
        <Form.Control type="text" value={QUANTITY} onChange={e => {setQUANTITY(e.target.value)}}/>
    </Form.Group>


    <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Image URL
        </Form.Label>
        <Form.Control type="text" value={IMAGEURL} onChange={e => {setIMAGEURL(e.target.value)}}/>
    </Form.Group>
    <Form.Group>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>

                            </Form.Group>
</Form>
</div>
                        </Modal.Body>
                        <Modal.Footer>
                            
                        </Modal.Footer>
                    </Modal>

                    <Button  variant="success">ADD TO CART</Button>

                    <Button onClick={(e)=> {deleteItem(e,id)}} variant="danger">DELETE</Button>


                </td>
            </tr>

        )
        : (
            <div>
                <h2>Add New Chat</h2>
            </div>
        )
}

export default ProductListItem;
