import React, { Component } from 'react'
import axios from 'axios'
export class Apidemo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users:[],
            errorInfo:'',
            covidDetails:[]
             
        }
    }
    /* componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/users')
              .then(response =>{
                  console.log(response.data)
                  this.setState({
                      users:response.data
                  })
              })
              .catch(error=>{
                  console.log(error)
                  this.setState({
                      errorInfo:error
                  })
              })
   
       } */

       componentDidMount(){
        axios.get('https://api.covid19api.com/summary')
              .then(response =>{
                  console.log(response.data.Countries)
                  this.setState({
                    covidDetails:response.data.Countries
                  })
                  
                  
              })
              .catch(error=>{
                  console.log(error)
                 
              })
   
       }
  
  /*   render() {
        const {users,errorMsg} = this.state
        return (
            <div>
                  <h1>List of Users <hr/></h1>
                  <table align="center">
                      <thead>
                          <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Username</th>
                          </tr>
                      </thead>
                      <tbody>
                          {
                              users.length?users.map(user=>
                                  <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.username}</td>
                                  </tr>                                 
                                  ):null
                          }
                      </tbody>
                  </table>
            </div>
        )
    } */
    render() {
        const {covidDetails,errorMsg} = this.state
       return(
           <div>
           
           <table border={1} >
                      <thead >
                       
                          <tr>
                          <th>Date</th>
                          <th>Country</th>
                          <th>CountryCode</th>
                          <th>NewConfirmed</th>
                          <th>NewDeaths</th>
                          <th>NewRecovered</th>
                          <th>TotalConfirmed</th>
                          <th>TotalDeaths</th>
                          <th>TotalRecovered</th>
                        
                          </tr>
                      </thead>
                      <tbody>
                          {
                            covidDetails.length?covidDetails.map(covid=>
                                  <tr key={covid.CountryCode}>
                                  <td>{Date(covid.Date,'YYYY-MM-DD').substring(0, 15) }</td>
                                  <td>{covid.Country}</td>
                                  <td>{covid.CountryCode}</td>
                                  <td>{covid.NewConfirmed}</td>
                                  <td>{covid.NewDeaths}</td>
                                  <td>{covid.NewRecovered}</td>
                                  <td>{covid.TotalConfirmed}</td>
                                  <td>{covid.TotalDeaths}</td>
                                  <td>{covid.TotalRecovered}</td>
                                  
                                  </tr>                                 
                                  ):null
                          }
                      </tbody>
                  </table>
          </div>
      )
    }
}

export default Apidemo
