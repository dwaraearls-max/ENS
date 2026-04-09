"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProfile, setSession } from "@/lib/member-storage";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const profile = getProfile();
    if (!profile) {
      setError("No account found on this browser yet. Create an account first.");
      return;
    }

    if (
      profile.email.toLowerCase() !== email.trim().toLowerCase() ||
      profile.password !== password
    ) {
      setError("Email or password does not match.");
      return;
    }

    setSession(profile.email);
    router.push("/dashboard");
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-12 sm:px-6">
      <p className="text-center text-sm font-semibold uppercase tracking-wider text-amber-800">
        Member portal
      </p>
      <h1 className="mt-2 text-center font-serif text-3xl font-semibold text-emerald-950">
        Log in to your savings
      </h1>
      <p className="mt-3 text-center text-emerald-900/80">
        View your balance and log every contribution on the Earl Noble Savings platform.
      </p>

      <form onSubmit={submit} className="mt-8 space-y-5">
        {error ? (
          <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-900" role="alert">
            {error}
          </p>
        ) : null}

        <div>
          <label htmlFor="login-email" className="block text-sm font-semibold text-emerald-950">
            Email
          </label>
          <input
            id="login-email"
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
          <label htmlFor="login-pass" className="block text-sm font-semibold text-emerald-950">
            Password
          </label>
          <input
            id="login-pass"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded-xl border border-stone-300 px-4 py-3 text-emerald-950 shadow-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/30"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-xl bg-emerald-800 py-3.5 text-base font-semibold text-white shadow-md shadow-emerald-900/15 transition-colors hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Log in
        </button>
      </form>

      <p className="mt-8 text-center text-sm text-emerald-800/90">
        New to ENS?{" "}
        <Link href="/register" className="font-semibold underline decoration-amber-700/60 underline-offset-2">
          Create an account
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
