# fingerspell — plan

A solo, in-browser app for practising the ASL manual alphabet. The webcam tracks your hand, a model you
train on your own hand recognises letters, and games build up to spelling simple words.
Hosted free on GitHub Pages. Nothing is uploaded.

## Stack
TypeScript + Vite, Vitest, MediaPipe Hand Landmarker (`@mediapipe/tasks-vision`), TensorFlow.js
(train in the browser), GitHub Actions for CI and Pages.

## Research findings that shape the design
1. **Accuracy on new people is far lower than tutorials claim.** Reported 99–100% scores usually test on
   frames from the training videos. A Stanford CS231N project got ~65% on harder data. So: train on the
   user's own hand, and evaluate on a *different recording session* than the one trained on.
2. **A, M, N, S, T, E are the hard letters** (fists that differ by thumb position). Add thumb-specific
   features (thumb tip to each finger) and show a confusion matrix.
3. **Keep orientation.** Do not rotation-normalise: H/U, K/P, G/Q are the same handshape pointed differently.
   Normalise position (wrist origin) and size (palm length) only.
4. **Features:** wrist-relative, palm-scaled 3D landmarks + angles between finger joints + thumb distances.
   MediaPipe also gives world landmarks in metres.
5. **MediaPipe gotchas:** a mirrored selfie view swaps the Left/Right handedness label. Add a
   "dominant hand" setting and mirror left hands into one canonical form. Use VIDEO mode + GPU delegate;
   measure FPS and move detection to a worker if the UI stutters.
6. **J and Z move.** Track one fingertip's path (pinky for J, index for Z) AND check the handshape (a CMU
   project accepted an open palm drawing a J). Start with DTW template matching on the user's own
   recordings; only add a GRU if needed.
7. **Double letters** (BOOK, HELLO): signers slide sideways or bounce, and sources disagree per letter.
   Accept either a small sideways slide or a quick release-and-reform.
8. **Framing:** a practice tool, not a translator (Deaf community has criticised overclaiming tools).
   Link learners to Lifeprint / ASL University (Deaf instructor Dr. Bill Vicars) for the letters.

## PRs (in order)
1. Project setup: Vite + TS, Vitest, ESLint, CI (`npm test` + build), GitHub Pages deploy.
2. Webcam + live 21-point hand skeleton overlay, dominant-hand setting, FPS meter.
3. Feature extraction (position/size normalisation, joint angles, thumb features, orientation kept) + unit tests.
4. Record mode: guided capture per letter (with Lifeprint reference link), stored in IndexedDB, export/import JSON.
5. First recogniser: k-NN on the features; live letter + confidence bar; smoothing over the last ~10 frames.
6. Train-in-browser neural net (TF.js MLP) with a live loss chart; confusion matrix evaluated on a held-out session.
7. Practice mode: target letter, hold-to-confirm ring, streaks, extra practice on weakest letters.
8. Spell It: simple words (CAT, DOG, HELLO), letter commit timing, double-letter handling.
9. J and Z: fingertip-path DTW + handshape check.
10. README: demo GIF, honest accuracy numbers (held-out session), credits/links to Lifeprint.

The 24 static letters come first; J and Z come in PR 9.
