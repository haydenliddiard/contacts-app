import React from 'react';
import EditContact from './EditContact';



class Contact extends React.Component {

     handleClick = (contact, editId) => {
        
         this.props.unhide(editId, contact)

     } 

    render() {
        return (
            <div className="contact">
            
                <div>

                    <div className="contact-details" >
                        {this.props.contact.name}
                    </div>

            </div> 

                {
                    this.props.show && this.props.editId === this.props.contact ? (
                    <EditContact 
                    editId={this.props.contact}
                    updateContacts={this.props.updateContacts}
                    index={this.props.index}
                    contact={this.props.contact}
                    show={this.props.show}
                    deleteContact={this.props.deleteContact}
                    /> 
                ): null}

             <button 
                onClick={() => this.handleClick(this.props.editId, this.props.contact)}
                >
                edit
            </button>
                        
            </div>
        )
    }
}

export default Contact;