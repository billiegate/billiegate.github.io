import Button from '../common/Button';
import lighting from '../../../assets/svg/lighting.svg'
import appleStore from '../../../assets/svg/apple-store.svg'
import playStore from '../../../assets/svg/play-store.svg'
import circleArrowUp from '../../../assets/svg/circle-arrow-up.svg'

function Footer(props) {
    return (
        <div className="Footer bg-white flex justify-center flex-col px-16 py-6 items-center">
            <div className="text-2xl font-bold text-center text-black mt-12">
                The only thing dear to our heart is to <br/> 
                bring you closer and faster to your money.
            </div>
            <div className="flex flex-col items-center">
                <Button className="text-white border bg-green flex items-center m-4">
                    <img src={lighting} alt="z" width="10px"/> &nbsp; Sell your BTC @ ₦425
                </Button>
                <div className="flex">
                    <img src={appleStore} alt="a" />
                    <img src={playStore} alt="g" />
                </div>
            </div>
            <div className="mt-12 flex justify-between px-16 py-6 items-center w-full text-gray-500">
                <div>
                    Copyright © 2020 Bitcoinaboki. All rights reserved.
                </div>
                <div className="flex items-center">
                    Back to top &nbsp; <img src={circleArrowUp} alt="`"/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;
  