import React from 'react';

class EditContact extends React.Component {
    
    handleChange = (e) => {
        
        const updateContact = {

            ...this.props.editId,
            
            [e.currentTarget.name]: e.currentTarget.value
            
        };
        
        this.props.updateContacts(this.props.index, updateContact)
  
    };

    render() { 

        return (
            <form onSubmit={this.submitContact}>

            <button 
                className="delete-btn"
                onClick={() => this.props.deleteContact(this.props.index)}
            >
            X
            </button>

            <div className="contact-form">
                <input 
                name="name"
                value={this.props.editId.name}
                onChange={this.handleChange}
                />

                <input 
                name="phone"
                value={this.props.editId.phone}
                onChange={this.handleChange}
                />

                <input 
                name="address"
                value={this.props.editId.address}
                onChange={this.handleChange}
                />
            </div>
             
                <button type="submit">save</button>
            </form>
        )
    }
}

export default EditContact;