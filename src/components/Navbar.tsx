import { motion } from 'motion/react';
import { Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
              <Mail className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="font-semibold text-lg tracking-tight">ReadandReply</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm text-zinc-400 hover:text-zinc-50 transition-colors">
              Log in
            </button>
            <button className="text-sm bg-zinc-50 text-zinc-950 px-4 py-2 rounded-full font-medium hover:bg-zinc-200 transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 hover:text-zinc-50">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-zinc-950"
        >
          <div className="px-4 pt-2 pb-6 space-y-4">
            <a href="#features" className="block text-base text-zinc-400 hover:text-zinc-50">Features</a>
            <a href="#how-it-works" className="block text-base text-zinc-400 hover:text-zinc-50">How it Works</a>
            <a href="#pricing" className="block text-base text-zinc-400 hover:text-zinc-50">Pricing</a>
            <div className="pt-4 flex flex-col gap-3 border-t border-white/5">
              <button className="w-full text-center text-zinc-400 hover:text-zinc-50 py-2">Log in</button>
              <button className="w-full bg-zinc-50 text-zinc-950 py-2 rounded-lg font-medium">Get Started</button>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
