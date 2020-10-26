import FrontPage from '../templates/FrontPage';
import search from '../../assets/svg/search.svg'

function App() {
  return (
    <FrontPage>
      <div className="px-16 py-6 flex flex-col bg-blue-lighter items-center">
        <div className="flex w-2/3 justify-between">
          <p className="text-yellow text-3xl">
            Frequently asked<br/> questions?
          </p>
          <div className="flex opacity-50 text-white items-start">
            <img src={search} alt="o" className="self-start mt-2" width="30px" />
            <span className="text-3xl place-self-start ml-4">Search</span>
          </div>
        </div>
        <div className="flex flex-col w-2/3">

        </div>
      </div>
    </FrontPage>
  );
}

export default App;
