import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Neteller from "@/components/payments/Neteller";

export const metadata: Metadata = {
  title: "Neteller payments | Friendlybonuses",
  description: "Opt for the speed and efficiency of Neteller payments with our all-encompassing guide on Friendlybonuses. Known for its swift transactions and robust security measures, Neteller is a top choice among online casino enthusiasts. Our guide delves deep into the process of setting up and managing your Neteller account, highlighting its advantages and any potential drawbacks. Plus, find an exclusive list of premium casinos that accept Neteller, ensuring you can start your gaming adventure with peace of mind. Make the most of your online casino experience by mastering Neteller payments through our expert guidance!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Neteller />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
