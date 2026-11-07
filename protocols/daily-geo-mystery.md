# Daily Geo Mystery — browser prototype acceptance protocol

**Status: test plan only. This file does not assert that a human playtest,
device test, published game, or public launch has occurred.**

Target source: [ZQM Labs site PR #86](https://github.com/ZQM-Labs/zqmlabs-site/pull/86).
This is a one-question geography prototype. It is NOT the six-stop Wisp's Lost
Lanterns player or a quest-authoring SPEC v1 pack. Do not reuse the physical
quest's GPS and QR field-test verdict as evidence for the daily puzzle.

## Before testing

Record the exact site commit SHA, OS and version, browser and version, UTC
timestamp, device class and viewport, and tester role. Use a locally served
copy or verified preview URL, not an assumed production endpoint. Never paste
participants' names, precise locations, identifiers, screenshots of personal
sessions, or unapproved images into a public issue or report.

## Acceptance matrix

| Area | Test | Expected result |
| --- | --- | --- |
| Load | Fresh visit with an ordinary mobile network | A readable original clue, three choices, the UTC date, and explicit prototype status; no login or GPS prompt |
| Daily determinism | Open independently on two devices on the same UTC date | Same clue and correct answer despite local timezone differences |
| Correct outcome | Choose the correct answer | 1/1 in spoiler-free text; all choices disabled; downloadable scorecard available |
| Wrong outcome | Choose an incorrect answer | 0/1 in text; answer revealed only on screen; all choices disabled |
| Spoiler protection | Read clipboard text and SVG contents | No location answer, clue, personal name, or device position |
| Persistence | Answer, reload same date with storage enabled | Prior result restores; choices remain disabled; no account needed |
| Privacy fallback | Block local storage, use private mode or clear storage | Quiz still works; retries are possible and must not be described as cheat-proof |
| Day change | Cross UTC midnight with the tab still open, then reload | Stale tab requests refresh before accepting a new click; a fresh date selects the new clue |
| Accessibility | Navigate without pointer and use screen reader | Logical heading/label order, visible focus, button operation and result announcement |
| Reduced motion | Enable reduced-motion setting | No required motion or animation to understand outcome |
| Copy | Copy result with permission granted and denied | Clipboard works when permitted; clear manual-selection fallback when denied |
| Graphic | Download SVG scorecard on desktop and mobile | File opens as image, is 1080x1080, labels prototype status, and contains no network images or scripts |
| Narrow viewport | Test phone portrait at 320px and 375px | Controls and score fit without horizontal clipping or tap-target collisions |
| Content | Inspect sample questions and long-term rotation | Twelve clearly labeled editorial examples; repeating set not portrayed as a finished daily content pipeline |
| Release | Inspect the published game directory and production source pin | No "playable" product claim without separate reviewed, deployed and verified release evidence |

## Manual procedure

1. Record baseline: commit, environment and storage settings. Verify the
   network inspector contains no remote analytics, mapping, tracking or login
   requests from this isolated experiment.
2. Use a fresh storage profile for the correct and incorrect paths. Record
   the visible result and compare it with exported text and SVG.
3. Repeat with local storage blocked; document browser exceptions without
   treating retries as a vulnerability in this noncompetitive prototype.
4. Verify keyboard-only completion; then conduct screen-reader checks with a
   named browser/assistive-technology pairing.
5. Confirm layout and generated SVG using at least one real mobile browser.
   Simulation/unit tests do not replace these device tests.
6. File failures with reproducible steps and severity. Retest the exact commit
   after fixes; do not promote a stale report to release evidence.

## Pass/fail and public release decision

Block promotion if the score is incorrect, the answer leaks into shareable
media, local-storage denial breaks play, a GPS or login prompt appears,
keyboard completion fails, or the page falsely describes itself as launched.
A successful test of these noncompetitive rules does not prove multiplayer,
leaderboards, anti-cheat, localized packs, real satellite images, subscription
purchase, accessibility for all users, or event readiness.

Keep the PR in draft until its code/CI gates and relevant device acceptance
are documented. Publishing a route through the pinned-source production
workflow requires separate authorization and deployment smoke tests.

Use the [separate daily puzzle results template](../results/_daily-geo-mystery-template.md)
and identify untested combinations as **not tested**, not passed.
