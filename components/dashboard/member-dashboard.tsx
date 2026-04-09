"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  appendTransaction,
  clearSession,
  getProfile,
  getSessionEmail,
  getTransactions,
  type MemberProfile,
  type SavingsTransaction,
} from "@/lib/member-storage";

function formatGhs(n: number): string {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2,
  }).format(n);
}

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("en-GH", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

type DashReady = {
  ready: true;
  profile: MemberProfile;
  rows: SavingsTransaction[];
};

export function MemberDashboard() {
  const router = useRouter();
  const [dash, setDash] = useState<DashReady | null>(null);
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const [kind, setKind] = useState<"contribution" | "withdrawal">("contribution");

  useEffect(() => {
    const email = getSessionEmail();
    const p = getProfile();
    if (!email || !p || p.email !== email) {
      router.replace("/login");
      return;
    }
    queueMicrotask(() => {
      setDash({
        ready: true,
        profile: p,
        rows: getTransactions(),
      });
    });
  }, [router]);

  const balance = useMemo(() => {
    if (!dash) return 0;
    return dash.rows.reduce((acc, r) => {
      if (r.kind === "contribution") return acc + r.amountCedis;
      return acc - r.amountCedis;
    }, 0);
  }, [dash]);

  function refreshList() {
    if (!dash) return;
    setDash({ ...dash, rows: getTransactions() });
  }

  function logEntry(e: React.FormEvent) {
    e.preventDefault();
    if (!dash) return;
    const n = Number.parseFloat(amount.replace(/,/g, ""));
    if (Number.isNaN(n) || n <= 0) return;

    appendTransaction({
      amountCedis: n,
      recordedAt: new Date().toISOString(),
      note: note.trim() || (kind === "contribution" ? "Contribution" : "Withdrawal"),
      kind,
    });

    setAmount("");
    setNote("");
    setKind("contribution");
    refreshList();
  }

  function logout() {
    clearSession();
    router.push("/");
    router.refresh();
  }

  if (!dash) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-20 text-center text-emerald-800">
        Loading your portal…
      </div>
    );
  }

  const { profile, rows } = dash;

  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
              Earl Noble Savings
            </p>
            <h1 className="font-serif text-xl font-semibold text-emerald-950 sm:text-2xl">
              Your savings dashboard
            </h1>
            <p className="text-sm text-emerald-800/85">
              {profile.fullName} · {profile.planTitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/"
              className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-stone-50"
            >
              Website
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-xl bg-emerald-900 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-950"
            >
              Log out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6">
        <section className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-900/15 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-800/80">Recorded balance</p>
            <p className="mt-2 font-serif text-3xl font-bold text-emerald-950">{formatGhs(balance)}</p>
            <p className="mt-2 text-xs text-emerald-800/75">
              Totals are from entries you add below. Connect banking later for automated sync.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold text-emerald-950">Log movement</p>
            <p className="mt-1 text-sm text-emerald-800/85">
              Add each contribution or withdrawal so your history stays clear on this site.
            </p>
            <form onSubmit={logEntry} className="mt-4 space-y-3">
              <div className="flex flex-wrap gap-3">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="kind"
                    checked={kind === "contribution"}
                    onChange={() => setKind("contribution")}
                  />
                  Contribution
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="kind"
                    checked={kind === "withdrawal"}
                    onChange={() => setKind("withdrawal")}
                  />
                  Withdrawal
                </label>
              </div>
              <input
                type="text"
                inputMode="decimal"
                placeholder="Amount (e.g. 50)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
              <input
                type="text"
                placeholder="Note (optional)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
              />
              <button
                type="submit"
                className="w-full rounded-xl bg-amber-600 py-3 font-semibold text-white hover:bg-amber-500"
              >
                Save to ledger
              </button>
            </form>
          </div>
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white shadow-sm">
          <div className="border-b border-stone-100 px-5 py-4 sm:px-6">
            <h2 className="font-serif text-lg font-semibold text-emerald-950">Activity</h2>
            <p className="text-sm text-emerald-800/80">
              Newest first — everything below is stored on this device.
            </p>
          </div>
          {rows.length === 0 ? (
            <p className="px-5 py-12 text-center text-emerald-800/75 sm:px-6">
              No entries yet. Log your first contribution to see your running balance.
            </p>
          ) : (
            <ul className="divide-y divide-stone-100">
              {rows.map((r) => (
                <li key={r.id} className="flex flex-wrap items-baseline justify-between gap-2 px-5 py-4 sm:px-6">
                  <div>
                    <p className="font-semibold text-emerald-950">{r.note}</p>
                    <p className="text-xs text-emerald-800/70">{formatDate(r.recordedAt)}</p>
                  </div>
                  <p
                    className={`font-mono text-base font-semibold ${r.kind === "contribution" ? "text-emerald-700" : "text-amber-800"}`}
                  >
                    {r.kind === "contribution" ? "+" : "−"}
                    {formatGhs(r.amountCedis)}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
