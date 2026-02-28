import { motion } from 'motion/react';
import { Mailbox, BrainCircuit, Send } from 'lucide-react';

const steps = [
  {
    icon: <Mailbox className="w-8 h-8 text-indigo-400" />,
    title: "1. Connect Your Inbox",
    description: "Securely link your Gmail, Outlook, or IMAP account in seconds. We sync your recent emails to understand your communication style.",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <BrainCircuit className="w-8 h-8 text-indigo-400" />,
    title: "2. AI Learns Your Voice",
    description: "Our models analyse your past sent emails to mimic your tone, vocabulary, and sign-offs. It's like cloning yourself.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: <Send className="w-8 h-8 text-indigo-400" />,
    title: "3. Review and Send",
    description: "New emails arrive with a pre-drafted response. Just review, make any tweaks, and hit send. Or set trusted senders to autopilot.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            How ReadandReply works
          </h2>
          <p className="text-lg text-zinc-400">
            Three simple steps to reclaim your time and hit inbox zero every single day.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex-1 space-y-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
                  {step.icon}
                </div>
                <h3 className="text-3xl font-bold text-white">{step.title}</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 w-full"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-video">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent z-10" />
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
