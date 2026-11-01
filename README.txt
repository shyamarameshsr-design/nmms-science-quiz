# NMMS SAT Science Quiz – starter package

## Included
- `index.html`: student quiz interface, 90-minute countdown, presence count and answer saving.
- `teacher.html`: Google sign-in dashboard for `shyamaramesh.sr@gmail.com`.
- `firebase-config.js`: the Firebase web-app configuration supplied in this chat.
- `questions.js`: question-bank data file.
- `database-rules.json`: starting Realtime Database rules.

## Important status
This is a **technical starter**, not yet a ready-to-run 90-question exam. `questions.js` is intentionally empty because the complete bilingual question bank must be verified against the uploaded PDF before students use it. Do not publish it as a live exam until that file contains all 90 checked questions.

## Firebase steps still required
1. In Realtime Database > Rules, review and publish `database-rules.json` only after testing. The teacher email restriction relies on Google Authentication and the exact email configured above.
2. These rules allow signed-in users to read the public presence list. Keep names and registration numbers out of presence if you do not want them visible to other signed-in students. A safer production version uses opaque presence IDs and a trusted aggregation service for counts.
3. The starter computes marks in the browser. This is **not tamper-proof**: a technically capable student can inspect or alter client code/data. For secure high-stakes scoring, use a trusted server-side scoring service (for example Cloud Functions/Cloud Run) and keep the answer key off the student client. Firebase Spark does not provide all server-side deployment options.
4. Anonymous users can create multiple identities by clearing browser data or using another device. School name is collected for reporting; it does not uniquely identify a student. Duplicate-entry prevention requires a separate agreed identifier and trusted server-side logic.

## Hosting
For deployment, use Firebase Hosting from a computer with Firebase CLI:
- `firebase login`
- `firebase init hosting` (choose this project and `public` as the directory)
- copy these files into `public/`
- `firebase deploy`

Do not put private service-account keys in this folder or in the browser.
