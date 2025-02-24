import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredBonuses from "@/components/bonuses//FilteredBonuses";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import DepositBonuses from "@/components/bonuses/DepositBonuses";

export const metadata: Metadata = {
  title: "Deposit  Bonuses | Friendlybonuses",
  description: "Maximize your gaming capital with our definitive guide to Deposit Bonuses at Friendlybonuses. Understand the ins and outs of how deposit bonuses work, from welcome packages to reload offers. We break down key terms like wagering requirements, game restrictions, and time limits, equipping you with the knowledge to make informed decisions. Plus, discover our curated list of trusted online casinos offering the most lucrative and fair deposit bonuses in the market. Whether you're a new player seeking a strong start or a seasoned gamer looking to stretch your bankroll, our guide is your ultimate resource.",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <DepositBonuses />
      {/* <TopBrands /> */}
      <FilteredBonuses />
      <GuideSlotsPage />
    </div>
  );
}
