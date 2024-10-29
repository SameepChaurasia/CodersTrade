import { useEffect, useRef } from 'react';

export default function TradingViewWidget() {

  const container = useRef();
  useEffect(
    () => {
      const currentContainer = container.current;
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
  "width": 900,
  "height": 350,
  "currencies": [
    "EUR",
    "USD",
    "JPY",
    "GBP",
    "CHF",
    "AUD",
    "CAD",
    "NZD",
    "CNY",
    "INR"
  ],
  "isTransparent": false,
  "colorTheme": "dark",
  "locale": "en",
  "backgroundColor": "#1D222D"
}`;
// container.current.appendChild(script);
  currentContainer.appendChild(script);

  return () => {
    currentContainer.removeChild(script);
  };

},[]);

  return (
    <div>
    <div className="tradingview-widget-container" ref={container}>
       <div className="tradingview-widget-container__widget"></div> 
    </div>
    </div>
  );
}
   
