import React, { useState } from 'react';
import { X, Download, Handshake, Check, FileText, Mail, Phone } from 'lucide-react';
import { MEDIA_KIT_STATS, PARTNERSHIP_TIERS } from '../data/partnerships';

interface PartnerHubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTier: () => void;
}

export const PartnerHubModal: React.FC<PartnerHubModalProps> = ({
  isOpen,
  onClose,
  onSelectTier
}) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownloadKit = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#16130b] glass-panel gold-border rounded-2xl overflow-hidden shadow-2xl my-auto text-[#eae1d4] p-6 sm:p-8 space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#eae1d4] hover:text-[#f2ca50] transition-colors border border-[#f2ca50]/30 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#f2ca50]/20 text-[#f2ca50] flex items-center justify-center border border-[#f2ca50]/40">
            <Handshake className="w-5 h-5" />
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#eae1d4]">
              Partner Hub & Official Media Kit
            </h2>
            <p className="text-xs text-[#d0c5af]">
              Republic Bharat Broadcast & Digital Partnership Deck 2024
            </p>
          </div>
        </div>

        {/* Key Broadcast Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-[#1d190f] border border-[#4d4635]/30 text-center">
          {MEDIA_KIT_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-0.5">
              <span className="font-headline font-extrabold text-lg sm:text-xl text-[#f2ca50] block">
                {stat.value}
              </span>
              <span className="text-[10px] text-[#d0c5af] uppercase tracking-wider block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Media Kit PDF Download Card */}
        <div className="p-6 rounded-xl bg-[#1f1b13] border border-[#f2ca50]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <FileText className="w-8 h-8 text-[#f2ca50] shrink-0" />
            <div>
              <h4 className="font-headline font-bold text-sm text-[#eae1d4]">
                Bharat Brand Stories — Official Media Kit 2024.pdf
              </h4>
              <p className="text-xs text-[#99907c]">
                Includes TV ad rate cards, demographic breakdowns & Season 2 schedule (12.4 MB)
              </p>
            </div>
          </div>

          <button
            onClick={handleDownloadKit}
            disabled={downloading}
            className="btn-primary px-6 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            {downloaded ? (
              <>
                <Check className="w-4 h-4 text-emerald-950" />
                Downloaded!
              </>
            ) : downloading ? (
              'Preparing PDF...'
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download PDF
              </>
            )}
          </button>
        </div>

        {/* Tier Overview List */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-[#f2ca50] uppercase tracking-wider">
            Available Sponsorship Tiers
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {PARTNERSHIP_TIERS.map((tier) => (
              <div key={tier.id} className="p-3.5 rounded-xl bg-[#231f17] border border-[#4d4635]/30 space-y-1">
                <span className="font-headline font-bold text-sm text-[#eae1d4] block">
                  {tier.name}
                </span>
                <p className="text-[11px] text-[#d0c5af] line-clamp-2">
                  {tier.tagline}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Bureau */}
        <div className="pt-4 border-t border-[#4d4635]/30 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-4 text-[#d0c5af]">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#f2ca50]" />
              partnerships@bharatbrandstories.com
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#f2ca50]" />
              +91 (022) 4000 8888
            </span>
          </div>

          <button
            onClick={() => {
              onClose();
              onSelectTier();
            }}
            className="btn-secondary px-4 py-2 rounded-lg font-bold text-xs cursor-pointer hover:border-[#f2ca50]"
          >
            Apply for Sponsorship →
          </button>
        </div>
      </div>
    </div>
  );
};
