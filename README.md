Weather Agenda Documentation

Developed by TC

Overview
Weather Agenda is an Angular application that allows users to check current weather conditions and forecasts for cities around the world. The application provides real-time weather data, including temperature, humidity, and weather status, along with a 5-day forecast and personalized advisories based on current weather conditions.
Project Structure
Core Components

Main Component: The primary interface where users input city names and view weather information.
Info Component: Provides information about the application's purpose and features.
Layout Components:

Nav Component: Navigation bar with links to Home and Info pages.
Footer Component: Displays developer information and GitHub link.



Services

Weather Service: Handles API communication with OpenWeatherMap to fetch current weather and forecast data.

Features
Current Weather Display

Shows temperature in Celsius
Displays humidity percentage
Shows weather description (e.g., "clear sky", "light rain")
Shows precipitation amount when available

Weather Advisories
The application provides contextual advisories based on current weather conditions:

Temperature advisories (cold, extremely cold, warm, extreme heat)
Humidity advisories
Rain advisories (light/moderate rain, heavy rain)

5-Day Forecast

Displays a 5-day weather forecast
Each forecast entry includes date, temperature, and weather description

User Interface

Clean, responsive design using Bootstrap
Gradient background with card-based layout
Easy-to-use city search with support for keyboard shortcuts (Space and Enter keys)

Technical Implementation
API Integration

Uses OpenWeatherMap API for weather data
API key is stored in the weather service
Supports metric units (Celsius) and English language

Routing

Home route (/Home) displays the main weather component
Info route (/info) displays information about the application
Default route redirects to Home

Styling

Uses a combination of Bootstrap and custom CSS
Implements gradient backgrounds
Responsive design with mobile support

Data Processing

Transforms raw API data into user-friendly format
Filters forecast data to show one entry per day (at 12:00)
Dynamically generates weather advisories based on current conditions

Development Information
Environment

Built with Angular 16.2.2
Uses Bootstrap 5.3.2 for styling
Includes development tools like Karma for testing

Project Setup

Standard Angular CLI project structure
Includes proxy configuration for API requests
Contains configuration for VSCode integration

Deployment

Configured for deployment on platforms supporting SPA routing
Includes _redirects file for Netlify deployment
Set up with proper production build configuration

Future Enhancements
Potential areas for improvement:

Add unit switching (Celsius/Fahrenheit)
Implement location detection
Add weather maps
Include more detailed forecast information
Add historical weather data

Getting Started

Clone the repository
Run npm install to install dependencies
Run ng serve to start the development server
Navigate to http://localhost:4200/

The application will automatically reload if you change any source files.