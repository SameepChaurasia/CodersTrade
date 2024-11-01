import { useEffect ,useRef} from "react"

export default function News()  {
    const container = useRef();

    useEffect(
        () => {
          const currentContainer = container.current;
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `{
                   "symbols": [
    {
      "proName": "FOREXCOM:SPXUSD",
      "title": "S&P 500 Index"
    },
    {
      "proName": "FOREXCOM:NSXUSD",
      "title": "US 100 Cash CFD"     },
    {
      "proName": "FX_IDC:EURUSD",
      "title": "EUR to USD"
     },
    {
      "proName": "BITSTAMP:BTCUSD",
      "title": "Bitcoin"
    },
    {
      "proName": "BITSTAMP:ETHUSD",
       "title": "Ethereum"
     }
   ],
   "showSymbolLogo": true,
   "isTransparent": true,
   "displayMode": "abslute",
   "colorTheme": "dark",
 "locale": "en"
}
            }`;
            // container.current.appendChild(script);
            currentContainer.appendChild(script);
            // currentContainer.removeChild(script);

          return () => {
            currentContainer.removeChild(script);
          };
        
        },[]);

  return (
    
  
    <div className="tradingview-widget-container" ref={container}>
    <div className="tradingview-widget-container__widget"></div>
  </div>
  
  );
  }

      
