import Table from "./components/Table/Table";
import Add from "./components/Add/Add"
import Edit from "./components/Edit/Edit";
import {useState} from "react";


function App() {
  const [items,setItems] = useState([]);
  const [roll,setRoll] = useState("");
  const [edited,setEdited] = useState("");
  console.log("This is edited " + edited);

  function onEdit(roll){
    setRoll(roll);
  };

  function handleEdit(newData){
    setEdited((newData) => [...newData,newData]);
  }
  function handleAddItems(item) {
    setItems((items) => [...items,item]);
  }

  function handleDelete(roll) {
    setItems((items) => items.filter((item) => item.roll !== roll));
  }

  console.log(items);
  return (
    <div className="App">
      <Table data={items} onDelete={handleDelete} onEdit={onEdit}/>
      <Add addItems={handleAddItems} />
      <Edit roll={roll} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
