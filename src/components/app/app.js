import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const App = () => {

    const data = [
        {name: 'John C.', salary: 700, increase: false, id: 0},
        {name: 'Alex M.', salary: 3100, increase: true, id: 1},
        {name: 'Carl W.', salary: 5200, increase: false, id: 2}
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data={data}/>

            <EmployeesAddForm/>
        </div>
    )
}

export default App;