import style from './Display.module.css';
const Display = ({displayValue}) => {
  return (
    <input className={style.display} type="text" name="" id="input" value={displayValue} readOnly/>
  );
}

export default Display;