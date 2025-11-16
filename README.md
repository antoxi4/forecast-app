# Weather Forecast App

This is a simple weather forecast app built with React Native.

## About the App

This application allows users to check the weather forecast for different cities. It uses the [WeatherAPI.com](https://www.weatherapi.com/) to fetch weather data.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- Yarn or npm
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/antoxi4/forecast-app.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
3. Install pods for iOS
   ```sh
   cd ios && pod install
   ```

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the root of the project.

`WEATHER_API_URL` - The base URL for the WeatherAPI.
`WEATHER_API_KEY` - Your API key from WeatherAPI.com.

Create a `.env` file in the root of the project with the following content:
```
WEATHER_API_URL=https://api.weatherapi.com/v1
WEATHER_API_KEY=your_api_key
```

## API Reference

This project uses the [WeatherAPI.com](https://www.weatherapi.com/) for fetching weather data. You need to sign up on their website to get an API key.
