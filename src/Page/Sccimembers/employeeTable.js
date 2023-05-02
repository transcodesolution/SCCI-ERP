import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEmployee } from './actions';

function EmployeeTable() {
    // read the employees array from the Redux store
    const employees = useSelector((state) => state.employees);
    const dispatch = useDispatch();

    // local state for the form inputs
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [position, setPosition] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispatch the addEmployee action with the form data
        dispatch(addEmployee({ name, age, position }));

        // clear the form inputs
        setName('');
        setAge('');
        setPosition('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} />
                <button type="submit">Add Employee</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map through the employees array and render a row for each employee */}
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}




