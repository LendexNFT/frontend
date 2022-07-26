// import React, { useEffect, useState } from "react";
// import { CartState } from "../../context/Context";
import datas from "../../data/product_data.json";
import Layout from "../Partials/Layout";
import LoanHistory from "./LoanHistory";
import MyLoanStatus from "./MyLoanStatus";


export default function Nubicuo () {
  const allBids = datas.datas;

  return (
    <>
      <Layout>

        <MyLoanStatus allBids={allBids} className="mb-10" />
        <LoanHistory className="mb-10" />
      </Layout>
    </>
  );
}
