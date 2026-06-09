---
title: "Dashboards lie at scale"
description: "A green dashboard and a furious customer are not a contradiction. They're the normal result of watching aggregates instead of people."
pillar: "field-notes"
date: 2026-06-01
accent: "gold"
quote: "An average is a story your outliers didn't get to tell."
sections: ["Thesis", "Mechanism", "Failure Mode", "Final Take"]
---

<section data-title="Thesis">
  <h2>Green board, angry inbox</h2>
  <p>One of the most disorienting experiences in operating large systems is staring at a wall of green while support is on fire. Nothing is technically wrong. Everything is technically fine. And a real cohort of real people is having a terrible time.</p>
  <p>The dashboard isn't broken. It's doing exactly what aggregation does: telling you about the middle while quietly discarding the edges where the pain lives.</p>
  <blockquote>An average is a story your outliers didn't get to tell.</blockquote>
</section>

<section data-title="Mechanism">
  <h2>The tail is where the customers are</h2>
  <p>Means and even p50s smear the tail into invisibility. At small scale that's a rounding error. At a trillion requests a day, the 0.01% you rounded away is millions of degraded experiences — a city's worth of unhappy users, hidden under a healthy-looking line.</p>
  <p>Worse, the people in the tail are rarely random. They cluster: one region, one device, one enterprise tenant. The aggregate averages across a structure it can't see.</p>
</section>

<section data-title="Failure Mode">
  <h2>p50 fine, a cohort on fire</h2>
  <p>The classic incident that never opens: latency p50 is healthy, p99.9 is catastrophic, and your alerting watches p50. A single high-value tenant is timing out on every request. They churn. The dashboard never flickered.</p>
</section>

<section data-title="Final Take">
  <h2>The final take</h2>
  <p>Instrument for the worst-served user, not the median one. Watch high percentiles, segment by the cohorts that matter, and treat a healthy average as a question rather than an answer. At scale, the truth is in the tail — and the tail doesn't show up in the number everyone's looking at.</p>
</section>
