'use client';

import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '15min' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);
  return (
    <Cal
      namespace="15min"
      calLink="thirdindex/15min"
      style={{ width: '100%', height: '100%', overflow: 'scroll' }}
      config={{ layout: 'month_view' }}
    />
  );
}
