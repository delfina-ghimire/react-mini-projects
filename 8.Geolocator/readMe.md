# Geolocation App using React

This is a simple React application that demonstrates how to use the browser's geolocation API to retrieve the user's GPS position. The app displays the user's latitude and longitude, allows them to request their position, and keeps track of the number of times the user has requested their position.

## How It Works

The app utilizes the `useGeolocation` custom hook to manage the geolocation functionality. This hook is responsible for handling the geolocation API calls, loading states, position data, and errors.

When the user clicks the "Get my position" button, the app invokes the `getPosition` function from the `useGeolocation` hook. If the user's browser supports geolocation, the app displays the loading state and initiates a request to retrieve the user's position. Upon successful retrieval, the latitude and longitude are displayed, along with a link to view the position on OpenStreetMap. If an error occurs during the geolocation request, an error message is displayed.

The app also tracks the number of times the user has requested their position and displays it on the page.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Geolocation API: A browser API that allows websites to retrieve the user's geographical position.

