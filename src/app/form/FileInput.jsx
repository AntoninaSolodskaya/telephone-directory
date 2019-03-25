import React, {Component} from 'react'
import { Form, Label } from 'semantic-ui-react';
import firebase from '../config/firebase';
import cuid from 'cuid';


const storageService = firebase.storage();
const storageRef = storageService.ref();
let selectedFile;
let imageName = cuid();


class FileInput extends Component{
  
  uploadImage = (e) => {
  selectedFile = e.target.files[0];
  const image = storageRef.child(`images/${imageName}`);
  const uploadTask = image.put(selectedFile); 
    
  uploadTask.on('state_changed', (snapshot) => {
    // let db = firebase.firestore();
    // let dbRef = db.collection("images").doc(`${imageName}`);
    // let setData = dbRef.set({
    //   id: imageName,
    //   downloadURL: uploadTask.snapshot.downloadURL
    // })
    // console.log(setData);
    let downloadURL = storageRef.child(`images/${imageName}`).getDownloadURL().then(function(url) {    
        console.log(url);
        var img = document.getElementById('myimg');
        img.src = url;
      })
    
    }, (error) => {
      console.log(error);
    }, () => {
      
      console.log('success');

    });
  }


  onChange = e => {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    const { input, meta: {touched, error}, ...inputProps } = this.props  
    return(
    //  <Form.Field style={{ marginBottom: "15px" }}>
      <div>
        <input
            {...inputProps}
            type='file'
            // accept='.jpg, .png, .jpeg'
            onChange={this.onChange}
          />
          <img alt=""/>
          {touched && error && <Label basic color='red'>{error}</Label>}
      </div>
        
    //  </Form.Field>
    );
  }
};

export default FileInput;