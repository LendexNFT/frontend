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
        <SwapOrders className="mb-10" />
        <LendBorrowOrders className="mb-10" />
        <TxHistory className="mb-10" />
      </Layout>
    </>
  );
}
