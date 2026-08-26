# ServeSync

**Retail and Foodservice Equipment Service Platform**

**Live prototype:** [afiesdesigns-collab.github.io/ServeSync](https://afiesdesigns-collab.github.io/ServeSync/) _(active once GitHub Pages is enabled)_
**Case study by:** [Afshin Esmaeili](https://afshinesmaeeli.com) — Senior Product Designer

ServeSync connects restaurant managers, call-center agents, field technicians, and operations managers through one end-to-end service platform for reporting and resolving beverage-equipment problems.

This repo documents the end-to-end product design process — problem framing, personas, workflows, information architecture, edge cases, design system, accessibility requirements, and research/testing plans — and includes a coded, accessible prototype of the flagship flow: scan equipment → report a problem → track status.

---

## 1. The problem

When beverage equipment fails, the service experience is fragmented across telephone calls, emails, paper records, disconnected scheduling systems, and technician notes. The sections below break the experience into its component moments — what's broken about each one today, and the proposed answer.

### Report the issue

**Current problem**
- A restaurant manager may not know the equipment model, serial number, or correct service number.
- Describing a technical problem over the phone is difficult.
- Managers may report the same issue multiple times because they receive no confirmation.
- Urgent failures and minor problems may enter the same queue.

**Proposed answer**
- Let managers scan a QR code attached to the equipment.
- Automatically identify the equipment, location, service history, and warranty status.
- Provide guided issue categories such as "not dispensing," "temperature problem," "leak," or "payment/display error."
- Allow photo, video, and audio uploads.
- Display an immediate case number and estimated response time.

### Identify the equipment

**Current problem**
- Locations may contain several similar machines.
- Serial numbers can be difficult to find.
- Incorrect equipment identification causes delays and unnecessary technician visits.

**Proposed answer**
- Each machine receives a unique QR code.
- Scanning it opens its equipment profile.
- The profile contains model, serial number, installation date, location, warranty, maintenance history, and known issues.
- Manual search remains available when the code is damaged.
- Managers can confirm the equipment using a photograph.

### Contact support

**Current problem**
- Managers must repeat information to multiple support representatives.
- Support agents cannot always see earlier conversations.
- A manager may not know whether to call support, request maintenance, or contact an account representative.

**Proposed answer**
- Provide one "Get help" entry point.
- Route the case based on issue type, urgency, equipment, location, and service agreement.
- Give call-center agents the complete customer and equipment context before the conversation starts.
- Preserve chat, call notes, photographs, troubleshooting steps, and technician history in one case record.

### Call-center troubleshooting

**Current problem**
- Agents follow inconsistent scripts.
- Restaurants may receive repeated troubleshooting instructions.
- Agents cannot easily determine whether remote troubleshooting succeeded.

**Proposed answer**
- Give the agent a guided troubleshooting workspace.
- Present steps based on equipment model and reported symptoms.
- Show steps already attempted by the customer.
- Allow agents to send illustrated instructions to the manager's phone.
- Record the result of each step.
- Recommend escalation when the issue cannot be resolved remotely.

### Schedule a technician

**Current problem**
- Managers may not know when help will arrive.
- Technicians may be assigned without the required skill or replacement part.
- Scheduling changes are communicated inconsistently.

**Proposed answer**
- Show available service windows.
- Match technicians based on location, certification, workload, and required parts.
- Allow the manager to provide access instructions and business hours.
- Send confirmation, arrival updates, and delay notifications.
- Provide simple rescheduling without requiring another telephone call.

### Order replacement parts

**Current problem**
- A technician may arrive and discover that the required part is unavailable.
- Incorrect part selection creates repeat visits.
- Customers have little visibility into part-related delays.

**Proposed answer**
- Use the equipment profile and diagnosis to recommend compatible parts.
- Let technicians reserve parts before accepting the assignment.
- Show inventory availability and delivery estimates.
- Notify the customer if a part delay changes the appointment.
- Require confirmation before using a substitute part.

### Monitor service status

**Current problem**
- Customers repeatedly contact support for updates.
- Different teams may communicate conflicting information.
- Managers cannot see whether the case is waiting for a technician, part, or approval.

**Proposed answer** — a clear status timeline:

1. Issue reported
2. Case reviewed
3. Troubleshooting in progress
4. Technician assigned
5. Appointment confirmed
6. Technician en route
7. Repair in progress
8. Resolution pending confirmation
9. Case closed

Every status explains what is happening, who is responsible, and what happens next.

### Confirm resolution

**Current problem**
- Cases may close before the restaurant confirms that the equipment works.
- Repeat failures are treated as unrelated incidents.
- Operations teams receive limited information about service quality.

**Proposed answer**
- Ask the manager to confirm that the equipment is operating correctly.
- Collect a simple satisfaction rating and optional comments.
- Reopen the case with one action if the problem returns.
- Connect repeat incidents to the equipment history.
- Flag recurring failures for replacement or preventive-maintenance review.

---

## 2. Users

### Restaurant or store manager
- **Goals:** restore service quickly, understand when help will arrive, avoid repeating information, minimize disruption to customers and revenue.
- **Pain points:** limited technical knowledge, little time during busy operating hours, uncertain service status, difficult equipment identification.
- **Key interface:** a mobile-first reporting and tracking experience.

### Call-center representative
- **Goals:** understand the issue quickly, resolve simple problems remotely, reduce average handling time without reducing service quality, escalate cases with complete information.
- **Pain points:** switching between multiple systems, incomplete case information, inconsistent troubleshooting processes, repeated customer calls.
- **Key interface:** a desktop case-management and troubleshooting workspace.

### Field-service technician
- **Goals:** arrive with the correct information and parts, complete repairs efficiently, document work without excessive administrative effort, continue working in locations with poor connectivity.
- **Pain points:** incomplete diagnoses, incorrect parts, schedule changes, weak cellular service, repetitive documentation.
- **Key interface:** an offline-capable mobile technician application.

### Regional operations manager
- **Goals:** monitor service quality, identify repeated equipment problems, improve technician capacity and service-level performance, reduce downtime and repeat visits.
- **Pain points:** fragmented performance data, delayed reporting, difficulty identifying root causes, limited visibility across regions.
- **Key interface:** a desktop analytics and operations dashboard.

---

## 3. Primary scenario

A restaurant manager scans a QR code on a malfunctioning beverage dispenser. ServeSync identifies the machine and guides the manager through reporting a temperature problem.

The system detects that the machine had a similar issue two weeks earlier. A call-center agent reviews the case and attempts guided troubleshooting. The problem remains unresolved, so the agent schedules a certified technician.

Before accepting the assignment, the technician sees the equipment model, previous repair, customer-uploaded video, and recommended replacement part. The technician reserves the part, completes the repair, and records the result.

The restaurant manager receives an update, confirms that the machine works, and closes the case. The regional manager sees that this model has an elevated repeat-failure rate and initiates a preventive-maintenance review.

---

## 4. Information architecture

**Restaurant experience**
Home · My equipment · Report a problem · Active cases · Service history · Messages · Location settings · Help

**Call-center workspace**
Incoming queue · Case details · Customer profile · Equipment profile · Troubleshooting · Appointment scheduling · Parts availability · Communications history · Escalations

**Technician application**
Today's schedule · Job details · Navigation · Customer access instructions · Equipment history · Diagnostic checklist · Parts · Repair documentation · Customer confirmation

**Operations dashboard**
Service overview · Open cases · SLA performance · Equipment health · Repeat incidents · Regional comparison · Technician capacity · Parts availability · Customer satisfaction

---

## 5. Key workflows

**Manager reporting flow**
Scan equipment → confirm location → select problem → answer diagnostic questions → upload media → select urgency → review information → submit case → receive confirmation.

**Agent troubleshooting flow**
Open case → review history → confirm symptoms → follow troubleshooting sequence → record outcomes → resolve remotely or escalate → schedule service → notify customer.

**Technician flow**
Review assigned job → verify skill and parts → accept assignment → navigate to location → check in → diagnose → complete repair → document parts and work → capture customer confirmation → close job.

**Operations flow**
Review dashboard → identify recurring issue → filter by equipment model and region → inspect incident history → determine operational action → assign preventive-maintenance program.

> **Prototype scope:** the coded prototype in this repo implements the **manager reporting flow** end-to-end (scan → report → confirm → status timeline). The call-center, technician, and operations experiences are documented above as IA and workflows but not yet built — noted as next steps.

---

## 6. Edge cases to design for

- QR code is damaged.
- The wrong machine is scanned.
- The location has multiple machines with the same model.
- The manager reports a safety hazard or active leak.
- No appointment is available within the service-level agreement.
- The assigned technician becomes unavailable.
- The required part is out of stock.
- The technician has no internet connection.
- The customer is unavailable when the technician arrives.
- The repair fails shortly after the case closes.
- A manager accidentally submits the same case twice.
- Equipment history contains conflicting information.

---

## 7. Design system

Components designed for this platform:

Buttons and form controls · Search and filtering · Equipment cards · Status badges · Case timelines · Priority indicators · Data tables · Appointment selectors · File uploads · Notification banners · Troubleshooting steps · Technician checklists · Empty, loading, error, and offline states

Each component is documented for: purpose, variants, interaction states, responsive behavior, content rules, accessibility requirements, usage examples, and situations where the component should **not** be used.

The coded prototype implements a working token-driven subset: buttons/form controls, equipment card, status badges, priority indicator, case timeline, file upload, and a notification banner (offline state).

---

## 8. Accessibility

The platform is designed to demonstrate:

- WCAG AA color contrast
- Complete keyboard navigation
- Visible focus states
- Descriptive labels for form controls
- Alternatives to color-only status indicators
- Screen-reader announcements for status changes
- Accessible error summaries
- Minimum touch-target sizes
- Captions or written descriptions for uploaded video
- Reduced-motion support
- Plain-language troubleshooting instructions

---

## 9. Research plan

**Research objectives**
- Understand how equipment problems are currently reported.
- Identify information lost between managers, agents, and technicians.
- Learn what each role needs at every stage.
- Understand which cases can be resolved remotely.
- Identify the causes of repeat visits and delayed repairs.

**Participants**

Interview:
- 3–5 restaurant or retail managers
- 3–5 customer-support professionals
- 3–5 field-service technicians
- 2–3 operations managers

If beverage-industry participants are unavailable, recruit people with similar experience in restaurant equipment, appliance repair, facilities management, telecom field service, or automotive service.

**Interview questions**
- Tell me about the last time equipment failed.
- What did you do first?
- What information did you have to provide?
- Where did communication break down?
- What made the situation urgent?
- How did you know when help would arrive?
- What information was missing when you received the case?
- What causes repeat calls or repeat visits?
- Which steps must remain under human control?
- What would make you trust a new service platform?

**Important rule:** the problems and proposed answers in this document are **hypotheses**, not research findings — no interviews have been conducted yet, and no quotes here are real. Once interviews are complete, this section will be replaced with actual themes and anonymized observations, cited as such.

---

## 10. Usability test plan

Tasks to test:

1. Report a malfunctioning machine.
2. Find the current service status.
3. Troubleshoot a case as an agent.
4. Schedule a qualified technician.
5. Complete a repair without internet access.
6. Identify recurring failures as an operations manager.

Metrics to capture:
- Task-completion rate
- Time on task
- Critical errors
- Assistance required
- Misunderstood labels
- Confidence rating
- System Usability Scale (SUS) score
- Qualitative observations

**Important rule:** this is a test plan, not a completed study. No usability testing has been run yet, so no results (e.g. "reduced time by 35%") are reported here. Results will be added only after real sessions are conducted and measured.

---

## Tech

The prototype is vanilla HTML, CSS (custom properties as design tokens), and JavaScript — no framework or build step. Built through an AI-assisted design-to-code workflow (Figma tokens → Claude Code) consistent with the approach used in [`design-system-prototype`](https://github.com/afiesdesigns-collab/design-system-prototype).

## Run it locally

```
git clone https://github.com/afiesdesigns-collab/ServeSync.git
cd ServeSync
open index.html   # or: python3 -m http.server, then visit localhost:8000
```
