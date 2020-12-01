import LandingPage from '../templates/LandingPage';
import starMoving from '../../assets/svg/star-moving.svg';
import Button from '../components/common/Button';
import lighting from '../../assets/svg/lighting.svg'
import rectDot from '../../assets/svg/rect-dot.svg'
import easy from '../../assets/svg/easy.svg'
import tv from '../../assets/svg/tv.svg'
import play from '../../assets/svg/play.svg'
// import testimony from '../../assets/svg/testimony.svg'
import aboki from '../../assets/svg/Mallam_1.png'
import phone1 from '../../assets/svg/phone1.svg'
import phone2 from '../../assets/svg/phone2.svg'
import pattern4 from '../../assets/svg/pattern4.svg'
import notification from '../../assets/svg/notification.svg'
import seller from '../../assets/svg/Hand_manipulation.png'
import Badge from '../components/common/Badge';

function App() {
  return (
    <LandingPage>
      <div className="px-16 py-18 flex flex-col justify-center items-center h-screen section-one truncate">
        <div className="flex flex-col justify-center items-center mt-6 text-white">
          <p className="text-5xl text-center font-bold font-african break-words" >
            Sell Bitcoin,<br/> 
            Get Naira Asap!
          </p>
          <span className="text-sm text-center font-avenir break-words" >
            We have just one mission; to help you convert your bitcoin to naira without <br/> 
            stress. Just think of us as your surest bitcoin padi.
          </span>
          <Button className="text-brown-dark border-0 bg-yellow flex items-center m-4 font-bold">
            <img src={lighting} alt="z" width="10px"/> &nbsp; Sell your BTC @ ₦425
          </Button>
        </div>
        <div className="w-full flex overflow-hidden bottom-0 bg-red truncate" >
            <div className="sm:w-full overflow-hidden h-screen lg:w-5/12 absolute left-0 bottom-0 ">
              <img src={seller} alt="z" className="absolute bottom-0 mobile-img-landing-left" />
            </div>
            <div className="sm:w-full overflow-hidden h-screen lg:w-5/12 absolute right-0 bottom-0 ">
              <img src={aboki} alt="z" className="absolute bottom-0 mobile-img-landing-right right-0" />
            </div>
          </div>
      </div>
      <div className="px-16 py-12 flex flex-col bg-blue-lighter justify-center items-center bg-blue-lighter section-two">
        <div className="flex">
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
          <img src={starMoving} alt="*" width="60px" /> &nbsp;
        </div>
        <p className="text-white text-3xl text-center">We are the biggest buyer of bitcoin in Lagos, Nigeria</p>
      </div>
      <div className="sm:px-8 lg:px-32 sm:pt-8 lg:pt-16 flex flex-col bg-teal-100">
        <div className="flex flex-col mt-12 text-black">
          <p className="text-4xl font-bold text-center text-brown-dark font-african">
            No Long Talk!<br/>
            Sell your bitcoin as he dey hot!
          </p>
          <span className="text-sm text-center py-4">
          BitcoinAboki lets you skip the registration process and get into transacting immediately.
          </span>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-12">

          <div className="pt-6 px-6 flex justify-end">
            <img src={phone1} alt="phone 1"/>
          </div>

          <div className="pt-6 px-6 relative">
            <div className="absolute left-0 mt-8">
              <img src={notification} alt="notification"/>
            </div>
            <img src={phone2} alt="phone 2"/>
          </div>

          {/* <div className="bg-blue-lighter py-6 px-12 pb-16 text-white rounded-lg">
            <div className="w-full flex justify-end">
              <span className="w-12 h-12 bg-white rounded-full font-bold flex justify-center items-center bg-opacity-8">2</span>
            </div>
            <h2 className="pb-8 pt-4 text-xl font-bold">Send Bitcoin</h2>
            <p>You’ll be provided with a unique wallet address to send the bitcoin.</p>
          </div> */}

        </div>
      </div>

      <div className="bg-yellow flex sm:flex-col lg:flex-row py-12 px-16 sm:pt-8 lg:pt-32 relative">
        <div className="absolute top-0 left-0 right-0">
          <img src={pattern4} alt="pa" />
        </div>

        <div>
         <img src={easy} alt="*"  />
        </div>
        <div className="sm:ml-2 lg:ml-8">
          <Badge className="text-sm bg-red text-white mb-12">
           Why 5,327 Correct People use BitcoinAboki ?
          </Badge>
          <p className="text-4xl font-bold text-black">
            We’ve made it <br/>
            easy because <br />
            nobody likes <br/>
            Stress!
          </p>
          <div>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-red">Sign up required</del> &nbsp; &nbsp;
              <span className="text-black">No long thing</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-red">BVN, Wallet or OTP Required</del> &nbsp; &nbsp;
              <span className="text-black">Sharp sharp</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-red">Delayed Payment</del> &nbsp; &nbsp;
              <span className="text-black">For where ?</span>
            </p>
            <p className="flex items-center py-2">
              <img src={rectDot} alt="." width="15px" /> &nbsp; &nbsp; &nbsp;
              <del className="text-red">Withdrawal Limit</del> &nbsp; &nbsp;
              <span className="text-black">No Withdrawal Limit</span>
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <img src={pattern4} alt="pa" />
        </div>
      </div>

      <div className="px-32 py-24 flex flex-col bg-teal-100 justify-center items-center section-five">
        <div className="flex justify-center items-center">
            <img className="relative z-10" src={tv} alt="tv"  />
        </div>
        <div className="">
          <p className="text-3xl font-african py-8 text-brown-dark">
          See Weytin dey ginger us
          </p>
        </div>
        <div className="">
            <Button className="text-white border-0 bg-brown-dark flex items-center m-4">
              <img src={play} alt="play" width="10px"/> &nbsp; Watch our 1 mins video
            </Button>
        </div>
      </div>
    </LandingPage>
  );
}

export default App;
