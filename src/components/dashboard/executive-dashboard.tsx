"use client";

import { useMemo, useState, type ReactNode } from "react";

type Country = {
  id: string;
  name: string;
  treasury: number;
  gdp: number;
  military: number;
  resources: number;
  stability: number;
};

const countries: Country[] = [
  { id: "auroria", name: "Auroria", treasury: 380, gdp: 720, military: 52, resources: 63, stability: 70 },
  { id: "varkesh", name: "Varkesh", treasury: 310, gdp: 660, military: 64, resources: 54, stability: 58 },
  { id: "thalmer", name: "Thalmer Union", treasury: 420, gdp: 810, military: 49, resources: 69, stability: 76 },
];

export default function ExecutiveDashboard() {
  const [selectedId, setSelectedId] = useState(countries[0].id);
  const [alliances, setAlliances] = useState<string[]>([]);
  const [warTarget, setWarTarget] = useState<string | null>(null);
  const [tradeTarget, setTradeTarget] = useState<string | null>(null);
  const [turn, setTurn] = useState(1);

  const player = useMemo(() => countries.find((c) => c.id === selectedId) ?? countries[0], [selectedId]);
  const rivals = countries.filter((c) => c.id !== player.id);

  const utility = Math.round(player.gdp * 0.45 + player.stability * 3 + player.resources * 2 - player.military * 1.4);
  const deterrence = Math.round((player.military * 1.6 + alliances.length * 10) / 2);

  return (
    <div className="px-4 py-8 sm:px-6 xl:px-10 text-white">
      <div className="mx-auto max-w-[1200px] space-y-6">
        <header className="space-y-2">
          <p className="text-xs uppercase tracking-[0.2em] text-white/40">Grand Strategy Simulation</p>
          <h1 className="text-3xl font-semibold tracking-tight">Command a Nation</h1>
          <p className="text-sm text-white/60">Choose a country and balance game theory tradeoffs across economics, military expansion, resources, alliances, and war.</p>
        </header>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <label className="text-xs uppercase text-white/50">Country</label>
          <select
            value={selectedId}
            onChange={(e) => {
              setSelectedId(e.target.value);
              setAlliances([]);
              setWarTarget(null);
              setTradeTarget(null);
              setTurn(1);
            }}
            className="mt-2 w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm"
          >
            {countries.map((country) => (
              <option key={country.id} value={country.id}>
                {country.name}
              </option>
            ))}
          </select>
        </section>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Stat title="Treasury" value={`$${player.treasury}B`} subtitle="Fiscal room" />
          <Stat title="GDP" value={`$${player.gdp}B`} subtitle="Economic output" />
          <Stat title="Military" value={`${player.military}/100`} subtitle="Readiness index" />
          <Stat title="Resources" value={`${player.resources}/100`} subtitle="Energy + food + minerals" />
        </section>

        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card title="Diplomacy">
            {rivals.map((rival) => {
              const inAlliance = alliances.includes(rival.id);
              return (
                <button
                  key={rival.id}
                  onClick={() =>
                    setAlliances((prev) =>
                      inAlliance ? prev.filter((id) => id !== rival.id) : [...prev, rival.id]
                    )
                  }
                  className={`mb-2 w-full rounded-xl border px-3 py-2 text-left text-sm ${inAlliance ? "border-teal-300/50 bg-teal-400/15" : "border-white/10 bg-white/5"}`}
                >
                  {inAlliance ? "Alliance Active: " : "Offer Alliance: "}
                  {rival.name}
                </button>
              );
            })}
          </Card>

          <Card title="Trade">
            {rivals.map((rival) => (
              <button
                key={rival.id}
                onClick={() => setTradeTarget(rival.id)}
                className="mb-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-left text-sm"
              >
                Sign trade pact with {rival.name}
              </button>
            ))}
            {tradeTarget && <p className="text-xs text-teal-300">Trade pact signed with {countries.find((c) => c.id === tradeTarget)?.name} (+resources, +GDP over time).</p>}
          </Card>

          <Card title="Military">
            {rivals.map((rival) => (
              <button
                key={rival.id}
                onClick={() => setWarTarget(rival.id)}
                className="mb-2 w-full rounded-xl border border-rose-300/25 bg-rose-400/10 px-3 py-2 text-left text-sm"
              >
                Declare war on {rival.name}
              </button>
            ))}
            {warTarget && <p className="text-xs text-rose-300">Active conflict: {player.name} vs {countries.find((c) => c.id === warTarget)?.name} (higher risk, potential resource capture).</p>}
          </Card>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm">
          <h2 className="font-medium">Game Theory Dashboard — Turn {turn}</h2>
          <ul className="mt-2 space-y-1 text-white/70">
            <li>Strategic utility: <span className="text-white">{utility}</span> (economy + stability + resources − military cost)</li>
            <li>Deterrence score: <span className="text-white">{deterrence}</span> (force projection + alliances)</li>
            <li>Nash pressure: <span className="text-white">{warTarget ? "Escalation" : tradeTarget ? "Cooperative equilibrium" : "Mixed strategy"}</span></li>
          </ul>
          <button onClick={() => setTurn((t) => t + 1)} className="mt-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-xs">Advance Turn</button>
        </section>
      </div>
    </div>
  );
}

function Stat({ title, value, subtitle }: { title: string; value: string; subtitle: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <p className="text-xs uppercase text-white/45">{title}</p>
      <p className="mt-1 text-2xl font-semibold">{value}</p>
      <p className="mt-1 text-xs text-white/50">{subtitle}</p>
    </article>
  );
}

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <h3 className="mb-3 text-sm font-medium">{title}</h3>
      {children}
    </article>
  );
}
