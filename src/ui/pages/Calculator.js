import LandingPage from '../templates/LandingPage';
import lighting from '../../assets/svg/lighting.svg'
import Button from '../components/common/Button';

function Calculator() {

  return (
    <LandingPage>
      <div className="px-16 py-18 flex flex-col items-center h-screen section-one">
        <div className="flex flex-col sm:w-4/5 lg:w-1/3 mt-32 justify-between">
          <p className="text-yellow text-3xl">
            Calculate your<br/> exchange
          </p>
          <div className="flex opacity-50 text-white items-start">
            It only takes minute to calculate any amount of bitcoin to naira before you sell
          </div>
        </div>
        <div className="flex flex-col sm:w-4/5 lg:w-1/3 overflow-y-scroll mb-12">

          <span className="text-white text-lg mt-4">If you sell</span>
          <div className="py-8 px-10 rounded-lg my-4 text-white bg-brown bg-opacity-25">
            <h1 className="font-bold">BTC 0.031</h1>
          </div>
          <span className="text-white text-lg">You will get</span>
          <div className="py-8 px-10 rounded-lg my-4 text-white bg-brown bg-opacity-25">
            <h1 className="font-bold">NGN 58,000.00</h1>
          </div>

          <Button className="text-brown-dark border-0 bg-yellow flex items-center m-4 font-bold">
            <img src={lighting} alt="z" width="10px"/> &nbsp; Proceed to sell
          </Button>
        </div>
      </div>
    </LandingPage>
  );
}

export default Calculator;
