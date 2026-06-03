const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}',{eager: true});
const getImageUrl = (path)=> images[`../assets/${path}`]?.default;
import horizon from '../assets/Horizon-logo.png'
export default function Sidebar(){
    return(
                    <div className="payment--side">
                        <div className='payment--header'>
                            <img src={horizon} alt="logo" className='payment--logo' />
                            <h1>Horizon</h1>
                        </div>    
                        <input type="search" placeholder='       Search' className='search' />
                                        <div className='tab'>
                            <img src={getImageUrl('home--icon.svg')} alt="Home Icon" />
                            <div>Home</div>
                        </div>
                        <div className='tab'>
                            <img src={getImageUrl('dollar-circle.svg')} alt="Dollar Icon" />
                            <div>My Banks</div>
                        </div>
                        <div className='tab'>
                            <img src={getImageUrl('receipt-item.svg')} alt="Receipt Icon" />
                            <div>Transcation History</div>
                        </div>
                        <div className='tab1'>
                            <img src={getImageUrl('money-send.svg')} alt="Money send Icon" />
                            <div>Payment Transfer</div>                       
                        </div>
                        <div className='tab'>
                            <img src={getImageUrl('card-add.svg')} alt="Card add Icon" />
                            <div>Connect Bank</div>
                        </div>
                    </div>
    )
}