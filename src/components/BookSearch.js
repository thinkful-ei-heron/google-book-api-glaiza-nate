import React from 'react';

class BookSearch extends React.Component { 
  
    searchTermHandle = (e) => {
      e.preventDefdault()
      this.props.searchBooks(e.target.search_input.value)
    }
  
    render() { 
      // console.log(`Checking URL in term ${this.props}`);
      return (
        <form className="search_selector" onSubmit={this.searchTermHandle}> 
          <label htmlFor="search_input">Search:</label>
          <input type="text" name="search_input" id="search_input" placeholder="e.g. Henry"/>
          <button type="submit">Search</button>
        </form>
      )
    }
}

export default BookSearch;