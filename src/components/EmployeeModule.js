import React,{ Component } from 'react';
import AddEmployee,{ TempAddEmployee } from './AddEmployee'
import ViewAllEmployees from './ViewAllEmployees'
class EmployeeModule extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            Employee : {
            FirstName:'',
            LastName:'',
            DOB:'',
            Gender:'',
            Address:'',
            City:'',
            State:''
        },
        Employees : new Array() 
    }
    }
    myChangeHandler = (event) =>{
        console.log(event.target.name);
      //  this.setState({Employee: { ...this.state.Employee,[event.target.name]:event.target.value}});
      this.setState({
        Employee: Object.assign({}, this.state.Employee, {[event.target.name]:event.target.value})
      });
    }
    SaveEmployee =(event) => {
        event.preventDefault(); 
        let employees =this.state.Employees;
        employees.push(this.state.Employee);
        this.setState({
            Employees :  employees
        });                
        console.log(this.state);
      
    }
    render(){
        return (
        <div >
 
    <h3>EmployeeModule.js file</h3>
    <AddEmployee myChangeHandler={this.myChangeHandler} SaveEmployee={this.SaveEmployee} ></AddEmployee>   
    
    {this.state.Employees.length > 0
                ? <ViewAllEmployees AllEmployees={this.state.Employees}></ViewAllEmployees>
                : <p>Loading...</p>
            }
    </div>);
    }
}
export default EmployeeModule;