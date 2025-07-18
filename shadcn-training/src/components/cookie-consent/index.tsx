import { useEffect, useState } from 'react';
import { Button } from '@/components';

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookieConsent');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 p-4 z-50 h-auto">
      <div className="max-w-container mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          We use cookies to improve your experience. By using our site, you accept our use of
          cookies.
        </p>
        <Button onClick={handleAccept} label="Accept" />
      </div>
    </div>
  );
};
