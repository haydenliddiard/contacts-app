import React from 'react';
import Form from './Form';


class AddForm extends React.Component {
    render() {
        return(
            <div >
                <div className="list-name">
                {this.props.listId}

               {Object.keys(this.props.form).map( key => 
                <Form 
                    key={key} 
                    formImg={this.props.formImg}
                    contacts={this.props.contacts}
                    addContact={this.props.addContact}
                /> )}

                </div>
                
                <div className="add-btn">
                    <button 
                        className="add-form-btn"
                        onClick={this.props.addForm}
                    >
                        <img 
                            src={this.props.addBtn} 
                            alt="plus" 
                            width="32px" 
                            height="32px"
                        />
                    </button>
                    
                </div> 
                
            </div>
        )
    }
}

export default AddForm;