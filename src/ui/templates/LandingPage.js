import Nav from '../components/layouts/Nav';
import Footer from '../components/layouts/Footer';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import calculator from '../../assets/svg/calculator.svg'

function LandingPage(props) {
  return (
    <div className="Landing-page ">
      <Nav>
        <a href="/" className="text-black px-6">Track Transaction</a>
        <a href="/faq" className="text-black px-6">FAQ</a>
        <Badge className="mx-6 bg-gray-200 text-black">
          <img src={calculator} width="22px" alt="c" /> &nbsp;
          Aboki Calculator
        </Badge>
        <div className="px-6">Sign In</div>
        <Button className="text-black border border-black px-6">Sell your BTC @ ₦425</Button>
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
