import ReactGA4 from "react-ga4";
const InitializeGoogleAnalytics = () => {
  // Initialize GA4 - Add your measurement ID
  ReactGA4.initialize("G-7WZK3YTRWR");

  console.log("GA INITIALIZED");
};

const TrackGoogleAnalyticsEvent = (category, action, label) => {
  console.log("GA event:", category, ":", action, ":", label);
  // Send GA4 Event
  ReactGA4.event({
    category: category,
    action: action,
    label: label,
  });
};

export default InitializeGoogleAnalytics;
export { InitializeGoogleAnalytics, TrackGoogleAnalyticsEvent };
