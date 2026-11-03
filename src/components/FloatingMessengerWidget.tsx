import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { useTemplate } from '../context/TemplateContext';

export const FloatingMessengerWidget: React.FC = () => {
  const { config, showRawPlaceholders } = useTemplate();
  const [showTooltip, setShowTooltip] = useState<boolean>(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Speech bubble tooltip for high conversion */}
      {showTooltip && (
        <div className="mb-2.5 p-3 pr-8 rounded-xl bg-[#111622] border border-accent/40 shadow-2xl text-white text-xs max-w-xs relative animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute top-2 right-2 text-slate-400 hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-white flex items-center space-x-1.5 mb-0.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Got questions?</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-snug">
            {showRawPlaceholders 
              ? 'Message us at [YOUR FACEBOOK MESSENGER LINK]' 
              : 'Chat with our detailing team on Messenger for quick estimates!'}
          </p>
        </div>
      )}

      {/* Main Floating Facebook Messenger Button */}
      <a
        href={config.facebookMessengerLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Facebook Messenger"
        title="Chat on Facebook Messenger"
        className="w-14 h-14 rounded-full bg-[#0084FF] hover:bg-[#0070E0] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(0,132,255,0.45)] hover:scale-105 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#0084FF] transition-transform group-hover:scale-110" />
      </a>
    </div>
  );
};
