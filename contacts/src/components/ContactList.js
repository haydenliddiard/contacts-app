import React from 'react';
import ContactE from './ContactE';

class ContactList extends React.Component {
    render() {
        return (
           
            <div className="contact-list">

{ /*swap contact for editcontacts */}
{/*ContactE is a copy of contact */}
            
            {Object.keys(this.props.contacts).map( contact =>
                <ContactE
                key={contact}
                    copiedContact={this.props.copiedContact}
                    updateCopy={this.props.updateCopy}
                    editId={this.props.editId}
                    show={this.props.show}
                    contacts={this.props.contacts}
                    index={contact}
                    contact={this.props.contacts[contact]}
                    updateContacts={this.props.updateContacts}
                    deleteContact={this.props.deleteContact}
                    unhide={this.props.unhide}
                /> 
            )}

            </div>
            
        )
    }
}

export default ContactList;