import './ContactCard.styles.css'

const ContactCard = ({user}) => {
    
    return (
        <div className="contact-card-body">
            <h2>Contact</h2>
            <p>First name: {user.firstName}</p>
            <p>Last name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )

}

export default ContactCard;