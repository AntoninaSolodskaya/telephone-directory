import React, {Component} from 'react'
import { Form, Label } from 'semantic-ui-react';

class FileInput extends Component{
  
  onChange = e => {
    const { input: { onChange } } = this.props
    onChange(e.target.files[0])
  }

  render(){
    const { inputProps, meta: {touched, error} } = this.props  
    return(
     <Form.Field style={{ marginBottom: "15px" }}>
       <input
        {...inputProps}
        type='file'
        accept='.jpg, .png, .jpeg'
        onChange={this.onChange}
       />
        {touched && error && <Label basic color='red'>{error}</Label>}
     </Form.Field>
    );
  }
};

export default FileInput;