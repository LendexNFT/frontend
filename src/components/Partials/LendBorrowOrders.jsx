import React from "react";
import dataImage1 from "../../assets/images/data-table-user-1.png";
import dataImage2 from "../../assets/images/data-table-user-2.png";
import dataImage3 from "../../assets/images/data-table-user-3.png";
import dataImage4 from "../../assets/images/data-table-user-4.png";

export default function OpenBorrowOrders ({ className, gridTitle, maxHeight}) {
  return (
    <div className={`update-table w-full p-8 bg-white overflow-hidden rounded-2xl section-shadow ${className || ""}`}>
      <div className="header w-full sm:flex justify-between items-center mb-5">
        <div className="flex space-x-2 items-center mb-2 sm:mb-0">
          <h1 className="text-xl font-bold text-dark-gray tracking-wide">
            { gridTitle || "LENDING/BORROWING ORDERS" }
          </h1>
          <span className="w-7 h-7 flex justify-center items-center bg-pink text-white text-xs rounded-full">
            84
          </span>
        </div>
      </div>
      <div className={`relative w-full overflow-auto sm:rounded-lg ${maxHeight || ""}`}>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="text-base text-thin-light-gray whitespace-nowrap px-2 border-b default-border-bottom ">
              <td className="py-2 w-[400px] block whitespace-nowrap text-left">Asset Offered</td>
              <td className="py-2 w-[200px] whitespace-nowrap text-center">Order type</td>
              <td className="py-2 w-[400px] block whitespace-nowrap text-left">Asset or Collateral Required</td>
              <td className="py-2 whitespace-nowrap text-left">Time / Expires in</td>
              <td className="py-2 whitespace-nowrap text-center">Status</td>
            </tr>
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage2}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Steel Shield
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">--</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <span className="font-bold text-sm text-thin-dark-gray">Reserved To:</span>
                          <span className="pl-2 text-sm text-thin-dark-gray">ANYONE</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium">
                    <h1 className="font-bold text-xl text-dark-gray">
                      BORROW
                    </h1>
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage3}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Golden Tiger
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">2</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">317, 1563</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-thin-dark-gray">Interests:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">10 $USDC</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC20</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-base  text-thin-light-gray whitespace-nowrap px-2">
                  8 Days
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className="text-sm text-white bg-purple px-2.5 py-1.5 rounded-full">Open</button>
              </td>
            </tr>
            
            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage4}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Blue Metal Shark
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">3211</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <span className="font-bold text-sm text-thin-dark-gray">Reserved To:</span>
                          <span className="pl-2 text-sm text-thin-dark-gray">ANYONE</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium">
                    <h1 className="font-bold text-xl text-dark-gray">
                      LEND
                    </h1>
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage2}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Steel Shield
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">4421</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-thin-dark-gray">Interests:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">4 $MATIC</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC20</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                  
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-base text-thin-light-gray whitespace-nowrap px-2">
                  2Days 12Hs
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm text-white bg-light-green px-2.5 py-1.5 rounded-full">Fulfilled</span>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Lethal sword
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">851</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <span className="font-bold text-sm text-thin-dark-gray">Reserved To:</span>
                          <span className="pl-2 text-sm text-thin-dark-gray">ANYONE</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium">
                    <h1 className="font-bold text-xl text-dark-gray">
                      LEND
                    </h1>
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage4}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Blue Metal Shark
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">2</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">347</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-thin-dark-gray">Interests:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">10 $MATIC</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC20</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-base  text-thin-light-gray whitespace-nowrap px-2">
                  10 Days
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className="text-sm text-white bg-purple px-2.5 py-1.5 rounded-full">Open</button>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Lethal sword
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">--</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <span className="font-bold text-sm text-thin-dark-gray">Reserved To:</span>
                          <span className="pl-2 text-sm text-thin-dark-gray">ANYONE</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium">
                    <h1 className="font-bold text-xl text-dark-gray">
                      BORROW
                    </h1>
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage3}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Golden Tiger
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">3</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">347, 7812, 8563</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-thin-dark-gray">Interests:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">15 $USDC</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC20</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-base  text-thin-light-gray whitespace-nowrap px-2">
                  15 Days
                </span>
              </td>
              <td className="text-center py-4">
                <button type="button" className="text-sm text-white bg-purple px-2.5 py-1.5 rounded-full">Open</button>
              </td>
            </tr>

            <tr className="bg-white border-b hover:bg-gray-50">
              <td className="py-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage3}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Golden Tiger
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">1</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">851</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={2}>
                          <span className="font-bold text-sm text-thin-dark-gray">Reserved To:</span>
                          <span className="pl-2 text-sm text-thin-dark-gray">ANYONE</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="text-center py-4 px-2">
                <div className="flex space-x-1 items-center justify-center">
                  <span className="text-base text-dark-gray font-medium">
                    <h1 className="font-bold text-xl text-dark-gray">
                      LEND
                    </h1>
                  </span>
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex space-x-2 items-center">
                  <div className="w-[60px] h-[60px] rounded-full overflow-hidden flex justify-center items-center">
                    <img
                      src={dataImage1}
                      alt="data"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <table>
                      <tr>
                        <td>
                          <h1 className="font-bold text-xl text-dark-gray">
                            Lethal sword
                          </h1>
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">QTY:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">2</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-purple">ID:</span>
                          <span className="pl-2 text-sm text-purple">223</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC721</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="font-bold text-sm text-thin-dark-gray">Interests:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">20 $MATIC</span>
                          
                        </td>
                        <td>
                          <span className="pl-5 font-bold text-sm text-thin-dark-gray">Type:</span>
                          <span className="pl-2 text-sm text-thin-light-gray">ERC20</span>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </td>
              <td className="py-4 text-center">
                <span className="text-base text-white bg-light-red px-2.5 py-1.5 rounded-full">
                  Overdue
                </span>
              </td>
              <td className="text-center py-4">
                <span className="text-sm text-white bg-light-green px-2.5 py-1.5 rounded-full">Fulfilled</span>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}
