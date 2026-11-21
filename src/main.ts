import './style.css';
import { STATIC_LETTERS } from './letters';

const app = document.querySelector<HTMLDivElement>('#app');
if (!app) throw new Error('#app element missing');

app.innerHTML = `
  <main>
    <h1>fingerspell</h1>
    <p class="tagline">A practice tool for the ASL manual alphabet. It is not a sign language translator.</p>
    <p>Everything runs in your browser. Your camera feed and recordings never leave this device.</p>
    <p class="status">Coming soon: webcam hand tracking and practice for ${STATIC_LETTERS.length} static letters, then J and Z.</p>
    <p>Learning the letters? Start with <a href="https://www.lifeprint.com/" target="_blank" rel="noopener">Lifeprint / ASL University</a>,
      taught by Deaf instructor Dr. Bill Vicars.</p>
  </main>
`;
