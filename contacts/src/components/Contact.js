import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            
            <div className="contact">
                <div 
                className="contact-details" 
                >
                    {this.props.contact.name}
                </div>
                
                <button 
                    className="delete-btn"
                    onClick={() => this.props.deleteContact(this.props.index)}
                >
                X
                </button>
            </div>

        )
    }
}

export default Contact;