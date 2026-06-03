import Sidebar from "./Sidebar"
export default function Payment(){
    return(
        <>
        <div className="payment">
            <Sidebar/>
            <div className="payment--container">
                <div className="payment--head">
                    <div className="pt">Payment Transfer</div>
                    <p>Please provide any specific details or notes related to the payment transfer</p>
                </div>
                <div className="payment--details">
                    <h2>Transfer details</h2>
                    <p>Enter the details of the recipient</p>
                </div>
                <div className="payment--bank">
                    <div className="payment--src">
                        <div className="src">Select Source Bank</div>
                        <p>Select the bank account you want to transfer funds from</p>
                    </div>
                    <input type="dropdown" placeholder='Select Account'  className="select"/>
                </div>
                <div className="payment--note">
                    <div className="payment--tn">
                        <div className="ptn">Transfer Note(Optional)</div>
                        <p>Please provide any additional information or
                            instructions related to the transfer
                        </p>
                    </div>
                    <div className="payment--msg"><span>Dear John,</span>
                    I hope this message finds you well.
                    I am transferring $100 to your account for fun. 
                    Please confirm once you receive it.
                    </div>
                </div>
                <div id="text--ba">Bank account details</div>
                <div id="text--par">Enter the bank account details of the recipent</div>
                <div className="label--">
                    <div className="label1">
                        <label htmlFor="email">Recipient's Email Address</label>
                        <input type="email" placeholder='ex: john@gmail.com' />
                    </div>
                    <div className="label2">
                        <label htmlFor="number">Recipient's Bank Account Number</label>
                        <input type="text" inputMode='numeric' pattern='[0-9]*' placeholder='Enter the account number'/>
                    </div>
                    <div className="label3">
                        <label htmlFor="Amount">Amount</label>
                        <input type="text" inputMode='numeric' pattern='[0-9]*' placeholder='4000'/>
                    </div>       
                    <div className="payment--btn">Transfer Funds</div>
                </div>
            </div>
        </div>
        </>
    )
}