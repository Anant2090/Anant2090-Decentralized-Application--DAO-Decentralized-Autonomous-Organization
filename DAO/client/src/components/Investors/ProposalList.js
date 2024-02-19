// ProposalList.js
import { useState, useEffect } from "react";

function ProposalList({ state }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const { contract } = state;

    async function getProposals() {
      try {
        const arrayProposals = await contract.methods.ProposalList().call();
        setProposals(arrayProposals);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      }
    }

    // Updated dependency array to include state.contract
    contract && getProposals();
  }, [state.contract]);

  return (
    <>
      <div className="list">
        <h3>Proposal List:</h3>
        {proposals.map((each) => (
          <div className="prop" key={each.id}>
            <p>ID: {each.id}</p>
            <p>Description: {each.description}</p>
            <p>Ammount:{each.amount}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProposalList;
