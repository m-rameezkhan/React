import style from './Buttons.module.css';

const Buttons = ({ onButtonClick }) => {
    let buttons = [
        "AC", "%", "C", "/",
        "7", "8", "9", "*",
        "4", "5", "6", "-",
        "1", "2", "3", "+",
        "00", "0", ".", "=",
    ];

    return (
        <div className={style.buttons}>
            {buttons.map((button, index) => <button key={index} className={style.button} onClick={() => onButtonClick(button)}>{button}</button>)}
        </div>
    )
}
export default Buttons;