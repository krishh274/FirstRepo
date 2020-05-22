import React,{Component} from 'react';

class ViewAllEmployees extends React.Component{
    constructor(props){
        super(props);
       
    } 
    renderTableData() {
        console.log(this.props);
        return this.props.AllEmployees.map((employee, index) => {
           const { FirstName, LastName, DOB, Gender } = employee //destructuring
           return (
              <tr key={index}>
                 <td>{FirstName}</td>
                 <td>{LastName}</td>
                 <td>{DOB}</td>
                 <td>{Gender}</td>
              </tr>
           )
        })
     }
    render(){
        return(
            <div>
            <h6 id='title'>React Dynamic Table</h6>
            <table id='Employees'>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>        
        );
    }
}
export default ViewAllEmployees;