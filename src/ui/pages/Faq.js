import LandingPage from '../templates/LandingPage';
import search from '../../assets/svg/search.svg'
import Faq from '../components/card/Faq';

function FAQ() {
  const faqs = [
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."},
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."},
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."},
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."},
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."},
    {title: "What is Bitcoinaboki privacy policy?", body: "To get started is quite easy. Sign up here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds. To get started is quite easy. Sign up on here by simply providing few required information and documents. To get started is quite easy. Sign up on here by simply providing few required information and documents. Next you wait for some time to get approval. As soon as your loan is approved, you would be notified via email and SMS. Afterwards, you would provide your account details to get funds."}
  ]
  return (
    <LandingPage>
      <div className="px-16 py-18 flex flex-col items-center h-screen section-one">
        <div className="flex w-2/3 mt-32 justify-between">
          <p className="text-yellow text-3xl">
            Frequently asked<br/> questions?
          </p>
          <div className="flex opacity-50 text-white items-start">
            <img src={search} alt="o" className="self-start mt-2" width="30px" />
            <span className="text-3xl place-self-start ml-4">Search</span>
          </div>
        </div>
        <div className="flex flex-col w-2/3 overflow-y-scroll mb-12">
          {
            faqs.map( (faq, i) => <Faq key={i} title={faq.title} body={faq.body}></Faq>)
          }
        </div>
      </div>
    </LandingPage>
  );
}

export default FAQ;
