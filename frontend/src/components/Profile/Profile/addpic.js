import React from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class AddPic extends React.Component {

  state = {
    username: '',
    image: null
  };

  handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
  };
    onSubmit = (e) => {
    
      const username = localStorage.getItem("username");
  
        e.preventDefault();
        console.log(this.state);
        window.location.href = "/profile"
        let form_data = new FormData();
        form_data.append('image', this.state.image, this.state.image.name);
        form_data.append('username',localStorage.getItem("username"));
        let url = 'http://localhost:8000/image/';
        axios.post(url, form_data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
            .then(res => {
              console.log(res.data);
            })
            .catch(err => console.log(err))
      };
      render() {
    return (
        <div>
        <h3 className='text-3'> Add Profile Picture</h3>
      <form onSubmit={this.onSubmit}>
      
      <p>
            <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={this.handleImageChange} required/>
          </p>
          <input type="submit"/>
      </form>
    </div>
    )
    }
  }

  export default AddPic;