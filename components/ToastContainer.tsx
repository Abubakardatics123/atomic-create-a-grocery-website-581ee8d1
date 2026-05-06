"use client";

import { useToast } from "@/context/ToastContext";
import { X, Check, AlertCircle, Info } from 'lucide-react';

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full">
      {toasts.map((toast) => {
        let bgClass = "bg-blue-500";
        if (toast.type === "success") bgClass = "bg-green-600";
        if (toast.type === "error") bgClass = "bg-red-500";
        return (
          <div
            key={toast.id}
            className={"flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg text-white text-sm font-medium " + bgClass}
          >
            <span className="shrink-0">
              {toast.type === "success" && <Check size={16} />}
              {toast.type === "error" && <AlertCircle size={16} />}
              {toast.type === "info" && <Info size={16} />}
            </span>
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="shrink-0 hover:opacity-70 transition-opacity"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
