import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

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
        // const company_name = e
        // e.preventDefault();
        // console.log(this.state);
        // let form_data = new FormData();
        // form_data.append('images', this.state.images, this.state.images.name);
        // form_data.append('company_name', e.target.company_name.value);
        // form_data.append('company_industry ', e.target.company_industry.value);
        // form_data.append('company_description ', e.target.company_description.value);
        // form_data.append('show_public', e.target.show_public.checked);
        // form_data.append('username', localStorage.getItem("username"));
        // form_data.append('tele', e.target.tele.value);
        // form_data.append('email', e.target.email.value);
        // form_data.append('office', e.target.office.value);
        // form_data.append('budget', e.target.budget.value);
        // form_data.append('target', e.target.target.value);
        // form_data.append('chievement', e.target.achievement.value);
        // this.setState({update:false})
        // let url = 'http://localhost:8000/profile/';

        // axios.post(url, form_data, {
        //     headers: {
        //       'content-type': 'multipart/form-data'
        //     }
        //   })
        //       .then(res => {
        //         console.log(res.data);
        //       })
        //       .catch(err => console.log(err))
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
                <label>Company Name:</label>
                <input type="text" name = "company_name" defaultValue = {this.state.profile.company_name} disabled = {!this.state.update}/>
                <br/>
                <label>Company Industry:</label>
                <select className="exp-dropdown" style={{margin:"15px 15px 25px 15px", 
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
                <label>Company Description:</label>
                <input type = "text" name = "company_description" onChange={(event)=>this.handleKeypress(event)} defaultValue = {this.state.profile.company_description} disabled  = {!this.state.update}/>
                <p> Count :  {this.state.count} / 450 </p>
                {this.state.count > 450 &&
                <p style={{color:'red'}}>Maximum Character Reached</p>
                }
                <br/>
                <label>Company Contact Number:</label>
                <input type = "text" name = "tele" defaultValue = {this.state.profile.tele} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Email:</label>
                <input type = "text" name = "email" defaultValue = {this.state.profile.email} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Office:</label>
                <input type = "text" name = "office" defaultValue = {this.state.profile.office} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Budget:</label>
                <input type = "text" name = "budget" defaultValue = {this.state.profile.budget} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Target:</label>
                <input type = "text" name = "target" defaultValue = {this.state.profile.target} disabled  = {!this.state.update}/>
                <br/>
                <label>Company Acheivement:</label>
                <p>(Place a comma between each achievement)</p>
                <input type = "text" name = "achievement" defaultValue = {this.state.profile.achievement} disabled  = {!this.state.update}/>
                <br/>
                {/* <label>Profile Picture: </label>
                <br/>
                <input type="file" id="images"
                   accept="images/png, images/jpeg" onChange={this.handleImageChange} defaultValue = {this.state.profile.images} required disabled  = {!this.state.update}/>
                <br/>
                <br/> */}
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



//   const company_description = event.target.company_description.value;
//         const show_public = event.target.show_public.checked;
// const company_industry = event.target.company_industry.value;
// const company_description = event.target.company_description.value;
// const show_public = event.target.show_public.checked;
// const username = localStorage.getItem("username");
// const tele = event.target.tele.value;
// const email = event.target.email.value;
// const office = event.target.office.value;
// const budget = event.target.budget.value;
// const target = event.target.target.value;
// const achievement = event.target. achievement.value;
// const images = event.target.files[0];

// this.setState({update:false})


// return axios.put(`profile/${username}/`, 
// {username: username, company_name: company_name, company_industry: company_industry,
//     company_description: company_description, show_public: show_public, tele:tele, email:email, 
//     office:office, budget:budget, target,target, achievement: achievement, images:images})
//     .catch(err => console.log(err))
