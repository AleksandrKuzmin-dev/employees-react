const AppFilterButton = (props) => {

    const {name, text, active, setActiveTab} = props;
    const classNames = active ? 'btn btn-light' : 'btn btn-outline-light';

    return (
        <button type="button"
            className={classNames}
            name={name}
            onClick={() => setActiveTab(name)}>
            {text}
        </button>
    )
}

export default AppFilterButton;