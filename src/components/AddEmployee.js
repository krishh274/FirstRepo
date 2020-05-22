import React,{ Component} from 'react';

class AddEmployee extends Component{   
    render(){
        return(
<div>
    <div className="form-group">
        <label htmlFor="txtName">First Name:</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="FirstName" placeholder="First Name" id="txtName"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtLastName">Last Name:</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="LastName" placeholder="Last Name" id="txtLastName"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtDOB">Date of birth</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="DOB" placeholder="Date of birth" id="txtDOB"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtGender">Gender</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="Gender" placeholder="Gender" id="txtGender"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtAddress">Address</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="Address" placeholder="Address" id="txtAddress"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtCity">City</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="City" placeholder="City" id="txtCity"/>
    </div>
    <div className="form-group">
        <label htmlFor="txtState">State</label>
        <input type="text" onChange={this.props.myChangeHandler} className="form-control" name="State" placeholder="Ctate" id="txtState"/>
    </div>
    <input type="button" className="btn btn-primary" onClick={this.props.SaveEmployee} value="Save" />
</div>
        );
    }
}

class TempAddEmployee extends Component{
    render(){
        return(
<div>
 View Added results;
</div>
        );
    }
}
export default AddEmployee;
export{TempAddEmployee};