<!-- markdownlint-disable MD033 MD012 -->

# Playtests — ZQM Labs

<!-- ZQM-START -->
<p align="center">
  <strong>ZQM Labs — Z's Quests & Mischief</strong><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">GitHub</a>
</p>
<!-- ZQM-END -->



How **ZQM Labs — Z's Quests & Mischief** games get tested before they ship —
and what we learned. *Games, gear & a little mischief.*

## Contents

| Path | What it is |
|---|---|
| [`protocols/playtest-protocol.md`](protocols/playtest-protocol.md) | The standard playtest: roles, run-of-show, timing sheet, what to observe. |
| [`results/`](results/) | Anonymized playtest reports, one file per session. |

## Why public

A game you've only played yourself is a draft. Publishing our playtest
discipline — and its honest results — is how organizers trust that a ZQM kit
works on event night. We print the warts too.

## Contributing results

Ran a ZQM kit? Copy [`results/_template.md`](results/_template.md), fill it
in,
and send it to <zqmcomputing@gmail.com>. Anonymized excerpts may be published
here.

## Test for communities, not just completion

A successful run means more than finishing all stops. Playtests should help
establish whether different communities can understand, access, adapt, and
enjoy the experience safely.

When possible, record:

- **Context:** broad venue type and group format; do not include participant
  names or precise home locations.
- **Access:** mobility, vision, hearing, reading, language, sensory, and
  non-GPS alternatives that were needed.
- **Cultural fit:** confusing or inappropriate references, assumptions about
  local customs, and content that needs adaptation.
- **Reliability:** startup errors, missing art, offline behavior, saved
  progress, sign-code flow, and device/browser differences.
- **Community agency:** whether hosts could adapt the event and participants
  felt included rather than treated as a generic audience.
- **Evidence:** separate observed outcomes from guesses; include steps to
  reproduce technical failures.

### Contribution and privacy

Use the existing result template and remove names, contact details, faces,
exact home addresses, and other identifying details. Get explicit permission
before submitting quotations or photos. Submit findings through the documented
contact route or an issue in this repository. A report may be reviewed before
publication; submitting it does not guarantee acceptance or publication.

Do not claim a language, region, accessibility accommodation, or device
configuration is supported based on a single successful run. Record the tested
scope and limitations.

## More from ZQM Labs

- [quest-packs][qp] — edition catalog + free sample quest
- [organizer-toolkit][otk] — setup checklists, print specs, FAQ
- [quest-authoring][qa] — quest-pack spec, guide, and validator
- [zqmlabs-site][site] — the public website

[qp]: https://github.com/ZQM-Labs/quest-packs
[otk]: https://github.com/ZQM-Labs/organizer-toolkit
[qa]: https://github.com/ZQM-Labs/quest-authoring
[site]: https://github.com/ZQM-Labs/zqmlabs-site

<https://zqmlabs.com> · *Play more. Plan less.*


<!-- ZQM-FOOTER-START -->
---

<p align="center">
  <em>Play more. Plan less.</em><br>
  <a href="https://zqmlabs.com">zqmlabs.com</a> •
  <a href="https://github.com/ZQM-Labs">ZQM Labs</a> •
  <a href="https://github.com/ZQM-Computing">ZQM Computing</a>
</p>
<!-- ZQM-FOOTER-END -->

## Versioned release evidence

Every release-relevant report should identify the exact player commit/release, quest-pack release/tag, device/browser, operating system, and test date. If any version is unknown, mark it **unknown** rather than guessing.

Separate evidence into three categories:

1. **Automated:** CI jobs, validator output, browser tests, and reproducible logs.
2. **Device-tested:** startup, offline/reload, progress persistence, QR/manual entry, language behavior, and failure recovery on named device/browser combinations.
3. **Field-tested:** actual route, printed signs, GPS conditions, permissions, safe placement, and accessible alternatives.

For each failure, include minimal reproduction steps, expected versus actual behavior, severity, and whether it blocks release. Keep participant identities, exact home locations, contact details, and unapproved photos out of reports. A successful test proves only the configuration and scope actually tested; it does not establish universal support.


## Wisp's Lost Lanterns status decision

Use this repository to establish release evidence, not to infer release status from a planned date, demo URL, passing CI, or a catalog label. Before describing Wisp's Lost Lanterns as field-approved, link the dated report(s) for the exact player and pack versions and confirm that route/QR/GPS behavior, offline recovery, content/language scope, venue permissions, safety, and accessible alternatives were actually tested. Checkout/payment/confirmation/fulfillment must have its own end-to-end evidence and is not covered by a playtest alone. Until the records are located and reviewed, release and field-readiness status remain **unverified**.

## Related repos

- [lantern-player](https://github.com/ZQM-Labs/lantern-player) — the player PWA
- [wisps-tracker](https://github.com/ZQM-Labs/wisps-tracker) — team tracking backend
- [quest-authoring](https://github.com/ZQM-Labs/quest-authoring) — quest pack spec, validator, and generator
- [quest-packs](https://github.com/ZQM-Labs/quest-packs) — ready-to-play quest packs
- [zqmlabs-site](https://github.com/ZQM-Labs/zqmlabs-site) — the public website

## Installation

```bash
pip install -e .
```

Requires Python 3.11+.

## License

MIT — see [LICENSE](LICENSE).
