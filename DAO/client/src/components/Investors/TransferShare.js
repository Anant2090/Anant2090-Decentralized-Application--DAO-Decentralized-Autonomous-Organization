import "./investors.css"
function TransferShare({state,account}){
    async function transferShare(event)
    {
        try{
            event.preventDefault();
        const {contract}=state;
        const amount=document.querySelector("#amount").value;
        const receiverAddress=document.querySelector("#to").value;

        await contract.methods.transferShare(amount,receiverAddress).send({from:account,gas:480000});
        }
        catch(error)
        {
            alert(error);
        }

    }
    return<>
    <div className="contri">
    <h3 className="ll">Transfer Share</h3>
    <form onSubmit={transferShare}>
    <label className="label1" htmlFor="amount">
    <span className="font">Amount:</span>
        </label>
        <br />
    <input type="text" id="amount"></input>
    <br />
    <label className="label1" htmlFor="to">
    <span className="font">Address:</span>
        </label>
        <br />
        
    <input type="text" id="to"></input>
    <br />
    <button className="button" type="submit">Transfer Share</button>
    </form><br></br>
    </div>
    </>
   }
   export default TransferShare;