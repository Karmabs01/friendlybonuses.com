import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Pix from "@/components/payments/Pix";

export const metadata: Metadata = {
  title: "Pix payments | Friendlybonuses",
  description: "Step into the future of online casino payments with our comprehensive guide to Pix on Friendlybonuses. Particularly popular in Brazil but expanding globally, Pix offers instant transactions with unparalleled security. Our in-depth guide covers everything you need to know, from setting up your Pix account to processing times for deposits and withdrawals. Plus, get a list of top-rated casinos that support Pix, ensuring a fast and secure gaming experience. Stay ahead of the curve and enhance your gameplay by mastering Pix payments with our expert guidance!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Pix />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
