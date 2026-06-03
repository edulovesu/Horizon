import Sidebar from './Sidebar'
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}',{eager: true});
const getImageUrl = (path)=> images[`../assets/${path}`]?.default;
export default function Bank(){
    return(
        <>
        <div className="bank">
            <Sidebar/>
            <div className="bank--container">
                <div className="bank--head">My Bank Accounts</div>
                <div>Effortlessly Manage Your Banking Activities</div>
                <div>Your cards</div>
                <div className="bank--cards">
                    <div className="bank--card1"><img src={getImageUrl('card1.svg')} alt="Bank Cards" /></div>
                    <div className="bank--card1"><img src={getImageUrl('card2.svg')} alt="Bank Cards" /></div>
                    <div className="bank--card1"><img src={getImageUrl('card3.svg')} alt="Bank Cards" /></div>
                    <div className="bank--card1"><img src={getImageUrl('card4.svg')} alt="Bank Cards" /></div>
                    <div className="bank--card1"><img src={getImageUrl('card5.svg')} alt="Bank Cards" /></div>
                    <div className="bank--card1"><img src={getImageUrl('card6.svg')} alt="Bank Cards" /></div>
                </div>
            </div>
        </div>
        </>
    )
}