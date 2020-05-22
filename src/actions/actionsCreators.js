function makeActionCreator(type,...argname)
{
    return function (...argname){
        const action={type};
        argname.forEach((arg,index)=>{
            action[argname[index]] = arg[index]
        })        
        return action
    }
}

export const ADD_EMPLOYEE = "ADD_EMPLOYEE"; 
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE"; 
export const GET_EMPLOYEE = "GET_EMPLOYEE"; 
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"; 

export const addEmployee = makeActionCreator(ADD_EMPLOYEE,'Add Employee');
export const editEmployee = makeActionCreator(EDIT_EMPLOYEE,'Add Employee');
export const getEmployee = makeActionCreator(GET_EMPLOYEE,'Add Employee');
export const deleteEmployee = makeActionCreator(DELETE_EMPLOYEE,'Add Employee');
