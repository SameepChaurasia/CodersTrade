import { useEffect ,useRef} from "react"

export default function TableNews()  {
    const container = useRef();

    useEffect(
        () => {
          const currentContainer = container.current;
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML =
            `{
                "feedMode": "all_symbols",
                "isTransparent": false,
                "displayMode": "regular",
                "width": 400,
                "height": 350,
                "colorTheme": "dark",
                "locale": "en"
              }`;
              currentContainer.appendChild(script);

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