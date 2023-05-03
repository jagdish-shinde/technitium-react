
import './card.css'
export default function Card ({userData}) {

    const {
        id ,
        email ,
        first_name ,
        last_name ,
        avatar
    } = userData




//     "id": 1, 
// "email": "george.bluth@reqres.in", 
// "first_name": "George", 
// "last_name": "Bluth", 
// "avatar": "https://reqres.in/img/faces/1-image.jpg"



    return (
        <div className='wrapper'>
            <img
                src={avatar}
                height = '50px'
                width = '50px'
                style={{borderRadius : '50%'}}
            />
            <p>Email : {email}</p>
            <p>firstName : {first_name}</p>
            <p>lastName : {last_name}</p>
            <p>uniqueId : {id}</p>
       
        
            
        </div>
    )
}