import classes from './SimulateBirthdayButton.module.css';

const SimulateBirthdayButton = props => {

    const { handleClickBirthdayBtn } = props;
    const { Button } = classes;

    return (
        <button className={Button} onClick={handleClickBirthdayBtn}>
            Simulate CTO Birthday
        </button>
    )
}

export default SimulateBirthdayButton;