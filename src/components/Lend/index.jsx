import Layout from "../Partials/Layout";
import LendBorrowOrders from "../Partials/LendBorrowOrders";
import MyAssetsWidget from "./MyAssetsWidget";

export default function Lend () {
  return (
    <>
      <Layout>
        <div className="my-wallet-wrapper w-full mb-10">
          <div className="main-wrapper w-full">
            <div className="mb-5"><h1 className="text-26 font-bold text-dark-gray">Create Lending Order</h1></div>
            {/* Continer Assets Supply and Assets Borrow widgets */}
            <div className="recent-and-investment grid lg:grid-cols-2 grid-cols-1 2xl:gap-[40px] xl:gap-7 gap-4 lg:h-[416px] w-full  justify-between">
              <div className=" h-full">
                <div className="investment-widget w-full min-h-max p-4 rounded-2xl bg-white flex flex-col justify-between">
                  {/* heading */}
                  <div className="heading mb-5 flex justify-between items-center">
                    <h3 className="text-xl font-bold text-dark-gray">
                      My Assets
                    </h3>
                  </div>
                  <div className="h-[286px]">
                    <MyAssetsWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LendBorrowOrders className="mb-10" gridTitle="MY LENDING ORDERS" maxHeight="max-h-96" />
        </div>
      </Layout>
    </>
  );
}
