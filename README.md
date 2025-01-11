## Expo Image Load Failure

This repository demonstrates a bug in an Expo app where the app crashes when an image fails to load. The app uses a placeholder image URL and simulates a load failure scenario.  The issue is lack of proper error handling for the image load.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a solution.

### To Reproduce

1. Clone this repository.
2. Navigate to the project directory in your terminal.
3. Run `expo start`.
4. Observe the app behavior.  The image load might succeed or fail (50% chance of failure). If it fails, the app crashes.

### Solution

The solution involves adding proper error handling to the `Image` component's `onError` prop. This prevents the crash and allows for graceful handling of image load failures.

### Additional Notes

This bug highlights the importance of robust error handling in React Native apps, especially when dealing with asynchronous operations like image loading.