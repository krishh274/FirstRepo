import * as empAction from '../actions/actionsCreators'

const initialSate= {
    employees:[]
}

function employeeManagement(state = initialSate,action)
{
    switch(action.type)
    {
        case empAction.ADD_EMPLOYEE:
            Object.assign({},state,);
            break;
        default:
            break;

    }
    return state;
}