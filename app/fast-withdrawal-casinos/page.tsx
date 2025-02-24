import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredCasinos from "@/components/casinos//FilteredCasinos";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import FastWithdrawalCasinos from "@/components/casinos/FastWithdrawalCasinos";

export const metadata: Metadata = {
  title: "Fast Withdrawal Casinos | Friendlybonuses",
  description: "Speed up your winnings with our comprehensive guide to Fast Withdrawal Casinos at Friendlybonuses. We know that quick and hassle-free withdrawals are a top priority for players, and our guide focuses on casinos that deliver just that. Learn about the various payment methods that ensure fast withdrawals, the associated fees, and how to navigate the withdrawal process. Plus, explore our curated list of trusted casinos that have been vetted for their speedy and reliable withdrawal services. Whether you're a casual player or a high-roller, our guide empowers you to enjoy a smoother, faster gaming experience.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <FastWithdrawalCasinos />
      {/* <TopBrands /> */}
      <FilteredCasinos />
      <GuideSlotsPage />
    </div>
  );
}
