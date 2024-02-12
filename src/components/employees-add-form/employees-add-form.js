import './employees-add-form.css';
import { Component } from 'react';

class EmployeesAddForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            warning: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        
        this.setState({warning: ''});

        if (this.state.name.length < 3){
            this.setState({warning: 'Имя сотрудника должно содержать не менее 3-х символов'});
            return;
        }

        if(!this.state.salary){
            this.setState({warning: 'Поле зарплаты не может быть пустым'});
            return;
        }

        this.props.onAdd(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: '',
            warning: ''
        })
    }

    render(){
        const {name, salary, warning} = this.state;

        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}>
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?" 
                        name="name"
                        value={name}
                        onChange={this.onValueChange}/>
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?" 
                        name="salary"
                        value={salary}
                        onChange={this.onValueChange}/>
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
                <p className="app-add-form__warning">{warning}</p>
            </div>
        );
    }
};

export default EmployeesAddForm;