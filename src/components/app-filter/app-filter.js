import { Component } from 'react';
import AppFilterButton from '../app-filter-button/app-filter-button';
import './app-filter.css';

class AppFilter extends Component {
    constructor(props){
        super(props);
        this.state = {
            tabButton: [
                {name: 'allEmployees', text: 'Все сотрудники', active: true},
                {name: 'riseEmployees', text: 'На повышение', active: false},
                {name: 'salaryMore1000', text: 'З/П больше 1000$', active: false}
            ]
        }
    }

    setActiveTab = (name) => {
        const buttons = this.state.tabButton.map(item => {
            if (name === item.name) {
                return {...item, active: true}
            } else {
                return {...item, active: false}
            }
        })

        this.setState({tabButton: buttons});
        this.props.onUpdateFilter(name);
    }

    render(){

        const {tabButton} = this.state;
        const elements = tabButton.map(item => {
            return <AppFilterButton 
            name={item.name}
            key={item.name} 
            text={item.text} 
            active={item.active}
            setActiveTab={this.setActiveTab} />
        });

        return(
            <div className="btn-group">
                {elements}
            </div>
        );
    }
};

export default AppFilter;