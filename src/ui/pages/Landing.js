import LandingPage from '../templates/LandingPage';
import starMoving from '../../assets/svg/star-moving.svg';
import Button from '../components/common/Button';
import lighting from '../../assets/svg/lighting.svg'
import rectDot from '../../assets/svg/rect-dot.svg'
import easy from '../../assets/svg/easy.svg'
import arrowLeft from '../../assets/svg/arrow-left.svg'
import arrowRight from '../../assets/svg/arrow-right.svg'
import testimony from '../../assets/svg/testimony.svg'
import Badge from '../components/common/Badge';

function App() {
  return (
    <LandingPage>
      <div className="px-16 py-6 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mt-6 text-black">
          <p className="text-5xl text-center font-bold">
            Sell Bitcoin, Get Naira Asap!
          </p>
          <span className="text-sm text-center">
            We have just one mission; to help you convert your bitcoin to naira without <br/> 
            stress. Just think of us as your surest bitcoin padi.
          </span>
          <Button className="text-white border bg-green flex items-center m-4">
            <img src={lighting} alt="z" width="10px"/> &nbsp; Sell your BTC @ ₦425
          </Button>
        </div>
      </div>
      <div className="px-16 py-6 flex flex-col bg-blue-lighter justify-center items-center">
        <div className="flex">
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
        </div>
        <p className="text-yellow text-3xl">We are the biggest buyer of bitcoin in Lagos, Nigeria</p>
      </div>
      <div className="px-32 py-16 flex flex-col bg-teal-100">
        <div className="flex flex-col mt-12 text-black">
          <p className="text-4xl font-bold">
            No Long Talk!<br/>
            Sell your Bitcoin<br/> 
            in 2 easy steps!
          </p>
          <span className="text-sm">
            A tool that lets you skip the registration process and get straight into transacting immediately.
          </span>
        </div>
        <div className="grid grid-cols-3 gap-4 my-12">

          <div className="bg-green py-6 px-12 pb-16 text-white rounded-lg">
            <div className="w-full flex justify-end">
              <span className="w-12 h-12 bg-white rounded-full font-bold flex justify-center items-center bg-opacity-8">1</span>
            </div>
            <h2 className="pb-8 pt-4 text-xl font-bold">Provide Bank Details</h2>
            <p>All we need is your Bank and account number. No BVN required.</p>
          </div>

          <div className="bg-blue-lighter py-6 px-12 pb-16 text-white rounded-lg">
            <div className="w-full flex justify-end">
              <span className="w-12 h-12 bg-white rounded-full font-bold flex justify-center items-center bg-opacity-8">2</span>
            </div>
            <h2 className="pb-8 pt-4 text-xl font-bold">Send Bitcoin</h2>
            <p>You’ll be provided with a unique wallet address to send the bitcoin.</p>
          </div>

          <div className="bg-blue-lighter py-6 px-12 pb-16 text-white rounded-lg">
            <div className="w-full flex justify-end">
              <span className="w-12 h-12 bg-white rounded-full font-bold flex justify-center items-center bg-opacity-8">2</span>
            </div>
            <h2 className="pb-8 pt-4 text-xl font-bold">Get Naira Sharpsharp</h2>
            <p>As soon as the Bitcoin is confirmed (e no dey take time), your alert go show .</p>
          </div>

        </div>
      </div>

      <div className="bg-blue-lighter flex py-12 px-16 pt-32">

        <div>
         <img src={easy} alt="*" width="523px" />
        </div>
        <div className="ml-8">
          <Badge className="text-sm bg-blue text-white mb-12">
           Why 5,327 Correct People use BitcoinAboki ?
          </Badge>
          <p className="text-4xl font-bold text-white">
            We’ve made it <br/>
            easy because <br />
            nobody likes <br/>
            Stress!
          </p>
          <div>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-green">Sign up required</del> &nbsp; &nbsp;
              <span className="text-yellow">No long thing</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-green">BVN, Wallet or OTP Required</del> &nbsp; &nbsp;
              <span className="text-yellow">Sharp sharp</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-green">Delayed Payment</del> &nbsp; &nbsp;
              <span className="text-yellow">For where ?</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-green">Withdrawal Limit</del> &nbsp; &nbsp;
              <span className="text-yellow">No Withdrawal Limit</span>
            </p>
          </div>
        </div>
      </div>

      <div className="px-32 py-24 flex bg-teal-100">
        <div className="w-1/2 flex justify-center items-center">
          <div className="block-inline w-2/3 relative border-8 rounded-b-full rounded-tr-full rounded-tl-md z-20">
            <img className="relative z-10 w-full" src={testimony} alt="testimony" width="448px"  />
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-left flex-col">
          <div className="w-2/3">
            <q className="text-xl font-bold mb-2">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </q>
            <br/><br/>
            <span className="text-xs mt-4">
            - Simbi Olarotimi, <small>On defeating temptations</small>
            </span>
          </div>

          <div className="flex justify-left w-full">
            <Button className="text-white bg-green flex items-center m-4">
              <img src={arrowLeft} alt="<-" width="27px" />
            </Button>
            &nbsp;
            <Button className="text-white bg-green flex items-center m-4">
              <img src={arrowRight} alt="->" width="27px" />
            </Button>
          </div>
          
        </div>
      </div>
    </LandingPage>
  );
}

export default App;
