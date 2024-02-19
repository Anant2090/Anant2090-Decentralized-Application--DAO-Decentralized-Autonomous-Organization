import React from 'react';
import './manager.css';

function CreateProposal({ state, account }) {
  async function ProposalCreation(event) {
    try {
      event.preventDefault();
      const description = document.querySelector("#description");
      const inputDes = description.value;
  
      const amount = document.querySelector("#amount");
      const inputbal = amount.value;
  
      const recipient = document.querySelector("#recipient");
      const inputrecipient = recipient.value;
  
      const { contract } = state;
      await contract.methods.createProposal(inputDes, inputbal, inputrecipient).send({ from: account, gas: 4800000 });
  
      // Show success alert
      alert("Proposal created successfully!");
    } catch (error) {
      alert("Error creating proposal: " + error);
    }
  }
  

  return (
    <div className="proposal-container">
       
      <form onSubmit={ProposalCreation}>
      <div className='ff'>Create proposal</div>
        
        <div className="input-box">
          <label className="label" htmlFor="description">
            <span className="font">Description:</span>
          </label>
          <input type="text" id="description" />
        </div>

        <div className="input-box">
          <label className="label" htmlFor="amount">
            <span className="font">Amount Needed (in Wei):</span>
          </label>
          <input type="text" id="amount" />
        </div>

        <div className="input-box">
          <label className="label" htmlFor="recipient">
            <span className="font">Recipient Address:</span>
          </label>
          <input type="text" id="recipient" />
        </div>

        <button className="button" type="submit">Create Proposal</button>
      </form>
    </div>
  );
}

export default CreateProposal;
