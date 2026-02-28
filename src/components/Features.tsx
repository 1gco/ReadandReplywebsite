import { motion } from 'motion/react';
import { Brain, Zap, Shield, Link, Clock, MessageSquareText } from 'lucide-react';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    title: "Context-Aware AI",
    description: "Our models don't just read words; they understand the entire thread history, ensuring replies make sense in context."
  },
  {
    icon: <MessageSquareText className="w-6 h-6 text-indigo-400" />,
    title: "Tone Matching",
    description: "Train the AI on your past emails. It learns your unique voice, vocabulary, and sign-offs so it sounds exactly like you."
  },
  {
    icon: <Zap className="w-6 h-6 text-indigo-400" />,
    title: "Instant Drafts",
    description: "The moment an email hits your inbox, a draft reply is generated. Review, tweak if needed, and hit send."
  },
  {
    icon: <Clock className="w-6 h-6 text-indigo-400" />,
    title: "24/7 Autopilot",
    description: "Set rules for specific senders or topics to reply automatically without your approval. Perfect for FAQs."
  },
  {
    icon: <Link className="w-6 h-6 text-indigo-400" />,
    title: "CRM Integration",
    description: "Connects seamlessly with Salesforce, HubSpot, and more to pull in customer data for personalised replies."
  },
  {
    icon: <Shield className="w-6 h-6 text-indigo-400" />,
    title: "Enterprise Security",
    description: "Your data is encrypted at rest and in transit. We never train our public models on your private emails."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything you need to conquer your inbox
          </h2>
          <p className="text-lg text-zinc-400">
            Stop drowning in emails. ReadandReply gives you the superpowers to handle hundreds of messages a day without breaking a sweat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-colors group"
            >
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
