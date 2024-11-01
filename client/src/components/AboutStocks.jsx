

export default function AboutStocks  () {
    return (
      <div>
         <h1 className="heading">Learn About Markets📈</h1>
            <section className="learnmarket">
            <div>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-6 gap-1 h-full">

                    <div className="col-span-1 xl:row-span-3 bg-slate-200 m-4 p-5 rounded-3xl ring-offset-2 ring-4 ring-blue-500">
                      <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/stockmarket.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                          <div>
                          <p className="stock">Learn About Stock Market/Trading here</p>
                            <div className="text-center m-4">
                          <button type="button" className=" text-white bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 ">Click Here for STOCK MARKET</button>
                          </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-1 xl:row-span-3 bg-slate-200 m-4 p-5 rounded-3xl ring-offset-2 ring-4 ring-blue-500">
                      <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                        <img src="/Cryptomarket.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                          <div>
                          <p className="stock">Learn About Crypto Market/Trading here</p>
                            <div className="text-center m-4">
                          <button type="button" className=" text-white bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 ">Click Here for CRYPTO MARKET</button>
                          </div>
                    </div>
                  </div>
                </div>


                  <div className="col-span-1 xl:row-span-3 bg-slate-200 m-4 p-5 rounded-3xl ring-offset-2 ring-4 ring-blue-500">
                          <div className="w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5">
                            <img src="/forexmarket.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
                              <div>
                                    <p className="forex">Learn About Forex Market/Trading here</p>
                                    <div className="text-center m-4">
                                    <button type="button" className="text-white bg-gradient-to-r  from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center me-2 mb-2 ">Click Here for FOREX MARKET</button>
                                      </div>
                        </div>
                      </div>
                  </div>


                 

            </div>
            </div>
            </section>
      </div>
    )
  }
  

  