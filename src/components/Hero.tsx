import { motion } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8"
          >
            <Sparkles className="w-4 h-4" />
            <span>The future of email management</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6"
          >
            Your AI Email Assistant That <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Actually Understands</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            ReadandReply.com reads your incoming emails, understands the context, and drafts the perfect response in your tone of voice. Put your inbox on autopilot.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-50 text-zinc-950 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
              Start for free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-zinc-300 border border-white/10 rounded-full font-semibold text-lg hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2">
              Book a demo
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-zinc-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-indigo-400" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Dashboard Preview Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 relative mx-auto max-w-5xl"
        >
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-xl shadow-2xl overflow-hidden">
            <div className="flex items-center px-4 py-3 border-b border-white/5 bg-zinc-950/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="mx-auto text-xs text-zinc-500 font-mono">app.readandreply.com</div>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sidebar Mock */}
              <div className="hidden md:flex flex-col gap-4 border-r border-white/5 pr-6">
                <div className="h-8 w-full bg-white/5 rounded-md" />
                <div className="h-8 w-3/4 bg-white/5 rounded-md" />
                <div className="h-8 w-5/6 bg-white/5 rounded-md" />
                <div className="h-8 w-full bg-white/5 rounded-md" />
              </div>
              {/* Main Content Mock */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="h-6 w-1/3 bg-white/10 rounded-md" />
                  <div className="h-8 w-24 bg-indigo-500/20 rounded-full" />
                </div>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-between mb-2">
                      <div className="h-4 w-1/4 bg-white/10 rounded" />
                      <div className="h-4 w-16 bg-white/5 rounded" />
                    </div>
                    <div className="h-3 w-full bg-white/5 rounded mb-2" />
                    <div className="h-3 w-5/6 bg-white/5 rounded" />
                    <div className="mt-4 p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-3 h-3 text-indigo-400" />
                        <span className="text-xs text-indigo-300 font-medium">AI Drafted Reply</span>
                      </div>
                      <div className="h-3 w-full bg-indigo-400/20 rounded mb-2" />
                      <div className="h-3 w-4/5 bg-indigo-400/20 rounded" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 opacity-50">
                    <div className="h-4 w-1/3 bg-white/10 rounded mb-2" />
                    <div className="h-3 w-full bg-white/5 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
