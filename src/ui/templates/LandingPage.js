import Nav from '../components/layouts/Nav';
import Footer from '../components/layouts/Footer';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import calculator from '../../assets/svg/calculator.svg'

function LandingPage(props) {
  return (
    <div className="Landing-page ">
      <Nav className=" text-white">
        <a href="/" className=" px-6">Track Transaction</a>
        <a href="/faq" className=" px-6">FAQ</a>
        <Badge href="/calculator" className="mx-6 text-brown-dark bg-opacity-10 bg-gray-100 flex items-center justify-center">
          <img src={calculator} width="22px" alt="c" /> &nbsp;
          Aboki Calculator
        </Badge>
        <div className="px-6 text-brown">Sign In</div>
        <Button className=" border border-yellow text-yellow px-6">Sell your BTC @ ₦425</Button>
      </Nav>
      <div>
        {
          props.children
        }
      </div>
      <Footer></Footer>
    </div>
  );
}

export default LandingPage;
