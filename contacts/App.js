import React from 'react';
import Header from './Header';
import AddForm from './AddForm';
import ContactList from './ContactList';
import emptyForm from '../emptyForm';
import base from '../base';

class App extends React.Component {
  
  state = {
    contacts: {},
    addBtn: "../../images/plus.svg",
    formImg: {},
    form: "",
    show: false,
    editId: null,
    listName: this.props.match.path
  }

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.listId}/contacts`,{
      context: this,
      state: 'contacts'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addContact = contact => {

    const contacts = {...this.state.contacts};

    contacts[`contact${Date.now()}`] = contact;

    this.setState({ contacts });

  };

  addForm = () => {

    this.setState({ formImg: "../../images/profile-pic.svg" })

    if (this.state.form === "" ) {
      this.setState({ form: emptyForm })
    } else {
      this.setState({ form: "" })
    }

    if (this.state.addBtn === "../../images/plus.svg") {
      this.setState({ 
        addBtn: "../../images/minus.svg" 
      })
    } else  {
      this.setState({ 
        addBtn: "../../images/plus.svg" 
      })
    }

  };

  unhide = (editId, key) => {
   
    const contacts = {...this.props.contacts};
    contacts[key] = editId;
    
    
      this.setState({ 
        show: !this.state.show,
        editId: editId
      })
  }

  updateContacts = (key, updateContact) => {

    const contacts = {...this.state.contacts}

    contacts[key] = updateContact;

    this.setState({ contacts });

  };

  deleteContact = (key) => {

    const contacts = {...this.state.contacts};

    contacts[key] = null;

    this.setState({ contacts });

  };

  render() {

    return (
      <div className="app-container">

        <Header />

        <AddForm 
          form={this.state.form}
          formImg={this.state.formImg}
          contacts={this.state.contacts}
          listId={this.props.match.params.listId} 
          addBtn={this.state.addBtn}
          addContact={this.addContact}
          addForm={this.addForm}
        />

        <ContactList 
          editId={this.state.editId}
          show={this.state.show}
          contacts={this.state.contacts}
          updateContacts={this.updateContacts}
          deleteContact={this.deleteContact}
          unhide={this.unhide}
        />
  
      </div>
    )
  }
}

export default App;