import document from "document";
import { preferences } from "user-settings";
import { HeartRateSensor } from "heart-rate";

// Defines an object to specify heart rate levels
const heartRateLevel = Object.freeze({
    HIGH: 100,
    MEDIUM: 80,
    LOW: 60
})

if (HeartRateSensor) {
  
  // create a heart rate sensor that updates every 10 seconds
  const hrm = new HeartRateSensor({ frequency: 10 });

  let backgroundColor;

  // set the background color based on the user's current heart rate
  hrm.addEventListener("reading", () => {
    if (hrm.heartRate > heartRateLevel.HIGH) {
      backgroundColor = "red";
    } else if (hrm.heartRate > heartRateLevel.MEDIUM) {
      backgroundColor = "yellow";
    } else if (hrm.heartRate > heartRateLevel.LOW) {
      backgroundColor = "green";
    } else {
      backgroundColor = "blue";
    }

    // update the background color for the display of the app itself
    const backgroundElement = document.getElementById("background");
    backgroundElement.style.fill = backgroundColor;
  });

  hrm.start();
}