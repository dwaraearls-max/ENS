"use client";

import { useSyncExternalStore } from "react";
import {
  getSessionLoggedInSnapshot,
  subscribeSessionChange,
} from "@/lib/member-storage";

export function useSessionLoggedIn(): boolean {
  return useSyncExternalStore(
    subscribeSessionChange,
    getSessionLoggedInSnapshot,
    () => false,
  );
}
