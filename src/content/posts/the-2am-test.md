---
title: "The 2 a.m. test for every AI feature"
description: "The person who operates your feature isn't the rested you in the design review. It's a half-asleep stranger holding a pager."
pillar: "field-notes"
date: 2026-06-04
accent: "coral"
quote: "If it can't be operated half-asleep, it isn't done."
sections: ["Thesis", "Pattern", "Failure Mode", "Final Take"]
---

<section data-title="Thesis">
  <h2>Design for the worst version of the operator</h2>
  <p>Every feature has two users you must design for. One is the customer. The other is the engineer who gets paged about it — at 2 a.m., with no context, on a night they didn't expect to be working.</p>
  <p>We obsess over the first and forget the second. So here's a simple bar: if a tired stranger can't understand what your feature is doing and stop it within a few minutes, the feature isn't finished. It's just demoed.</p>
  <blockquote>If it can't be operated half-asleep, it isn't done.</blockquote>
</section>

<section data-title="Pattern">
  <h2>Happy-path polish, zero operability</h2>
  <p>The recurring pattern: a feature ships with a beautiful success path and nothing else. No clear signal for when it's misbehaving. No obvious control to pause it. The team that built it can operate it — because the knowledge lives in their heads, not in the system.</p>
  <p>That's fine until the people with the knowledge are asleep. Operability is the part of the work that only pays off on your worst day, which is exactly why it's the first thing cut on every normal day.</p>
</section>

<section data-title="Failure Mode">
  <h2>The agent that wouldn't stop</h2>
  <p>The sharpest version I've seen: an agentic workflow caught in a retry loop, cheerfully spending money and writing rows, with no kill switch anyone could find. The on-call engineer's only option was to take down a healthy service to stop an unhealthy behavior.</p>
  <p>The feature worked perfectly in every demo. It had simply never been designed to be turned off — because in a demo, you never need to.</p>
</section>

<section data-title="Final Take">
  <h2>The final take</h2>
  <p>Ship the off switch with the on switch. Build the signal that tells a stranger something is wrong, and the control that lets them make it stop. Operability isn't polish you add later; it's the difference between a feature and a liability with good lighting.</p>
</section>
