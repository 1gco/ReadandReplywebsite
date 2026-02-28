import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "£29",
    period: "/month",
    description: "Perfect for individuals managing a busy personal inbox.",
    features: [
      "Up to 500 AI drafts/month",
      "1 connected inbox",
      "Basic tone matching",
      "Standard support",
      "7-day history retention"
    ],
    cta: "Start free trial",
    popular: false
  },
  {
    name: "Pro",
    price: "£79",
    period: "/month",
    description: "For founders and executives who need their time back.",
    features: [
      "Unlimited AI drafts",
      "Up to 3 connected inboxes",
      "Advanced tone & vocabulary matching",
      "Priority email support",
      "30-day history retention",
      "Custom rules & autopilot"
    ],
    cta: "Get Started",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams and agencies managing high-volume support.",
    features: [
      "Unlimited everything",
      "Unlimited connected inboxes",
      "CRM integrations (Salesforce, etc.)",
      "Dedicated account manager",
      "Unlimited history retention",
      "Custom AI model training"
    ],
    cta: "Contact sales",
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-zinc-400">
            Start for free, upgrade when you need more power. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? 'bg-zinc-900 border-indigo-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)] md:scale-105 z-10' 
                  : 'bg-zinc-900/50 border-white/5'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-zinc-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.5)] hover:shadow-[0_0_25px_-5px_rgba(99,102,241,0.6)]'
                    : 'bg-zinc-800 text-white hover:bg-zinc-700'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
