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
                {name: 'John C.', salary: 700, increase: false, rise: false, id: 0},
                {name: 'Alex M.', salary: 3100, increase: true, rise: false, id: 1},
                {name: 'Carl W.', salary: 5200, increase: false, rise: false, id: 2}
            ],
            term: '',
            filter: ''
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
            rise: false,
            id: ++this.maxId
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id){
                        return {...item, increase: !item.increase}
                    };

                    return item;
                })
            }
        })
    }

    onToggleRise = (id) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        return {...item, rise: !item.rise}
                    }
                    
                    return item;
                })
            }
        })
    }

    searchEmployees = (data, term) => {
        if (term.length === 0) return data;

        return data.filter(item => {
            return item.name.indexOf(term) !== -1;
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterEmployees = (data, filterName) => {
        switch (filterName) {
            case 'allEmployees':
                return data;

            case 'riseEmployees':
                return data.filter(item => item.rise)

            case 'salaryMore1000':
                return data.filter(item => item.salary > 1000)

            default: 
                return data;
        }
        
    }

    onUpdateFilter = (filterName) => {
        this.setState({filter: filterName})
    }

    onUpdateSalary = (id, value) => {
        this.setState(({data}) => {
            return {
                data: data.map(item => {
                    if (item.id === id) {
                        if(value === '$'){
                            return {...item, salary: 0}
                        }

                        return {...item, salary: value.replace('$', '')}
                    } else {
                        return item;
                    }
                })
            }
        })
    }

    render(){
        const {data, term, filter} = this.state;
        const totalValueEmployees = this.state.data.length;
        const increasedEmployees = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmployees(this.filterEmployees(data,filter), term)

        return (
            <div className="app">
                <AppInfo 
                totalValueEmployees={totalValueEmployees}
                increasedEmployees={increasedEmployees}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter
                    onUpdateFilter={this.onUpdateFilter}/>
                </div>
    
                <EmployeesList 
                data={visibleData}
                onDelete={this.deleteItem}
                onToggleIncrease={this.onToggleIncrease}
                onToggleRise={this.onToggleRise}
                onUpdateSalary={this.onUpdateSalary}/>
    
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        )
    }
}

export default App;