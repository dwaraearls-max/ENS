"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "@/lib/content/site";
import {
  getProfile,
  saveProfile,
  saveTransactions,
  setSession,
  type MemberProfile,
} from "@/lib/member-storage";

type Props = { defaultPlanId?: string };

export function RegisterForm({ defaultPlanId }: Props) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const planOptions = useMemo(
    () => products.map((p) => ({ id: p.id, title: p.title })),
    [],
  );

  const initialPlan =
    planOptions.find((p) => p.id === defaultPlanId)?.id ?? planOptions[0]?.id ?? "daily";
  const [planId, setPlanId] = useState(initialPlan);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const existing = getProfile();
    if (
      existing &&
      existing.email.toLowerCase() !== email.trim().toLowerCase()
    ) {
      setError(
        "This browser already has a different ENS profile. Log in to that account, or clear this site’s storage in your browser settings to start fresh.",
      );
      return;
    }

    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in your name, email, and phone.");
      return;
    }

    if (password.length < 6) {
      setError("Choose a password with at least six characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    const planTitle =
      planOptions.find((p) => p.id === planId)?.title ?? "Savings plan";

    const profile: MemberProfile = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      planId,
      planTitle,
      password,
      createdAt: new Date().toISOString(),
    };

    saveProfile(profile);
    saveTransactions([]);
    setSession(profile.email);
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-amber-800">
        On-site savings
      </p>
      <h1 className="mt-2 text-center font-serif text-3xl font-semibold text-emerald-950">
        Open your ENS account
      </h1>
      <p className="mt-3 text-center text-emerald-900/80">
        Record contributions and see your balance here — your activity stays in this secure portal.
      </p>

      <div
        className="mt-6 rounded-xl border border-amber-200/80 bg-amber-50/60 px-4 py-3 text-sm text-amber-950"
        role="note"
      >
        <strong className="font-semibold">Demo mode:</strong> data is stored only in this browser
        until your backend is connected. Do not use this as your only record for large sums.
      </div>

      <form onSubmit={submit} className="mt-8 space-y-5">
        {error ? (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
            {error}
          </p>
        ) : null}

        <div>
          <label htmlFor="reg-name" className="block text-sm font-semibold text-emerald-950">
            Full name
          </label>
          <input
            id="reg-name"
            name="fullName"
            autoComplete="name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <div>
          <label htmlFor="reg-email" className="block text-sm font-semibold text-emerald-950">
            Email
          </label>
          <input
            id="reg-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <div>
          <label htmlFor="reg-phone" className="block text-sm font-semibold text-emerald-950">
            Phone (Ghana)
          </label>
          <input
            id="reg-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+233 …"
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <div>
          <label htmlFor="reg-plan" className="block text-sm font-semibold text-emerald-950">
            Savings product
          </label>
          <select
            id="reg-plan"
            name="plan"
            value={planId}
            onChange={(e) => setPlanId(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          >
            {planOptions.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="reg-pass" className="block text-sm font-semibold text-emerald-950">
            Password
          </label>
          <input
            id="reg-pass"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <div>
          <label htmlFor="reg-confirm" className="block text-sm font-semibold text-emerald-950">
            Confirm password
          </label>
          <input
            id="reg-confirm"
            name="confirm"
            type="password"
            autoComplete="new-password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-800 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-900/15 transition-colors hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Save and go to my dashboard
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-emerald-800/90">
        Already registered?{" "}
        <Link href="/login" className="font-semibold underline decoration-amber-700/60 underline-offset-2">
          Log in
        </Link>
      </p>
      <p className="mt-4 text-center">
        <Link href="/" className="text-sm text-emerald-800/75 hover:text-emerald-950">
          ← Back to website
        </Link>
      </p>
    </div>
  );
}
