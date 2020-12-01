import Button from '../common/Button';
import lighting from '../../../assets/svg/lighten-white.svg'
import appleStore from '../../../assets/svg/apple-store.svg'
import playStore from '../../../assets/svg/play-store.svg'
import circleArrowUp from '../../../assets/svg/circle-arrow-up.svg'
import pattern4 from '../../../assets/svg/pattern4.svg'

function Footer(props) {
    return (
        <div className="Footer relative bg-yellow flex justify-center flex-col px-16 py-6 items-center">

            <div className="absolute top-0 left-0 right-0">
                <img src={pattern4} alt="pa" />
            </div>

            <div className="text-2xl font-bold text-center text-brown mt-12">
                The only thing dear to our heart is to bring you <br/> 
                closer and faster to your money.
            </div>
            <div className="flex flex-col items-center">
                <Button className="text-white border-0 bg-brown-dark flex items-center m-4">
                    <img src={lighting} alt="z" width="10px"/> &nbsp; Sell your BTC @ ₦425
                </Button>
                <div className="flex">
                    <img src={appleStore} alt="a" />
                    <img src={playStore} alt="g" />
                </div>
            </div>

            <div className="mt-8">
                <img src={pattern4} alt="pa" className="w-full" />
            </div>
            
            <div className="mt-12 flex justify-between px-16 py-6 items-center w-full text-brown">
                <div>
                    Copyright © 2020 Bitcoinaboki. All rights reserved.
                </div>
                <div>
                30a Alternative Route, off Chevron Drive,Lekki, Lagos Nigeria
                </div>
                <div>
                (239) 555-0108
                </div>
                <div className="flex items-center">
                    Back to top &nbsp; <img src={circleArrowUp} alt="`"/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Footer;
  