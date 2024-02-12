import { Component } from 'react';
import './app.css';
import AppInfo from "../app-info/app-info";
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                {name: 'John C.', salary: 700, increase: false, id: 0},
                {name: 'Alex M.', salary: 3100, increase: true, id: 1},
                {name: 'Carl W.', salary: 5200, increase: false, id: 2}
            ]
        }
        
        this.maxId = 2
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            id: ++this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }


    render(){
        const {data} = this.state;
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={data}
                onDelete={this.deleteItem}/>
    
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;