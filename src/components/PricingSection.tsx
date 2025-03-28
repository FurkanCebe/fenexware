import PricingCard from "./PricingCard";

export default function PricingSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
      {/* <Radio.Group
        options={options}
        onChange={(e) => setIsYearly(e.target.value === "yearly")}
        value={isYearly ? "yearly" : "monthly"}
        optionType="button"
      /> */}
      <PricingCard
        title="Essential"
        price="$19.99"
        features={["Palgo AI App", "7/24 Support", "Daily 20 Interior Designs"]}
      />
      <PricingCard
        title="Premium"
        price="$29.99"
        isPopular
        features={["Palgo AI App", "7/24 Support",  "Daily 20 Interior Designs", "Mobile App Access"]}
      />
      <PricingCard
        title="Pro"
        price="$39.99"
        features={["Palgo AI App", "7/24 Support", "Unlimited Interior Designs", "Mobile App Access"]}
      />
    </div>
  );
}
