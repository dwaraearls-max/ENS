/**
 * Browser-only member data for the ENS portal (contributions tracked on this site).
 * Replace with a real API when backend is available. Data never leaves this device unless you sync.
 */

export const MEMBER_KEYS = {
  profile: "ens_member_profile_v1",
  session: "ens_member_session_v1",
  transactions: "ens_member_transactions_v1",
} as const;

export type MemberProfile = {
  fullName: string;
  email: string;
  phone: string;
  planId: string;
  planTitle: string;
  /** Demo portal only — use server-side auth in production */
  password: string;
  createdAt: string;
};

export type SavingsTransaction = {
  id: string;
  amountCedis: number;
  recordedAt: string;
  note: string;
  kind: "contribution" | "withdrawal";
};

function canStore(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

export function getProfile(): MemberProfile | null {
  if (!canStore()) return null;
  try {
    const raw = localStorage.getItem(MEMBER_KEYS.profile);
    if (!raw) return null;
    return JSON.parse(raw) as MemberProfile;
  } catch {
    return null;
  }
}

export function saveProfile(profile: MemberProfile): void {
  if (!canStore()) return;
  localStorage.setItem(MEMBER_KEYS.profile, JSON.stringify(profile));
}

export function getSessionEmail(): string | null {
  if (!canStore()) return null;
  try {
    const raw = localStorage.getItem(MEMBER_KEYS.session);
    if (!raw) return null;
    const { email } = JSON.parse(raw) as { email?: string };
    return email ?? null;
  } catch {
    return null;
  }
}

const SESSION_EVENT = "ens-member-session";

function emitSessionEvent(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(SESSION_EVENT));
}

export function subscribeSessionChange(callback: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  const handler = (): void => callback();
  window.addEventListener(SESSION_EVENT, handler);
  window.addEventListener("storage", handler);
  return () => {
    window.removeEventListener(SESSION_EVENT, handler);
    window.removeEventListener("storage", handler);
  };
}

export function getSessionLoggedInSnapshot(): boolean {
  return !!getSessionEmail();
}

export function setSession(email: string): void {
  if (!canStore()) return;
  localStorage.setItem(MEMBER_KEYS.session, JSON.stringify({ email }));
  emitSessionEvent();
}

export function clearSession(): void {
  if (!canStore()) return;
  localStorage.removeItem(MEMBER_KEYS.session);
  emitSessionEvent();
}

export function getTransactions(): SavingsTransaction[] {
  if (!canStore()) return [];
  try {
    const raw = localStorage.getItem(MEMBER_KEYS.transactions);
    if (!raw) return [];
    return JSON.parse(raw) as SavingsTransaction[];
  } catch {
    return [];
  }
}

export function saveTransactions(rows: SavingsTransaction[]): void {
  if (!canStore()) return;
  localStorage.setItem(MEMBER_KEYS.transactions, JSON.stringify(rows));
}

export function appendTransaction(
  row: Omit<SavingsTransaction, "id">,
): SavingsTransaction {
  const id =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `tx-${Date.now()}`;
  const full: SavingsTransaction = { ...row, id };
  const next = [full, ...getTransactions()];
  localStorage.setItem(MEMBER_KEYS.transactions, JSON.stringify(next));
  return full;
}

export function clearAllMemberData(): void {
  if (!canStore()) return;
  localStorage.removeItem(MEMBER_KEYS.profile);
  localStorage.removeItem(MEMBER_KEYS.session);
  localStorage.removeItem(MEMBER_KEYS.transactions);
  emitSessionEvent();
}
