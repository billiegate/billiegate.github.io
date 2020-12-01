import { useState } from "react";

function Faq(props) {

    const [show, setShow] = useState(false)

    return (
      <div className="py-8 px-10 rounded-lg my-4 text-white bg-brown bg-opacity-25">
          <div className="relative">
            <div>
                <div className={`${ show ? "cancel": "open"} transition-transform`} onClick={() => setShow(!show)}></div>
            </div>
            <h2 className="font-bold">{props.title}</h2>
            <div className={`mt-4 break-normal text-sm transition duration-500 ease-in-out ${ show ? "h-auto": "h-0"} overflow-hidden `}>{props.body}</div>
          </div>
      </div>
    );
  }
  
  export default Faq;
  