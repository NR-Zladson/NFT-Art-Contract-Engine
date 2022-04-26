import './App.css';
import { ethers } from 'ethers';
import { useState } from 'react';

function App() {

  const [account, setAccount] = useState("");
  const [data, setData] = useState( [] );
  console.log(data);
  
  const connect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    let res = await provider.send("eth_requestAccounts", []);
    setAccount(res[0]);
    getData(res[0]);
    //const signer = provider.getSigner()
  };

  const getData = (_account) => {
    const options = {method: 'GET', headers: {Accept: 'application/json'}};
  
    fetch(
      "https://api.opensea.io/api/v1/collections?asset_owner="+ _account +"&offset=0&limit=20", 
      options
    )
      .then(response => response.json())
      .then((response) => {
       console.log(response);
       setData(response);
      })
    .catch(err => console.error(err));
  };

  return (
    <div className="App">
      <p>{account}</p>
      <button onClick={connect}>Connect</button>
    </div>
  );
};


export default App;
