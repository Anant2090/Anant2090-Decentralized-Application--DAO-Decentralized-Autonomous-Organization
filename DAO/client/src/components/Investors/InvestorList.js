// InvestorList.js
import { useState, useEffect } from "react";

function InvestorList({ state }) {
  const [investors, setInvestors] = useState([]);
  const { contract } = state;

  useEffect(() => {
    async function getInvestors() {
      try {
        const arrayInvestors = await contract.methods.getInvestorsList().call();
        console.log("Investors from contract:", arrayInvestors);
        setInvestors(arrayInvestors);
      } catch (error) {
        console.error("Error fetching investors:", error);
      }
    }

    contract && getInvestors();
  }, [contract]);

  return (
    <>
      <div className="list-investor">
        {investors.length > 0 ? (
          investors.map((each, index) => (
            <div className="prop" key={index}>
              <p>ID: {each}</p>
            </div>
          ))
        ) : (
          <p>No investors found.</p>
        )}
      </div>
    </>
  );
}

export default InvestorList;
