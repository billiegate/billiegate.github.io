import Nav2 from '../components/layouts/Nav2';
import Button from '../components/common/Button';
import times from '../../assets/svg/times.svg'

function FrontPage(props) {
  return (
    <div className="Landing-page ">
      <Nav2>
        <Button className="text-white border border-white px-6">Sell your BTC @ ₦425</Button>
        <div className="mx-6 w-12 h-12 bg-white rounded-full flex justify-center items-center bg-opacity-8">
          <img src={times} alt="X" />
        </div>
      </Nav2>
      <div>
        {
          props.children
        }
      </div>
    </div>
  );
}

export default FrontPage;
