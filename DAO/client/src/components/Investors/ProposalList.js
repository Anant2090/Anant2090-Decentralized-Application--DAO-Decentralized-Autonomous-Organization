import { useState, useEffect } from "react";

function ProposalList({ state }) {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    const { contract } = state;

    async function getProposals() {
      const arrayProposals = await contract.methods.ProposalList().call();
      setProposals(arrayProposals);
    }

    contract && getProposals();
  }, [state,proposals]);

  return (
    <>
      <div className="list">
        <h3>Proposal List:</h3>
        {proposals.map((each) => (
          <div className="prop" key={each.id}>
            <p>ID: {each.id}</p>
            <p>Description: {each.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProposalList;
