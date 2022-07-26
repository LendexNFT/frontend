/* eslint-disable */
import { Route, Routes } from "react-router-dom";
import FourZeroFour from "./components/FourZeroFour";
import ScrollToTop from "./components/Helpers/ScrollToTop";
import DashboardPage from "./views/DashboardPage";
import ShopAssetsDetailsPage from "./views/ShopAssetsDetailsPage";

import Landing2Page from "./views/Landing2Page";
import NubicuoPage from "./views/NubicuoPage";


export default function Routers () {
  return (
    <ScrollToTop>
      <Routes>
        {/* guest routes */}

        <Route exact path="/shop-details" element={<ShopAssetsDetailsPage />} />
        <Route exact path="/app" element={<NubicuoPage />} />
        <Route exact path="/dashboard" element={<DashboardPage />} />
        {/* <Route exact path="/" element={<LandingPage />} /> */}
        <Route exact path="/" element={<Landing2Page />} />


        {/* private route */}


        <Route path="*" element={<FourZeroFour />} />
      </Routes>
    </ScrollToTop>
  );
}
