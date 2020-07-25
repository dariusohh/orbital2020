import React from 'react';
import { connect } from 'react-redux';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import Button from '@material-ui/core/button';

class Profile extends React.Component {

    state = {
        profile: {company_name: "", 
            company_industry: "",
            company_description: "", 
            show_public: ""},
        update: false,
             count:0
    }
    
    componentDidMount() {
        
          axios.get(`profile/${localStorage.getItem("username")}/`)
          .then(prof => {
              this.setState({
                  profile: prof.data,
                    count : prof.data.company_description.length
              });
          })
      }

      onSubmit = event => {
      
        const company_name = event.target.company_name.value;
        const company_industry = event.target.company_industry.value;        

const company_description = event.target.company_description.value;
const show_public = event.target.show_public.checked;
const username = localStorage.getItem("username");
const tele = event.target.tele.value;
const email = event.target.email.value;
const office = event.target.office.value;
const budget = event.target.budget.value;
const target = event.target.target.value;
const achievement = event.target.achievement.value;
// const images = event.target.files[0];

this.setState({update:false})


return axios.put(`profile/${username}/`, 
{username: username, company_name: company_name, company_industry: company_industry,
    company_description: company_description, show_public: show_public, tele:tele, email:email, 
    office:office, budget:budget, target:target, achievement: achievement})
    .catch(err => console.log(err))
}

    setUpdate = event => {
        this.setState({update:true})
    }

    switchChange = checked => {
        this.setState({ show_public: checked });
    }
  handleKeypress(event) {
    console.log('*****', event.target.value);
    this.setState({ count:event.target.value.length });
  }

  
    handleImageChange = (e) => {
        this.setState({
          images: e.target.files[0]
        })
      };

    industryList = ["Accounting","Administration & Office Support","Advertising, Arts & Media","Banking & Financial Services",
"Call Centre & Customer Service","Community Services & Development","Construction","Consulting & Strategy","Design & Architechture"
,"Education & Training","Engineering","Farming, Animals & Conservation","Government & Defence","Healthcare & Medical"
,"Hospitality & Tourism","Human Resources & Recruitment","Information & Communication Technology","Insurance & Superannuation"
,"Legal","Manufacturing, Transport & Logistics","Marketing & Communications","Mining, Resources & Energy","Real Estate & Property"
,"Retail & Consumer Products","Sales","Science & Technology","Sport & Recreation","Trades & Services","Others"]

    render() {
        return (
            <div>
            <form onSubmit={this.onSubmit}>
            <InputLabel >Company Name:</InputLabel>
           
                <input className="trans-input" type="text" name = "company_name" defaultValue = {this.state.profile.company_name} disabled = {!this.state.update}/>
                <br/>
        
                <InputLabel >Company Industry:</InputLabel>
         
                <select className="exp-dropdown" style={{margin:"15px 15px 25px 0px", 
                borderRadius:"0px",padding:"10px 12px"}} name = "company_industry" 
                disabled = {!this.state.update}>
                {
                    this.industryList.map(x => 
                    this.state.profile.company_industry === x 
                    ? 
                    <option value={x} selected>{x}</option>
                    :
                    <option value={x}>{x}</option>)
                }

            </select>
                  <br/>
                  <InputLabel >Company Description:</InputLabel>
       
                <textarea style={{height:'100px', width:'100%'}} name = "company_description" onChange={(event)=>this.handleKeypress(event)} defaultValue = {this.state.profile.company_description} disabled  = {!this.state.update}/>
                <p> Count :  {this.state.count} / 750 </p>
                {this.state.count > 750 &&
                <p style={{color:'red'}}>Maximum Character Reached</p>
                }
                <br/>
                <InputLabel >Company Contact Number:</InputLabel>
             
                <input className="trans-input" type = "text" name = "tele" defaultValue = {this.state.profile.tele} disabled  = {!this.state.update}/>
                <br/>
                <InputLabel >Company Email:</InputLabel>
           
                <input className="trans-input" type = "text" name = "email" defaultValue = {this.state.profile.email} disabled  = {!this.state.update}/>
                <br/>
                <InputLabel >Company Office:</InputLabel>
         
                <input className="trans-input" type = "text" name = "office" defaultValue = {this.state.profile.office} disabled  = {!this.state.update}/>
                <br/>
                <InputLabel >Company Budget:</InputLabel>
          
                <input className="trans-input" style={{width:"20%"}} type = "text" name = "budget" defaultValue = {this.state.profile.budget} disabled  = {!this.state.update}/>
                <br/>
                <InputLabel >Company Target:</InputLabel>
             
                <input className="trans-input" style={{width:"20%"}} type = "text" name = "target" defaultValue = {this.state.profile.target} disabled  = {!this.state.update}/>
                <br/>
                <InputLabel >Company Acheivement:</InputLabel>
                <p>(Place a comma between each achievement)</p>
           
                <input className="trans-input" type = "text" name = "achievement" defaultValue = {this.state.profile.achievement} disabled  = {!this.state.update}/>
                <br/>
                {/* <label>Profile Picture: </label>
                <br/>
                <input type="file" id="images"
                   accept="images/png, images/jpeg" onChange={this.handleImageChange} defaultValue = {this.state.profile.images} required disabled  = {!this.state.update}/>
                <br/>
                <br/> */}
                <InputLabel >Show profile to Public:</InputLabel>
                <input type="checkbox" name = "show_public" 
                defaultChecked = {this.state.profile.show_public ? "true" : null} disabled  = {!this.state.update}/>
                <br/>
                { this.state.update && 
                 <Button variant="contained" type="submit" disabled={this.state.count > 750} color="primary">Update Profile</Button> 
                }
            </form>
            { !this.state.update && 
            <form onSubmit = {this.setUpdate}>
                <Button variant="contained"type= "submit" color="primary">Edit Profile</Button>
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


