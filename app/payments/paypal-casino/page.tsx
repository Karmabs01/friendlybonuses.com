import { Metadata } from "next";

import TopBrands from "@/components/TopBrands";
import NewBrands from "@/components/NewBrands";
import FilteredPayments from "@/components/payments//FilteredPayments";
import PreviewBonuses from "@/components/PreviewBonuses";
import GuideSlotsPage from "@/components/GuideSlotsPage";
import Paypal from "@/components/payments/Paypal";

export const metadata: Metadata = {
  title: "PayPal payments | Friendlybonuses",
  description: "Discover the ease and security of using PayPal for your online casino transactions with our extensive guide at Friendlybonuses. As one of the world's most trusted payment methods, PayPal offers quick deposits, hassle-free withdrawals, and top-tier security features. Our detailed guide covers everything from setting up your PayPal account to the nitty-gritty of transaction fees. We also provide a curated list of high-quality casinos that accept PayPal, ensuring that you can game with both convenience and confidence. Level up your casino experience by learning all there is to know about PayPal payments with our expert insights!",
};

export default async function Bonuses() {
  
  return (
    <div className="page-bonuses">
      <Paypal />
      {/* <TopBrands /> */}
      <FilteredPayments />
      <GuideSlotsPage />
    </div>
  );
}
