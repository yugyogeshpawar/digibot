import { useEffect } from 'react';

export default function LandingPage() {
  useEffect(() => {
    window.location.href = 'http://app.digibot.trade';
  }, []);

  return null;
}
