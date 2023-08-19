import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    window.location.href = 'https://digibot.trade';
  }, []);

  return null;
}
