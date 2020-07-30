import React from 'react';
import axios from 'axios';
import { Row,Col}from 'react-grid-system';
import HelpIcon from '@material-ui/icons/Help';
import Popup from "reactjs-popup";
import format from './format.png';
import {ExcelRenderer} from 'react-excel-renderer';
import { connect } from 'react-redux';
import excel from 'xlsx';
import { Alert } from '@material-ui/lab';

import InputLabel from '@material-ui/core/InputLabel';
import './import.css';
axios.defaults.baseURL = 'https://analyticswallet.herokuapp.com/';

class Exel extends React.Component {
  state = {
    cols :"",
    row:"",
    workbook:""
}

expenseCat = ["Entertainment","Equipment & Furniture","Marketing",
    "Office Supplies","Payroll","Rent","Software","Taxes","Travel",
    "Utilities","Others"]

    onSubmit = (event) => {
        var name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        const created_at = event.target.created_at.value + "T00:00:00.00000Z";
        if (amount < 0 && !this.expenseCat.includes(name)) {
          name = "Others"
        }
        
        return axios.post('api/', {name: name, username: username,
                amount: amount, created_at:created_at})
                .catch(err => console.log(err))
        }

        fileHandler = (event) => {
            let fileObj = event.target.files[0];
            
            //just pass the fileObj as parameter
            ExcelRenderer(fileObj, (err, resp) => {
              if(err){
                console.log(err);            
              }
              else{
                this.setState({
                  cols: resp.cols,
                  rows: resp.rows,
                    workbook:excel.readFile(fileObj)
                });
              }
            });     
            // const username = localStorage.getItem("username"); 
            // return this.state.rows.map(element => {
            //     const name = element[0]
            //     const amount = element[1]
            //     const created_at =element[2]
            
            // });
            }

             handleUpload = (e) => {
                e.preventDefault();
                let fileObj = e.target.files[0];
                ExcelRenderer(fileObj, (err, resp) => {
                    if(err){
                      console.log(err);            
                    }
                    else{
                      this.setState({
                        cols: resp.cols,
                        rows: resp.rows,
                    
                      });
                      var trans = []
                    delete resp.rows[0]
                     for (var key in resp.rows) {
                      var date = new Date(Math.round((resp.rows[key][2]- 25569)*86400*1000))
                       var name = resp.rows[key][0]
                       var amount = resp.rows[key][1]
                       if (amount < 0 && !this.expenseCat.includes(name)) {
                        name = "Others"
                      }
                       trans.push({name:name,
                      amount:amount,
                      created_at:date.toISOString(),
                      username:localStorage.getItem("username")})
                    }
                    trans.forEach(x => {
                      console.log(x)
                      axios.post('api/', x)
                    .catch(err => console.log(err))})
                  }});     
    }; 
            handleclose =e =>{
                this.setState({
                  rows:''
                })
            }
      
          render() {
            return ( 
               <>
                <h3 style={{color:'grey'}}>EXCEL IMPORT</h3>
                <br/>
                <Row>
                <Col sm={11}>       
          
                    <br/>
                    <br/>
                    <input className="custom-file-input" type="file" onChange={this.handleUpload} />
                 
                
               
                  <br/>
                  <p style ={{ color:'grey'}}> ONLY EXCEL FILES ARE ALLOWED</p>
                  
                  </Col>
                <Col sm={1}>
                     
              <Popup trigger= {
              <HelpIcon position="right" style={{ fontSize: "30px"}}/>}
            
              modal closeOnDocumentClick>
                <div>
                <InputLabel >File Excel Format</InputLabel>
                <img 
                  src= {format}
                  alt="format"
                  />

                </div>

                </Popup>

                </Col>

              </Row>
              {this.state.rows && 
                 <Alert elevation={6} variant="filled"  onClick={this.handleClose} severity="success">
                  Sucessful Import
                </Alert >
                        }


               </>
            )
          }
    }
    
    const mapStateToProps = state => {
        return {
            token: state.token
        }
      }
      
      export default connect(mapStateToProps)(Exel);
    
    