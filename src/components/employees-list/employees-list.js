import './employees-list.css'
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRise, onUpdateSalary}) => {
    const elements = data.map(item => {
        return <EmployeesListItem 
        key={item.id}
        id={item.id}
        name={item.name} 
        salary={item.salary} 
        increase={item.increase} 
        rise={item.rise}
        onDelete={() => {onDelete(item.id)}} 
        onToggleIncrease={() => {onToggleIncrease(item.id)}} 
        onToggleRise={() => {onToggleRise(item.id)}}
        onUpdateSalary={onUpdateSalary}/>
    });

   const errorMessage = (
        <div className='app-list__error'>
            <p>Сотрудники не найдены</p>
        </div>
   )
   

    return (
        <ul className="app-list list-group">
            {elements.length === 0 ? errorMessage : elements}
        </ul>
    );
};

export default EmployeesList;