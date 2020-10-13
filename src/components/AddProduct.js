import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Container, Card, Form} from 'react-bootstrap';
import Camera from 'react-html5-camera-photo';
import {requestProductAdd, productAdded} from '../redux/actions/product'
import {db} from '../firebase/firebase';
import firebase from 'firebase';


class AddProduct extends Component {

    constructor(props) {
        super(props);

        this.state = {
            upc: '',
            files: {}
        };

    }

    

    handleForm = (e) => {
        e.preventDefault();
        console.log(this.state)

        const data = {
            upc: this.state.upc,
            files: this.state.files
        };

        

///

// Create the file metadata
var metadata = {
  contentType: 'image/jpeg'
};


var storage = firebase.storage();

// Create a storage reference from our storage service
var storageRef = storage.ref();

// Upload file and metadata to the object 'images/mountains.jpg'
var uploadTask = storageRef.child('images/' + data.files.name).put(data.files, metadata);



// Listen for state changes, errors, and completion of the upload.
uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
  function(snapshot) {
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {

  // A full list of error codes is available at
  // https://firebase.google.com/docs/storage/web/handle-errors
  switch (error.code) {
    case 'storage/unauthorized':
      // User doesn't have permission to access the object
      break;

    case 'storage/canceled':
      // User canceled the upload
      break;

    case 'storage/unknown':
      // Unknown error occurred, inspect error.serverResponse
      break;
  }
}, function() {
  // Upload completed successfully, now we can get the download URL
  uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
    console.log('File available at', downloadURL);
    db
            .collection('products')
            .add({
                upc: data.upc,
                files: downloadURL,
                timestamp: firebase
                    .firestore
                    .FieldValue
                    .serverTimestamp()
            })
            .then(function () {
                console.log("Document successfully written!");
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
  });
});



    }

    handlePhotos = (event) => {
        event.preventDefault();
        let files = event.target.files;

        if (files && files.length > 0) {
            this.setState({files: files[0]});
        } else 
            console.log("no files selected");
        }
    



    render() {
        
        return (
            <Container>
            <Card style={{padding:'20px'}}>
                <h1>Add Product</h1>
                <Form
                    onSubmit={async(e) => {
                    this.handleForm(e)
                }}>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>UPC</Form.Label>
                        <Form.Control
                            value={this.state.upc}
                            
                            onChange={event => this.setState({upc: event.target.value})}
                            type="text"
                            placeholder="Enter UPC ..."/>

                    </Form.Group>

                    <Form.Group controlId="formFile">

                        <Form.File
                            onChange={e => this.handlePhotos(e)}
                            label="Image"
                            type="file"
                            id="file1"
                            name="file1"
                            accept="image/*"
                            capture="camera"/>

                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Container>

        );
    }
}

export default AddProduct;