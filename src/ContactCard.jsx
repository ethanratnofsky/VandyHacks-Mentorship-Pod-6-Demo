import './ContactCard.styles.css'

const ContactCard = ({user, deleteCard, index}) => {
    
    return (
        <div className="contact-card-body">
            <div className='card-header'>
                <h2>Contact</h2>
                <button onClick={() => deleteCard(index)}>x</button>
            </div>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )

}

export default ContactCard;