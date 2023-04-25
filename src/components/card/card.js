import './card.css'

export default function ProfileCard ({useDetail,alertFunction,buttonStyle}) {

    const {
        name ,
        image ,
        designataion ,
        description
    } = useDetail 

    const halerNmae = () => {
        alert(name)
    }

    return (
        <div className='wrapper'>
            <img
                src={image}
                height = '100px'
                width = '100px'
                style={{borderRadius : '50%'}}
            />
            <h4>{name}</h4>
            <h4>{designataion}</h4>
            <p>{description}</p>
            <button 
                // onClick={halerNmae}
                onClick = {alertFunction}
                style = {buttonStyle}
            
            >See More</button>
        </div>
    )
}