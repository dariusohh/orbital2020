import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Row,Col}from 'react-grid-system';
import './import.css';
import excel from 'xlsx';
import {ExcelRenderer, OutTable} from 'react-excel-renderer';


axios.defaults.baseURL = 'http://127.0.0.1:8000/';

class Import extends React.Component {
state = {
    cols :"",
    row:"",
    workbook:""
}
    onSubmit = (event) => {
        const name = event.target.name.value;
        const amount = event.target.amount.value;
        const username = localStorage.getItem("username");
        const created_at = event.target.created_at.value + "T00:00:00.00000Z";
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
                       trans.push({name:resp.rows[key][0],
                      amount:resp.rows[key][1],
                      created_at:date.toISOString(),
                      username:localStorage.getItem("username")})
                    }
                    trans.forEach(x => {
                      console.log(x)
                      axios.post('api/', x)
                    .catch(err => console.log(err))})
                  }});     
    }; 
            
        
  
      render() {
        return ( 
            <div>
                <Row>
                    {/* col 1 */}
                    <Col className="wrap2">
                        {/* Header */}
                        <Row className ="header-5">
                        <h1 className="test-5">Add Past Data</h1>
                        </Row>
                        {/* Add manual */}
                        <Row >
                       <div>
                <form onSubmit={this.onSubmit}>
                    <br/>
                    <h4>Category</h4>
                    <input type="text"  name = "name" placeholder="Enter..." />
                    <br/>
                    <h4>Amount</h4>
                    <label style={{paddingLeft:'5%'}}>(negative for expense and positive for revenue)</label>
                    <input type="text"  name = "amount" placeholder="Enter..." />
                    <br/>
                    <h4>Date</h4>
                    <input type="date"  name = "created_at" placeholder="Enter..." />
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <button>Add Past Data</button>
                
                   
                </form>
                </div>
                        </Row>
                    </Col>
                    {/* col 2 */}
                    <Col className="wrap2">
                     {/* Header */}
                     <Row className ="header-5">
                        <h1 className="test-5">Import Data</h1>
                        </Row>
                        {/* import excel */}
                        <Row>
                            <div>
                        <h4 style= {{textAlign:'center'}}>Import Previous Data Files</h4>
                        <br/>
                    <input type="file" onChange={this.handleUpload} />
                    </div>
                    
                    <div>
                        {this.state.rows && <OutTable data={this.state.rows}
                         columns ={this.state.cols} 
                         tableClassName= "ExcelTable2007"
                         tableHeaderRowClass="heading"/>}
                    </div>
                        </Row>
                    </Col>

                </Row>
            </div>
        )
      }
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
  }
  
  export default connect(mapStateToProps)(Import);

