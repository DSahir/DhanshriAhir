import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const allPhrases = [
  'debugging my way through life.',
  'chasing one function at a time.',
  'fluent in bits and bytes.',
  'powered by algorithms.',
  'learning, building, shipping.',
  'building on first principles.',
  'turning coffee into code.',
  'ctrl+S-ing the world.',
  'one commit away from glory.',
  'making pixels behave.',
  'async by nature, await by choice.',
];

// Shuffle and pick a random subset on each page load
function shuffleArray(arr) {
  const shuffled = [...arr];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const phrases = shuffleArray(allPhrases).slice(0, 6);

const colors = [
  '#a78bfa', // lavender
  '#67e8f9', // cyan
  '#f472b6', // pink
  '#fbbf24', // amber
  '#63d0a5', // green
  '#e94560', // accent red
];

function LoadingScreen({ onFinished }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const timeoutRef = useRef(null);
  const readyRef = useRef(false);
  const cycleCountRef = useRef(0);

  // Track when app signals it's ready
  useEffect(() => {
    const checkReady = () => {
      if (readyRef.current) return;
      readyRef.current = true;
    };

    // Listen for the custom event from App
    window.addEventListener('app-ready', checkReady);
    return () => window.removeEventListener('app-ready', checkReady);
  }, []);

  useEffect(() => {
    const current = phrases[phraseIndex];

    if (!isDeleting && displayText === current) {
      // Full phrase typed — pause, then start deleting
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayText === '') {
      // Done deleting — move to next phrase and color
      const nextIndex = (phraseIndex + 1) % phrases.length;
      cycleCountRef.current += 1;

      // After completing at least 1 full phrase AND app is ready, fade out
      if (readyRef.current && cycleCountRef.current >= 1) {
        setFadeOut(true);
        timeoutRef.current = setTimeout(() => onFinished(), 600);
        return;
      }

      setIsDeleting(false);
      setPhraseIndex(nextIndex);
      setColorIndex((prev) => (prev + 1) % colors.length);
    } else {
      const speed = isDeleting ? 30 : 60;
      timeoutRef.current = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? current.substring(0, displayText.length - 1)
            : current.substring(0, displayText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [displayText, isDeleting, phraseIndex, onFinished]);

  return (
    <div className={`loading-screen ${fadeOut ? 'loading-fade-out' : ''}`}>
      <div className="loading-content">
        <p className="loading-greeting">&lt; Dhanshri/&gt;</p>
        <div className="loading-typing">
          <span className="loading-static">I am </span>
          <span
            className="loading-dynamic"
            style={{ color: colors[colorIndex] }}
          >
            {displayText}
            <span className="loading-cursor" style={{ color: colors[colorIndex] }}>|</span>
          </span>
        </div>
        <div className="loading-dots">
          <span className="loading-dot" />
          <span className="loading-dot" />
          <span className="loading-dot" />
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
