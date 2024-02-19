import { useState, useEffect } from "react";
import gsap from "gsap";
import Web3 from "web3";
import DAO from "./contracts/DAO.json";
import "./App.css";
import Investors from "./components/Investors/Investors";
import Manager from "./components/Manager/Manager";
import InvestorList from "./components/Investors/InvestorList";
import ProposalList from "./components/Investors/ProposalList";

function App() {
  function gsapp() {
    const tl = gsap.timeline();

    tl.from(".App h1", {
      y: -300,
      duration: 0.5,
      ease: "power3.out",
    });

    tl.from(
      ".font",
      {
        y: -300,
        duration: 0.5,
        ease: "power3.out",
      },
      0.5
    ); // Delay the start of this animation by 0.2 seconds

    tl.from(
      ".label0",
      {
        y: -300,
        duration: 0.5,
        ease: "power3.out",
      },
      0.8
    ); // Delay the start of this animation by 0.4 seconds

    // Add ".mane" and ".inves" animations to the timeline without creating new timelines
    tl.from(
      ".mane",
      {
        opacity: 0,
        x: -200,
        duration: 0.7,
        stagger:5,
        duration:0.5,
      },
      1.3
    ); // Delay the start of this animation by 0.6 seconds

    tl.from(
      ".inves",
      {
        opacity: 0,
        x: 200,
        duration: 0.7,
        stagger:5,
        duration:0.5,
      },
      1.3
    ); // Delay the start of this animation by 0.6 seconds
  }

  const [state, setState] = useState({
    web3: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    async function init() {
      const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545");
      const web3 = new Web3(provider);
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = DAO.networks[networkId];
      const contract = new web3.eth.Contract(DAO.abi, deployedNetwork.address);

      setState({ web3: web3, contract: contract });
    }
    gsapp();
    init();

  }, []);
  useEffect(() => {
    const { web3 } = state;
    async function getbalance() {
      if (account != "Not connected") {
        var balance = await web3.eth.getBalance(account);
      }
      var eth = web3.utils.fromWei(balance, "ether");
      setBalance(eth);
    }
    state && getbalance();
  }, [account]);

  useEffect(() => {
    const { web3 } = state;
    const allAccounts = async () => {
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [state]);
  const selectAccount = async () => {
    let selectedAccountAddress = document.getElementById("selectNumber").value;

    if (
      selectedAccountAddress &&
      selectedAccountAddress !== "Choose an account"
    ) {
      setAccount(selectedAccountAddress);
    }
  };

  //code for account balance
  return (
    <div className="App">
      <h1>Decentralize Autonoumous Organization</h1>
      <p className="font">Connected Account: {account}</p>
      <p className="font">Available Funds: {balance} ETH</p>
      <form className="label0" id="myForm">
        <label htmlFor=""></label>
        <select className="innerBox" id="selectNumber" onChange={selectAccount}>
          <option align="center">Choose an account</option>
        </select>
      </form>
      <div className="hero">
        <div className="mane">
          <p id="mane-font">For Manager</p>
          <Manager state={state} account={account}></Manager>
        </div>
        <div className="inves">
          <p id="inves-font">For Investors</p>
          <Investors state={state} account={account}></Investors>
        </div>
      </div>
      <InvestorList state={state}></InvestorList>
      <ProposalList state={state}></ProposalList>
    </div>
  );
}
export default App;
