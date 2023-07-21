import './App.css';
import Header from './Components/Header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState, React } from 'react';
import Fields from './Components/Fields';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function nameHandler(e) {
    setName(e.target.value)
  }

  function emailHandler(e) {
    setEmail(e.target.value)
  }

  function addData() {
    setData([...data, { name, email }])
    setName("");
    setEmail("");
  }
  function removeItem(index) {
    data.splice(index, 1)
    setData([...data])
  }

  return (
    <div className="App">
      <Header />

      {/* The inputs of the form will be shown here */}

      <div className='form'>

        <TextField
          onChange={(event) => nameHandler(event)}
          value={name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />

        <TextField
          onChange={(event) => emailHandler(event)}
          value={email}
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
        />

        <Button onClick={addData} variant="contained" color='success'><AddIcon /></Button>

      </div>
      {/* The items will be displayed here  */}
      <div className="display">
        <div className='values'>
          <h4>Name</h4>
          <h4>E-mail</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((element, index) => {
            return (
              <Fields a={element.name} b={element.email} index={index} c={() => removeItem(index)} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
