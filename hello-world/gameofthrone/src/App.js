import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css';
import Card from './component/Card';
import Modal from './component/Modal';

function App() {

  let [orignalData, setOrignalData] = useState([])
  let [characters, setCharacters] = useState([])
  let [selecterChar, setSelecterChar] = useState({})
  let [search, setSearch] = useState('')


  useEffect(() =>
    async function getData() {
      let res = await axios.get("https://thronesapi.com/api/v2/Characters")
      if (!res) {
        return prompt('data not found')
      }
      setOrignalData(res.data)
      setCharacters(res.data)
    }
    , [])

  // handelName = (events) => {
  //   setName(events.target.name)
  // }

  function handel(e) {
    e.preventDefault()
    setSearch(e.target.value)

  }

  let [result, setResult] = useState([])


  // for(let i=0; i<characters.length; i++){
  //  console.log(characters[i].fullName.includes(search) ? result.push(characters[i]) : '')
  // }
  // const specialChar = characters.filter(item =>(item.fullName.includes(search) ))
  //  result = (specialChar)
  // console.log('ss',result);


  useEffect(() => {
    if (search.trim().length != 0) {
      const specialChar = characters.filter(item => (item.fullName.includes(search)))
      setCharacters(specialChar)
    } else {
      setCharacters(orignalData)
    }
  }, [search])


  return (
    <div>
      <div className="text-center" >
        {
          characters.length == 0 ? <h1>DATA NOT FOUND</h1> : result
        }
      </div>

      <div>
        <form onSubmit={handel} >
          <div className="searchbar">
            <label >search</label>
            <input placeholder="You can search here" value={search} onChange={handel} />
          </div>
        </form>
      </div>
      {/* character bar start here */}
      <div className="character-block pt-5 pb-5">
        <div className="container">
          <div className="row">
            {
              characters.map(person => <Card key={person.id} person={person} setSelecterChar={setSelecterChar} />)
            }
            <Modal selecterChar={selecterChar} />
          </div>
        </div>
      </div>
      {/* character bar start here */}
    </div>
  );
}

export default App;
