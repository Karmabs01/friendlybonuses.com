import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Trustly from "@/components/payments/Trustly";

export const metadata: Metadata = {
  title: "Trustly payments | Friendlybonuses",
  description: "Unlock the benefits of using Trustly for your online casino transactions with our comprehensive guide at Friendlybonuses. Known for its speed and security, Trustly is quickly becoming a go-to payment option for savvy players. Our resourceful guide dives into how Trustly works, its advantages, and even its limitations. Plus, find out which top-rated casinos offer Trustly as a payment option, so you can begin your gaming journey with confidence. Don’t miss out on a seamless and secure gaming experience—learn all about Trustly payments with us!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Trustly />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
