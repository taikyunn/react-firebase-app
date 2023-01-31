import React, { Component } from "react";
import firebase from 'firebase'
import 'firebase/storage'

class SampleData extends Component {
  style = {
    fontSize: '12px',
    padding: '5px 10px'
  }

  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  this.getFirebaseData();
  }

  getFirebaseData() {
    let db = firebase.database();
    let ref = db.ref('sample/');
    let self = this;
    ref.orderByKey().limitToFirst(10).on('value', (snapshot) => {
      self.setState({
        data: snapshot.val()
      })
    })
  }

  // データ表示
  getTableData() {
    let result = [];
    if (this.state.data == null || this.state.data.length == 0) {
      return [<tr key="0"><th>No Data</th></tr>];
    }

    for(let i in this.state.data) {
      result.push(
        <tr key={i}>
          <th>{this.state.data[i].ID}</th>
          <th>{this.state.data[i].name}</th>
          <th>{this.state.data[i].message}</th>
        </tr>
      );
    }
    return result;
  }

  render() {
    if (this.state.data.length == 0) {
      this.getFirebaseData();
    }
    return (
      <table>
        <tbody>
          {this.getTableData()}
        </tbody>
      </table>
    )
  }
}

export default SampleData;
