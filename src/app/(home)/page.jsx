"use client";

import * as React from "react";
import {
  Give,
  Hero,
  Services,
  UpcomingProgrammes,
  Vision,
  WelcomeCTA,
  LiveBroadcast,
} from "../../components";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Vision />
      <WelcomeCTA />
      <LiveBroadcast />
      <Services />
      <Give />
      <UpcomingProgrammes />
    </main>
  );
}
