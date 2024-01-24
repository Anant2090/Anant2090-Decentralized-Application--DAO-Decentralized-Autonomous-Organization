import "./manager.css"
function CreateProposal({state,account}){
    async function ProposalCreation(event) //in this parameter the javascript auto filll val
    {
       try{
        event.preventDefault();//page will not reload if form get submited  
        const description=document.querySelector("#description");
        const inputDes=description.value;
        console.log(inputDes);

        const amount=document.querySelector("#amount");
        const inputbal=amount.value;
        console.log(inputbal);

        const recipient=document.querySelector("#recipient");
        const inputrecipient=recipient.value;
        console.log(inputrecipient);

        const {contract}=state;
        await contract.methods.createProposal(inputDes,inputbal,inputrecipient).send({from:account,gas:4800000});
       }
       catch(error)
       {
        alert(error);
       }

        
    }
   
    return<><form onSubmit={ProposalCreation} >
    <label className="label1" htmlFor="name">
    <span className="font">Description:</span>
    </label>
    <input type="text" id="description"></input>
    <label className="label1" htmlFor="amount">
    <span className="font"> Amount Neeed(in Wei):</span>
        </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="recipient">
    <span className="font">Recipient Address:</span>
        </label>
    <input type="text" id="recipient"></input>
    <button className="button" type="submit">Create Proposal</button>
    </form><br></br></>
    
   }
   export default CreateProposal;