import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$6.70",
    per: "per user / month",
    billed: "billed annually or $7 month-to-month",
    features: [
      "Automatic Time Tracking",
      "Projects & Tasks Report",
      "Timeline Report",
      "Screenshots",
      "Online / Offline Tracking",
      "Knowledge Base",
    ],
    button: "Start 14-day trial →",
    popular: false,
  },
  {
    name: "Standard",
    price: "$11.70",
    per: "per user / month",
    billed: "billed annually or $14 month-to-month",
    features: [
      "Everything in Basic, plus:",
      "Schedule & Attendance",
      "Time Approvals",
      "Activity Summary",
      "Web & App Usage Reporting",
      "Productivity Ratings",
      "Leave & Break Tracking",
      "Work-life Balance Analytics",
      "Real-time Notifications",
      "60+ Integrations",
      "Upgraded Support",
    ],
    button: "Start 14-day trial →",
    popular: false,
  },
  {
    name: "Premium",
    price: "$16.70",
    per: "per user / month",
    billed: "billed annually or $20 month-to-month",
    features: [
      "Everything in Standard, plus:",
      "Unusual Activity Report",
      "Mouse Jiggler & Clicker Detection",
      "Irregular Keyboard Activity",
      "Internet Connectivity Tracking",
      "Video Screen Recording",
      "Dedicated Success Manager",
      "Executive Dashboard & Reporting",
      "Automatic User Provisioning",
      "Historical Data Storage",
      "Open API Access",
      "Single Sign On",
      "Client Login Access",
    ],
    button: "Start 14-day trial →",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom plan",
    per: "",
    billed: "Monthly & annual plan options available",
    features: [
      "Private Cloud Deployment",
      "Customizable BI Dashboards",
      "Custom pricing and contract terms",
      "Guided implementation and onboarding",
      "Professional Services & Custom development",
    ],
    button: "Contact sales →",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#f7f7f7] py-12 px-4 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h4 className="text-blue-600 font-semibold mb-2 font-sans">
          Flexible Seora pricing & plans
        </h4>
        <h1 className="text-3xl md:text-5xl font-playfair font-bold mb-4">
          Give yourself a clear picture of productivity & profits
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Replace guesswork with precise productivity monitoring. Measure and
          improve performance, so you can drive business growth. Only with
          Seora.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-full mb-2">
          Start 14-day trial →
        </button>
        <p className="text-sm text-gray-500">
          Try every feature. No credit card required.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`border rounded-lg shadow-sm p-6 flex flex-col bg-white ${
              plan.popular
                ? "border-blue-600 ring-2 ring-blue-600 relative"
                : "border-gray-200"
            }`}
          >
            {plan.popular && (
              <span className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-bl">
                Popular
              </span>
            )}
            <h3 className="text-xl font-bold mb-2 font-playfair">
              {plan.name}
            </h3>
            <p className="text-2xl font-bold font-playfair">{plan.price}</p>
            {plan.per && (
              <p className="text-sm text-gray-600 font-sans">{plan.per}</p>
            )}
            <p className="text-xs text-gray-500 mb-4 font-sans">{plan.billed}</p>

            <ul className="text-sm text-gray-700 mb-6 space-y-1 font-sans">
              {plan.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>

            <button
              className={`mt-auto ${
                plan.name === "Enterprise"
                  ? "bg-gray-800 hover:bg-black"
                  : "bg-blue-600 hover:bg-blue-700"
              } text-white font-medium px-4 py-2 rounded-full`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <a href="#" className="text-blue-600 text-sm underline font-sans">
          Compare all features →
        </a>
      </div>
    </section>
  );
}
