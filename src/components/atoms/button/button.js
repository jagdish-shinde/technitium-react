import './button.css'


export default function Button ({cuttonBtnStyle,clickFunction}) {
    return (
        <button 
            className={cuttonBtnStyle}
            onClick={clickFunction}
        >
        Submit
        </button>
    )
}