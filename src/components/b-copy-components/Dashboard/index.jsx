// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
// import datas from "../../data/product_data.json";
import dataBorrows from "../../data/borrow_data.json";
import dataLens from "../../data/lend_data.json";
import CreateOrder from "../Partials/CreateOrder";
import Layout from "../Partials/Layout";
import TxHistory from "../Partials/TxHistory";
import MyBorrowStatus from "./MyBorrowStatus";
import MyLendStatus from "./MyLendStatus";
// import MyLoanStatus from "./MyLoanStatus";


export default function Nubicuo () {
  // const allBids = datas.datas;
  const allLends = dataLens.data;
  const allBorrows = dataBorrows.data;

  return (
    <>
      <Layout>

        <div className="home-page-wrapper">
          <CreateOrder />
        </div>
        <MyLendStatus allLends={allLends} className="mb-10" />
        <MyBorrowStatus allBorrows={allBorrows} className="mb-10" />
        
        <TxHistory className="mb-10" />
      </Layout>
    </>
  );
}
