import React from 'react';

class Form extends React.Component {

    nameRef = React.createRef();
    phoneRef = React.createRef();
    addressRef = React.createRef();

    createContact = e => {
        e.preventDefault();

        const contact = {
            name: this.nameRef.current.value,
            phone: this.phoneRef.current.value,
            address: this.addressRef.current.value
        };

        this.props.addContact(contact);

        e.currentTarget.reset();

    };

    render() {
        return (
            <form 
                className="form" 
                onSubmit={this.createContact}
            >
            <div>
                <img 
                    src={this.props.formImg} 
                    alt="default" width="48px" 
                    height="48px" 
                />
            </div>
                <div>
                    
                    <input
                        ref={this.nameRef}
                        placeholder="name"
                    />

                    <input
                        ref={this.phoneRef}                  
                        placeholder="phone"
                    />

                    <input
                        ref={this.addressRef}
                        placeholder="address"
                    />

                </div>
                <div >
                    <button 
                        className="save-contact"
                        type="submit"
                    >
                    save
                    </button>
                </div>
            </form>
        )
    }
}

export default Form;