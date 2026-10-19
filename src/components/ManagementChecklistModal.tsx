import React from 'react';
import { X, CheckCircle, Clock, AlertTriangle, ShieldCheck } from 'lucide-react';
import { MANAGEMENT_CHECKLIST, BRAND_INFO } from '../data/wamorganData';

interface ManagementChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManagementChecklistModal: React.FC<ManagementChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-[#e6e4dc] relative max-h-[90vh] flex flex-col"
      >
        {/* Header */}
        <div className="px-6 py-5 bg-[#070c52] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-[#ec268f]" />
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                Management Review Checklist & Production Audit
              </h3>
              <p className="text-xs text-slate-300">
                Phase 1 Business Profile Verification Status
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm">
          {/* Executive Summary */}
          <div className="p-4 rounded-xl bg-[#faf9f6] border border-[#e6e4dc] space-y-2">
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wider">
              Executive Review Scope
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              This Phase 1 website is built as an official business showcase and product catalog for <strong>{BRAND_INFO.name}</strong> across 4 branches (Nakuru, Kakamega, Eldoret, Kitale). In accordance with instructions, <strong>no online ordering, checkout, or cart systems have been implemented</strong>.
            </p>
          </div>

          {/* Checklist Table */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">
              Information Status & Pending Inputs
            </h4>

            <div className="divide-y divide-[#f0eee6] border border-[#e6e4dc] rounded-xl overflow-hidden">
              {MANAGEMENT_CHECKLIST.map((item) => (
                <div key={item.id} className="p-4 bg-white flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-900">{item.item}</span>
                      <span className="text-[11px] text-slate-500">({item.category})</span>
                    </div>
                    <p className="text-xs text-slate-600">{item.notes}</p>
                  </div>

                  <div className="shrink-0">
                    {item.status === 'Approved' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                        <CheckCircle className="w-3 h-3 text-emerald-600" />
                        <span>Approved</span>
                      </span>
                    ) : item.status === 'Sample Provided' ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        <Clock className="w-3 h-3 text-amber-600" />
                        <span>Demo Sample</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                        <AlertTriangle className="w-3 h-3 text-blue-600" />
                        <span>Pending Sign-off</span>
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Steps for Launch */}
          <div className="bg-[#f4f3ef] p-4 rounded-xl text-xs space-y-2">
            <span className="font-bold text-slate-800 block">Actions Required Before Public Domain Launch:</span>
            <ul className="list-disc list-inside text-slate-600 space-y-1">
              <li>Supply precise building numbers/plazas for the 4 physical branches.</li>
              <li>Provide Safaricom/Airtel direct coordinator lines for each branch.</li>
              <li>Review sample indicative wholesale price brackets and approve final schedule.</li>
              <li>Provide high-resolution storefront photos for each location.</li>
              <li>Confirm executive names, official titles (e.g. CEO/MD), and approved leadership statement.</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#faf9f6] border-t border-[#e6e4dc] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-5 py-2 text-xs font-semibold text-white bg-[#0c1387] hover:bg-[#070c52] rounded-lg transition-colors cursor-pointer"
          >
            Close Notes
          </button>
        </div>
      </div>
    </div>
  );
};
