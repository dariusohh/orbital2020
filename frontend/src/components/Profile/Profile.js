import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class Profile extends React.Component {

    state = {
        profile: {company_name: "", 
            company_industry: "",
            company_description: "", 
            show_public: ""},
        update: false
    }
    
    componentDidMount() {
          axios.get(`profile/${localStorage.getItem("username")}/`)
          .then(prof => {
              this.setState({
                  profile: prof.data
              });
          })
      }

      onSubmit = event => {
        const company_name = event.target.company_name.value;
        const company_industry = event.target.company_industry.value;
        const company_description = event.target.company_description.value;
        const show_public = event.target.show_public.checked;
        const username = localStorage.getItem("username");
        this.setState({update:false})
        return axios.put(`profile/${username}/`, 
        {username: username, company_name: company_name, company_industry: company_industry,
            company_description: company_description, show_public: show_public})
            .catch(err => console.log(err))
    }

    setUpdate = event => {
        this.setState({update:true})
    }

    switchChange = checked => {
        this.setState({ show_public: checked });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
                <label>Company Name:</label>
                <input type="text" name = "company_name" defaultValue = {this.state.profile.company_name} disabled = {!this.state.update}/>
                <br/>
                <label>Company Industry:</label>
                <input type = "text" name = "company_industry" defaultValue = {this.state.profile.company_industry} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Description:</label>
                <input type = "text" name = "company_description" defaultValue = {this.state.profile.company_description} disabled  = {!this.state.update}/>
                <br/>
                <label>Show profile to Public:</label>
                <input type="checkbox" name = "show_public" 
                defaultChecked = {this.state.profile.show_public ? "true" : null} disabled  = {!this.state.update}/>
                <br/>
                { this.state.update && 
                <button type="submit">Update Profile</button> 
                }
            </form>
            { !this.state.update && 
            <form onSubmit = {this.setUpdate}>
                <button type= "submit">Edit Profile</button>
            </form>
            }
            </div>
        )
}
}
 
const mapStateToProps = state => {
    return {
        token: state.token
    }
  }
  
  export default connect(mapStateToProps)(Profile);