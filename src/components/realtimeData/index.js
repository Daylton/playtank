import StartFirebase from "../firebaseConfig";
import React from "react";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class RealtimeData extends React.Component {
  constructor() {
    super();
    this.state = {
      tableData: [],
    };
  }

  componentDidMount() {
    const dbRef = ref(db, "ranking");


    onValue(dbRef, (snapshot) => {
      let records = [];
      snapshot.forEach((childSnapshot) => {
        let nome = childSnapshot.key;
        let data = childSnapshot.val();
        records.push({ nome: nome, data: data });
      });
      this.setState({ tableData: records });
    });
  }

  render() {
    return (
      <Table className="container w-75" bordered striped >
        <thead>
          <tr>
            <th>Index</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          {this.state.tableData.map((row, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{row.nome}</td>
                <td>{row.data}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}
