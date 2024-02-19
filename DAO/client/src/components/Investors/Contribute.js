import "./investors.css"
function Contribute({state,account}){

  async function contribute(event)
  {
    try{
      event.preventDefault();
    const {contract}=state;
    const contriAmmount=document.querySelector("#weiValue").value;
    await contract.methods.contribution().send({from:account,gas:480000,value:contriAmmount});
    

    
    console.log(contriAmmount);
    }
    catch(error)
    {
      alert(error);
    }
  }
 return<>
 <div className="contri">
 <form onSubmit={contribute}>
  <h3 className="ll">Contribute</h3>

   <label className="label1" htmlFor="weiValue">
   <span className="font">Contribution Amount: </span>
   <br />
        </label>
    <input type="text" id="weiValue" ></input>
    <br />
    <button type="submit" className="button">Contribute</button>
    </form>
 </div>
    </>
}
export default Contribute;