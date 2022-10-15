import bank1 from "../../assets/images/bank-1.png";
import { CartState } from "../../context/Context";
// import IncDecCounter from "./IncDecCounter";

export default function YourBorrowsWidget () {
  const {
    // state: { cart },
    yourBorrowsAssetsState: { yourBorrowsCart },
  } = CartState();

  return (

    <>
      <div className="my-wallets w-full h-full overflow-auto overflow-x-auto bg-white rounded-lg p-6">
        <div className="mb-4">
          <h1 className="text-xl font-bold tracking-wide text-dark-gray">
            Assets required as collateral
          </h1>
        </div>
        <div className="content-area">
          {yourBorrowsCart.map(product => (
            <div key={product.id} className="flex justify-between items-center mb-6">
              <div className="flex space-x-5 items-center">
                <div className="account-name flex space-x-4 items-center">
                  <div className="icon w-14 h-14 transition duration-300 ease-in-out rounded-full flex justify-center items-center bg-light-purple">
                    <img src={bank1} alt="" />
                    {/* <img src={require(`../../assets/images/${product.imagenAsset}`)} alt="" /> */}
                  </div>
                  <div className="name">
                    <p className="text-xl font-bold text-dark-gray tracking-wide">
                      {product.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex space-x-5 items-center">
                <div>
                  <p className="text-base text-dark-gray whitespace-nowrap px-2">
                    {/* <IncDecCounter /> */}
                    1
                  </p>
                  <p className="text-sm text-thin-light-gray text-center">
                    <button
                      type="button"
                      onClick={() =>
                        yourBorrowsCart.map('')                      }
                      className="text-sm px-[10px]  py-[6px] rounded-full bg-red-400 text-white capitalize"
                    >
                      Remove
                    </button>
                  </p>
                </div>
              </div>
            </div>
          )
          )}

        </div>
      </div>
    </>
  );
}
