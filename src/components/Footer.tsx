import { Mail, Twitter, Linkedin, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <Mail className="w-5 h-5 text-indigo-400" />
              </div>
              <span className="font-semibold text-lg tracking-tight text-white">ReadandReply</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The AI email assistant that understands context, matches your tone, and puts your inbox on autopilot.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-zinc-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-zinc-400 hover:text-white text-sm transition-colors">How it Works</a></li>
              <li><a href="#pricing" className="text-zinc-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Integrations</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Help Centre</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} ReadandReply.com. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-zinc-500">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              All systems operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
