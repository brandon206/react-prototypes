import React from 'react';
import Table from './table';

const students = [{
    student:'Brandon',
    course:'Math',
    grade: 80
},
{
    student:'Vienna',
    course:'Science',
    grade: 100
},
{
    student:'Kyle',
    course:'Surfing',
    grade: 100
}];

export default (data) => {
    return(
        <div className = 'container'>
            <h1>Student Grade Table</h1>
            <Table data = {students}/>
        </div>
    )
}
