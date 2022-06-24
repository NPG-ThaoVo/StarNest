import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom"

const DirectStore = () => {
  const STORE_URL = {
    '/learnkanji': {
      ios: 'https://apps.apple.com/app/id1542899846',
      android: 'https://play.google.com/store/apps/details?id=com.starnestkanjinew'
    },
    '/jlpttest': {
      ios: 'https://apps.apple.com/us/app/jlpt-japanese-test-practice/id1564455047',
      android: 'https://play.google.com/store/apps/details?id=com.jlpttest'
    },
    '/goethetest': {
      ios: 'https://apps.apple.com/us/app/prep-goethe-deutsch-lernen/id1572225086',
      android: 'https://play.google.com/store/apps/details?id=com.goethetest'
    },
  }
  
  const location = useLocation();

  function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return "Windows Phone";
    }

    if (/android/i.test(userAgent) || /windows/i.test(userAgent)) {
      return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) || /macintosh/i.test(userAgent) && !window.MSStream) {
      return "iOS";
    }

    return "unknown";
  }

  useEffect(() => {
    const currentOs = getMobileOperatingSystem();
    if (currentOs === "Android") {
      window.location.replace(STORE_URL[location.pathname].android)
    }
    if (currentOs === "iOS") {
      window.location.replace(STORE_URL[location.pathname].ios)
    }
  }, [])

  return <></>;
};

export default DirectStore;