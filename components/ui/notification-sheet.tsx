"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, X, Mail } from "lucide-react";
import { personalData } from "@/lib/data";

interface NotificationSheetProps {
  status: "idle" | "success" | "error";
  onClose: () => void;
  onAction?: () => void; // Optional action for error state
}

export function NotificationSheet({ status, onClose, onAction }: NotificationSheetProps) {
  return (
    <AnimatePresence>
      {status !== "idle" && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 rounded-2xl border border-white/10 bg-black/80 p-8 min-h-[140px] flex flex-col justify-center backdrop-blur-xl shadow-2xl"
        >
          <div className="flex items-start gap-4">
            {/* Icon */}
            <div className="shrink-0">
              {status === "success" ? (
                <div className="rounded-full bg-green-500/20 p-2 text-green-500">
                  <CheckCircle className="h-6 w-6" />
                </div>
              ) : (
                <div className="rounded-full bg-red-500/20 p-2 text-red-500">
                  <AlertCircle className="h-6 w-6" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex-1 space-y-1">
              <h3 className="font-semibold text-white">
                {status === "success" ? "Message Sent!" : "Delivery Failed"}
              </h3>
              <p className="text-sm text-white/60">
                {status === "success"
                  ? "Message sent successfully!"
                  : "Failed to send message. Please try again or email me directly."}
              </p>

              {/* Action Button for Error */}
              {status === "error" && (
                <a
                  href={`mailto:${personalData.email}`}
                  onClick={onAction}
                  className="mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition-colors w-full"
                >
                  <Mail className="h-4 w-4" />
                  Open Gmail
                </a>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="group -mr-2 -mt-2 rounded-lg p-2 text-white/40 hover:bg-white/10 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
