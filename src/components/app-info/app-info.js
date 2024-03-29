import './app-info.css'

const AppInfo = ({totalValueEmployees, increasedEmployees}) => {

    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {totalValueEmployees}</h2>
            <h2>Премию получат: {increasedEmployees}</h2>
        </div>
    );
}

export default AppInfo;