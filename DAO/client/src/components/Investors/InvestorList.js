import {useState,useEffect} from "react"
function InvestorList({state}){
   
   const [list,setlist]=useState([]);
   useEffect(()=>{
      const {contract}=state;
      async function getInvestors()
   {
      
      const investors=await contract.methods.InvestorList().call();
      console.log(investors);
      setlist(investors);

   } 
      contract&&getInvestors();
   },[state]);
   return<>
    <div className="list">
    <h3>Investor's List</h3>
    {list.map((investorAddress)=>{
        return <div key={investorAddress}>{investorAddress}</div>
    })}
   
    </div>
   </>
  }
  export default InvestorList;