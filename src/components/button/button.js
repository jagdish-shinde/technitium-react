import './button.css'


export default function Button (props) {



    function handleClick () {
        alert('comon')
    }

    return (
        <button 
            // className='clickBtn' 
            className={props.externalClassName || 'clickBtn'}
            onClick={ props.onClickFunction || handleClick} 
            style={props.buttonStyle}
        >
            {props.buttonText || 'Submit' }
        </button>
    )
}