"use client";

import { useEffect } from "react";

const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "a[href]",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(", ");

export default function ModalFocusManager() {
  useEffect(() => {
    let activeDialog: HTMLElement | null = null;
    let previouslyFocused: HTMLElement | null = null;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !activeDialog) return;

      const focusable = Array.from(
        activeDialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );

      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const syncDialog = () => {
      const nextDialog = document.querySelector<HTMLElement>(
        '[role="dialog"][aria-modal="true"]',
      );

      if (nextDialog === activeDialog) return;

      if (activeDialog && !nextDialog) {
        activeDialog = null;
        previouslyFocused?.focus();
        previouslyFocused = null;
        return;
      }

      if (nextDialog) {
        previouslyFocused = document.activeElement as HTMLElement | null;
        activeDialog = nextDialog;
        const firstFocusable = activeDialog.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
        requestAnimationFrame(() => firstFocusable?.focus());
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const observer = new MutationObserver(syncDialog);
    observer.observe(document.body, { childList: true, subtree: true });
    syncDialog();

    return () => {
      observer.disconnect();
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, []);

  return null;
}
