import "./manager.css"
function ExecuteProposal({state,account}){

    async function proposalExecute(event)
    {
        try{
            event.preventDefault();
        const proposal_Id=document.querySelector("#id").value;
        const {contract}=state;

        await contract.methods.executeProposal(proposal_Id).send({from:account,gas:480000});
        console.log("executed");
        }
        catch(error)
        {
            alert(error);
        }

    }
   
    return<><form onSubmit={proposalExecute}>
    <label className="label1" htmlFor="proposalId">
    <span className="font">Proposal Id:</span>
        </label>
    <input type="text" id="id"></input>
    <button className="button" type="submit">Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;