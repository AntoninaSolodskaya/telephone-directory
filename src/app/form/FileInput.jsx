import React, {Component} from 'react';
import { Form, Label } from 'semantic-ui-react';

class FileInput extends Component{

  render() {
    const { input, input: {onChange}, url, meta: {touched, error}, ...inputProps } = this.props  
    return(
    <Form.Field style={{ marginBottom: "15px" }}>
      <div>
        <input
          {...inputProps}
          type='file'
          accept='.jpg, .png, .jpeg'
          onChange={onChange}
        />
        {touched && error && <Label basic color='red'>{error}</Label>}
      </div>    
    </Form.Field>
    );
  }
};

export default FileInput;
