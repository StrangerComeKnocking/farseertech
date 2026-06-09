---
title: "Designing for the trillion-request day"
description: "At a trillion requests a day, the one-in-a-million event happens a million times. The rare case isn't an edge case — it's your steady state."
pillar: "building-software"
date: 2026-05-06
quote: "At scale, the rare event is your steady state."
sections: ["Thesis", "Pattern", "Mechanism", "Control", "Final Take"]
---

<section data-title="Thesis">
  <h2>Rare is a function of volume</h2>
  <p>"One in a million" sounds like something you can ignore. At a trillion requests a day, it happens a million times before lunch. The vocabulary of rarity — edge case, corner case, unlikely — quietly stops meaning anything. Everything that <em>can</em> happen, does, constantly.</p>
  <p>This is the mental shift hyperscale demands: the rare event isn't an exception to plan around. It's the workload.</p>
  <blockquote>At scale, the rare event is your steady state.</blockquote>
</section>

<section data-title="Pattern">
  <h2>Code written for the common case</h2>
  <p>Most code is written for the case the author imagined: the request that succeeds, the dependency that responds, the payload that's well-formed. That code isn't wrong. It's just describing a world that, at scale, is only true most of the time — and "most of the time" leaves millions of requests living in the part you didn't write.</p>
</section>

<section data-title="Mechanism">
  <h2>Independence is the assumption that breaks</h2>
  <p>The math that makes rare events tolerable assumes failures are independent. At scale they aren't. A slow dependency makes every caller retry; the retries become a load spike; the spike makes the dependency slower. Correlation turns a tiny perturbation into a self-reinforcing outage.</p>
  <pre><code>// A retry without backpressure is an outage amplifier.
if (err) retry(req);            // every caller, all at once

// Bound it: budget, jitter, and a circuit that can open.
if (err &amp;&amp; budget.allow())
  retryWithJitter(req);         // shed load instead of compounding it
</code></pre>
</section>

<section data-title="Control">
  <h2>Make the tail a first-class citizen</h2>
  <ul>
    <li><strong>Backpressure over best-effort.</strong> A system that can say "not now" survives loads that a system that always tries does not.</li>
    <li><strong>Retry budgets and jitter.</strong> Uncoordinated retries are a thundering herd you scheduled yourself.</li>
    <li><strong>Graceful degradation by design.</strong> Decide in advance what you drop first, before the incident decides for you.</li>
  </ul>
</section>

<section data-title="Final Take">
  <h2>The final take</h2>
  <p>Stop treating the tail as an afterthought to the happy path. At hyperscale the tail <em>is</em> the path — millions of times a day. Design for the rare event as your steady state, and the common case takes care of itself. Get it backwards, and production will teach you the same lesson, with interest.</p>
</section>
