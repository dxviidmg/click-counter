import '../css/Button.css';

export default function Button({text, isClickButton, onClick}){
    return(
        <button className={isClickButton ? 'click-button': 'restart-button'} onClick={onClick} >{text}</button>
    )
}