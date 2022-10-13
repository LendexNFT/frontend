// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
// import datas from "../../data/product_data.json";
import CreateOrder from "../Partials/CreateOrder";
import Layout from "../Partials/Layout";
import LendBorrowOrders from "../Partials/LendBorrowOrders";
import SwapOrders from "../Partials/SwapOrders";
import TxHistory from "../Partials/TxHistory";

export default function Overview () {
  // const allBids = datas.datas;
  // const allLends = dataLends.data;
  // const allBorrows = dataBorrows.data;

  return (
    <>
      <Layout>
        <div className="home-page-wrapper">
          <CreateOrder />
        </div>
        <SwapOrders className="mb-10" gridTitle="LAST SWAP ORDERS" maxHeight="max-h-96"/>
        <LendBorrowOrders className="mb-10" gridTitle="LAST LENDING/BORROWING ORDERS" maxHeight="max-h-96"/>
        <TxHistory className="mb-10" gridTitle="LAST TRANSACTIONS" maxHeight="max-h-96"/>
      </Layout>
    </>
  );
}
