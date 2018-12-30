import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {

   render() {
      return (
         <div className="App">
            <div>Age: {this.props.age}</div>
            <button onClick={this.props.onAgeUp}>Age Up</button>
            <button onClick={this.props.onAgeDown}>Age Down</button>
            <hr/>
            <h4>History</h4>
            <button onClick={this.props.onClearHistory}>Clear</button>
            <div>
               <ul>
                  {
                     this.props.history.map((el) => {
                        return (
                           <li key={el.id} className="historyItem" onClick={() => this.props.onDeleteItem(el.id)} >
                              {el.age}
                           </li>
                        );
                     })
                  }
               </ul>
            </div>
         </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      age: state.age,
      history: state.history
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      onAgeUp: () => dispatch({ type: 'AGE_UP', value: 1 }),
      onAgeDown: () => dispatch({ type: 'AGE_DOWN', value: 1 }),
      onDeleteItem: (id) => dispatch({ type: 'DEL_ITEM', key: id }),
      onClearHistory: () => dispatch({ type: 'CLEAR_HISTORY' })
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
