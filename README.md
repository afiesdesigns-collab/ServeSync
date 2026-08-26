# ServeSync AI
## Designing a connected service ecosystem for retail and foodservice equipment

**Independent UX concept by Afshin Esmaeili**
Enterprise UX · Service Design · AI-Assisted Workflows · Web + Mobile · Design Systems

**Live prototype:** [afiesdesigns-collab.github.io/ServeSync](https://afiesdesigns-collab.github.io/ServeSync/)
**Case study by:** [Afshin Esmaeili](https://afshinesmaeili.com) — Senior Product Designer

> **Disclaimer:** ServeSync AI is an independent portfolio concept created with synthetic data. It is not affiliated with or commissioned by The Coca-Cola Company or any equipment manufacturer. All company names, users, operational scenarios, and datasets shown in this project are fictional or synthetic.

## Overview

ServeSync AI connects restaurant managers, call-center specialists, field technicians, and operations leaders through one end-to-end platform for reporting, diagnosing, scheduling, repairing, and monitoring beverage-equipment incidents.

The project explores a difficult enterprise problem: how to make a fragmented service journey coherent across customer-facing and internal tools while using AI responsibly to accelerate — not replace — human judgment.

## The problem

When critical equipment fails, customers and service teams often work across telephone calls, email, disconnected scheduling tools, incomplete equipment records, and manually written technician notes. Customers repeat information, agents troubleshoot without context, technicians arrive without the right parts, and operations leaders struggle to identify recurring failures.

### How might we…

Create one accessible service ecosystem that gives every participant the right context, makes status transparent, reduces avoidable handoffs, and uses AI recommendations safely?

## Users

| User | Primary job | Core need |
|---|---|---|
| Restaurant manager | Restore service | Report quickly and know what happens next |
| Call-center specialist | Resolve or route cases | Complete context and guided troubleshooting |
| Field technician | Repair equipment | Correct diagnosis, parts, access details, and offline support |
| Operations leader | Improve service performance | Trends, repeat failures, capacity, and service-level visibility |

## Product surfaces

1. **Customer mobile experience** — QR-based equipment identification, guided reporting, media upload, appointment selection, and live case tracking.
2. **Call-center workspace** — prioritized queue, customer and equipment context, AI-assisted troubleshooting, scheduling, communication history, and escalation.
3. **Technician mobile application** — daily route, job history, parts verification, offline diagnostic checklist, repair documentation, and customer confirmation.
4. **Operations dashboard** — service-level performance, equipment health, repeat incidents, regional comparison, technician capacity, and root-cause exploration.

> **Prototype scope:** the coded prototype implements surface 1 only — the restaurant manager reporting a problem on a beverage dispenser: simulated QR scan, equipment confirmation, symptom selection (temperature, leak, or payment/display issue), an optional photo/video attachment, urgency selection (including a repeat-issue warning), and submission into a status/priority timeline. The call-center workspace, technician application, and operations dashboard are documented below as information architecture and workflows but are not yet built.

## Primary experience

A restaurant manager scans a QR code on a malfunctioning dispenser. ServeSync identifies the equipment and guides the manager through reporting a temperature problem. The platform recognizes a similar recent incident and routes the case to a call-center specialist.

The AI assistant recommends a troubleshooting sequence and displays its evidence and uncertainty. The specialist reviews each step, confirms the problem cannot be resolved remotely, and schedules a certified technician. The technician sees the equipment history, customer-uploaded video, access instructions, and recommended replacement part before accepting the job.

After the repair, the manager confirms the equipment is working. The operations dashboard connects the incident to a pattern of repeated failures and recommends preventive review. No consequential action is completed without human confirmation.

## Design principles

- **Context travels with the case.** Customers should not repeat information at every handoff.
- **Status answers three questions.** What is happening? Who owns it? What happens next?
- **AI advises; people decide.** Recommendations show evidence, uncertainty, and reversible controls.
- **Design for interruption.** Users can safely pause, resume, reassign, or recover work.
- **One system, role-appropriate views.** Shared information remains coherent without overwhelming each role.
- **Accessibility is part of quality.** Keyboard, screen-reader, contrast, error, and mobile requirements are designed from the beginning.

## Key workflows

### Customer reporting
Scan QR code → confirm equipment → select symptom → answer guided questions → upload photo/video → review urgency → submit → receive case number and response expectation.

### Call-center resolution
Open prioritized case → review customer/equipment history → inspect AI recommendation → conduct guided troubleshooting → record outcomes → resolve remotely or escalate → schedule service → notify customer.

### Technician service
Review assignment → verify certification and parts → accept job → check in → diagnose → repair → document work → capture customer confirmation → close or escalate.

### Operations investigation
Review service dashboard → identify recurring issue → filter by model, region, and timeframe → inspect incident evidence → compare possible causes → assign preventive action.

> **Prototype scope:** only the customer-reporting workflow above is coded end to end. The other three workflows are documented here as intended designs and are candidates for future prototype iterations.

## AI experience

The AI assistant may summarize case history, suggest troubleshooting steps, identify missing information, recommend routing, and flag recurring incidents. It may not independently close cases, order parts, dispatch technicians, or communicate consequential decisions to customers.

Every recommendation must show:

- Recommended action
- Supporting evidence and source
- Data freshness
- Confidence or uncertainty
- Assumptions
- Potential risk
- Accept, modify, reject, and escalate controls
- Audit history

A detailed "AI experience and safeguards" document is planned (see Repository map below) but not yet written. The repeat-issue detection and priority-badge components in the coded prototype are an early, working illustration of these principles — see the [live demo](https://afiesdesigns-collab.github.io/ServeSync/).

## Research status

The initial problem framing and user needs are **hypotheses**, not research findings. No interviews or usability sessions have been conducted yet, and nothing in this README should be read as a validated result. This repository intentionally separates assumptions from actual findings so that future portfolio claims remain credible.

Planned research:

- 5–8 contextual interviews across service roles
- Affinity mapping and Jobs to Be Done synthesis
- Current-state journey map and service blueprint
- Two rounds of moderated usability testing with 5–8 participants per round
- Accessibility evaluation and keyboard testing

## Success measures

These are proposed product measures — not claimed outcomes. No real usage data exists for this concept.

- Case-reporting completion rate
- Time to capture a complete case
- First-contact resolution rate
- Avoidable technician dispatch rate
- Repeat-visit rate
- Service-level compliance
- Customer status-inquiry volume
- Technician documentation completeness
- Recommendation acceptance and correction rate
- Usability and perceived-control scores

## Repository map

The documents below outline the planned research and design documentation for this project. **They have not been written yet** — this repository currently contains this README and the coded prototype described above. Writing these out is the intended next step, not a claim that they already exist.

- Product brief *(planned)*
- Research plan *(planned)*
- Interview guide *(planned)*
- Service blueprint *(planned)*
- Information architecture and flows *(planned — summarized above under Key workflows)*
- AI experience and safeguards *(planned — summarized above under AI experience)*
- Usability test plan *(planned)*
- Design system specification *(the coded prototype implements a working token-driven subset — see Tech below)*
- Accessibility acceptance criteria *(planned)*
- Portfolio case-study outline *(this README)*
- Synthetic service cases *(planned dataset)*

## Tradeoffs and limitations

- Only the manager-reporting flow is coded; the call-center, technician, and operations surfaces exist only as IA and workflow descriptions.
- The prototype is a static, front-end-only simulation — there is no real backend, ticketing system, or AI model behind the "repeat issue detected" logic; it is a scripted illustration of the intended behavior.
- No research has been conducted, so the personas, jobs, and success measures above are working hypotheses that need to be tested, not conclusions.
- The AI-experience safeguards (evidence, confidence, audit history) are demonstrated narrowly through the priority/status components in the prototype, not through an actual recommendation engine.

## Lessons learned

Framing this as a multi-surface ecosystem — rather than a single app — forced explicit decisions about what travels between roles (the case and its evidence) versus what stays role-specific (the call-center queue, the technician's offline checklist, the operations dashboard). Naming those boundaries early made it easier to scope a single, honest, end-to-end prototype slice instead of a shallow mockup of every screen.

## Tech

The prototype is vanilla HTML, CSS (custom properties as design tokens), and JavaScript — no framework or build step. Built through an AI-assisted design-to-code workflow (Figma tokens → Claude Code), consistent with the approach used in [`design-system-prototype`](https://github.com/afiesdesigns-collab/design-system-prototype) and [`shelfsense-ai-retail-copilot`](https://github.com/afiesdesigns-collab/shelfsense-ai-retail-copilot).

## Run it locally

```
git clone https://github.com/afiesdesigns-collab/ServeSync.git
cd ServeSync
open index.html   # or: python3 -m http.server, then visit localhost:8000
```
