
import TableNews from "../pages/TableNews"
import TradingViewWidget from "../pages/TradingViewWidget"
import AboutStocks from "./AboutStocks"


export default function Home () {
  return (
    <div>

       <div>
            <h1 className="heading">Market View🗺️</h1>
            <div className="widgetcontainer">
            <div className="tradingwidget">
              <TradingViewWidget/>
              {/* <TableNews/> */}
            </div>
            <div className="tradingwidget">
              {/* <TradingViewWidget/> */}
              <TableNews/>
            </div>
            </div>
        </div>
       
        <div>
          <AboutStocks/>
        </div>

    </div>
  )
}


