import React from 'react';

class EditContact extends React.Component {

    
    handleCopy =  (e) =>  {
        
        const updateCopy = {

            ...this.props.copiedContact,
            
            
            [e.currentTarget.name]: e.currentTarget.value
            
        };
        
        this.props.updateCopy( updateCopy)
  
    };

    handleChange = (e) => {
        
        const updateContact = {

            // ...this.props.editId,
            ...this.props.copiedContact,
            
            
            [e.currentTarget.name]: e.currentTarget.value
            
        };
        
        this.props.updateContacts(this.props.index, updateContact)
        
    };

    render() { 

        return (
            <div>

            <form>
                
            <button 
                    className="delete-btn"
                    type="button"
                    onClick={() => this.props.deleteContact(this.props.index)}
                >
                X
                </button>
                
                <div className="contact-form">
                    <input 
                    name="name"
                    value={this.props.copiedContact.name}
                    onChange={this.handleCopy}
                    />

                    <input 
                    name="phone"
                    value={this.props.copiedContact.phone}
                    onChange={this.handleCopy}
                    />

                    <input 
                    name="address"
                    value={this.props.copiedContact.address}
                    onChange={this.handleCopy}
                    />
                </div>
                <button type="button" onClick={this.handleChange}>Save Me</button>
                
            </form>
            </div>
        )
    }
}

export default EditContact;