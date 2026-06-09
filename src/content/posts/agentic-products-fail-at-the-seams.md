---
title: "Agentic products fail at the seams, not the model"
description: "The demo dazzles because the model is good. Production frays because the seams between steps are where trust actually leaks."
pillar: "building-product"
date: 2026-05-13
quote: "Users don't experience your model. They experience your seams."
sections: ["Thesis", "Pattern", "Mechanism", "Failure Mode", "Final Take"]
---

<section data-title="Thesis">
  <h2>The model is rarely the problem</h2>
  <p>When an agentic product disappoints in production, teams reach for the model first: a better one, a bigger one, more fine-tuning. Usually the model was fine. What broke was everything around it — the handoffs, the retries, the moment it had to ask a human for help and didn't.</p>
  <p>Users never touch your model directly. They touch the seams between its steps, and that's where a product earns or loses their trust.</p>
  <blockquote>Users don't experience your model. They experience your seams.</blockquote>
</section>

<section data-title="Pattern">
  <h2>Dazzling demo, fraying edges</h2>
  <p>The demo runs the golden path: one clean request, one confident result. Production runs the other ninety-nine: ambiguous input, a tool that times out, a permission the agent doesn't have, a step that half-succeeds. The model handled the reasoning. Nobody designed the joints.</p>
</section>

<section data-title="Mechanism">
  <h2>Trust leaks at the joints</h2>
  <p>Every seam is a place where the product makes a promise: <em>I understood you, I'll recover from that, I won't do something irreversible without asking.</em> Each tool call, each retry, each human handoff is a small contract with the user. Break one and the intelligence of the model stops mattering — the user has decided they can't rely on the thing.</p>
</section>

<section data-title="Failure Mode">
  <h2>Confidently wrong, with no undo</h2>
  <p>The seam that ends products: an agent takes a confident, irreversible action on a misread instruction, and there's no graceful way back. The model was 95% right, which in a product that touches real state is a way of saying it was catastrophically wrong one time in twenty — and that one time is the only one the user remembers.</p>
</section>

<section data-title="Final Take">
  <h2>The final take</h2>
  <p>Spend your product budget on the seams. Make recovery a feature, make handoffs graceful, make irreversible actions ask first. The model will keep improving on its own. The seams only improve if someone treats them as the product — because to the user, they are.</p>
</section>
