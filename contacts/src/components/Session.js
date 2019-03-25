import React from 'react';

class Session extends React.Component {

  myInput=React.createRef();

//short cut to binding this/ or u can use constructor
  goToList = (event) => {
    //prev default form submit
    event.preventDefault();
    //get input value
    const listName = this.myInput.current.value;
    //push to new router
    this.props.history.push(`/list/${listName}`);
  }

  render() {
    return (
        <div className="session-wrapper">
        <h1 className="entry-header" >My contact app</h1>
        <div className="nameList-cont">
        
        
            <div className="form-cont ">
            <form action="" className="main-form" onSubmit={this.goToList}>
                <h2>List Name</h2>
                <button
                type="submit"
                className="add-list-btn">
                +
                </button>
                <input
                ref={this.myInput}
                type="text"
                required
                className="list-input"
                placeholder="Name your list"
                />
                
            </form>
            </div>
            </div>
      </div>
    )
  }
}

export default Session;
