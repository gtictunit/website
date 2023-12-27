"use client";

import * as React from "react";
import { Hero, Services, Vision, WelcomeCTA } from "../../components";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Vision />
      <WelcomeCTA />
      <Services />
    </main>
  );
}
