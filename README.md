# Instructions for Use
Please note that these instructions are for setting up this app with the Fitbit OS Simulator. They are largely taken from the guide [Here](https://dev.fitbit.com/getting-started/) and have been adapted for brevity.

## Prerequisites/Setup
Install [Node.js](https://nodejs.org/en/download/)

Verify that node is installed with the following command:

`node --version`

Download the Fitbit OS Simulator for [Windows](https://simulator-updates.fitbit.com/download/stable/win) or [macOS](https://simulator-updates.fitbit.com/download/stable/mac)

After the simulator is installed and running, be sure to change the device type to **Versa 3 (atlas)**.

## Build and Install the Baymax App
1. Open a terminal or command prompt window within the project folder on your device.
2. Type `npx fitbit`. This should prompt you to log in with a Fitbit account. **Make sure this is the same account logged in the simulator!**
3. Your command prompt should now display `fitbit$`. Type `build`, then `install`. Alternatively, type `bi` to run both commands.
4. If everything has gone correctly, you should now see the app in the Fitbit Simulator.
5. If you go into the Sensor tab and adjust the heart rate, you should see the background color change.
6. When you're finished, you can simply close the simulator and your command prompt.
