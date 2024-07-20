# React TypeScript Template Project

## Overview

This React project template is built with TypeScript and Redux to minimize API call redundancy. It leverages `c3` for chart visualizations and integrates seamlessly with a Django backend running in a Dockerized environment. The project is designed with robust state management using Redux and intuitive routing using `react-router-dom`.

## Features

- **State Management**: Utilizes Redux for efficient state management and to minimize API call redundancy.
- **Charting**: Uses `c3` for displaying charts.
- **Routing**: Implements routing with `react-router-dom` using `Link` and `NavLink`.
- **Backend Integration**: Communicates with a Django backend running in Docker.
- **TypeScript Support**: Built with TypeScript for type safety and better development experience.

## Prerequisites

- Node.js
- npm
- Redux
- React
- JavaScript
- TypeScript

## Installation

### Backend Setup

1. **Clone the Django repository**:
    ```sh
    git clone https://github.com/hn-agnihotri29/django_admin.git
    cd django_admin
    ```

2. **Run Docker Compose**:
    ```sh
    docker-compose up
    ```

### Frontend Setup

1. **Clone the React repository**:
    ```sh
    git clone https://github.com/hn-agnihotri29/react-admin.git
    cd react-admin
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Run the React application**:
    ```sh
    npm start
    ```

## Usage

### State Management

The project uses Redux for managing the application state, which helps in reducing redundant API calls and maintaining a single source of truth for the application state.

### Charting

Charts are displayed using `c3`, a D3-based reusable chart library. The charts are integrated into the dashboard to visualize data fetched from the Django API.

### Routing

Routing is handled using `react-router-dom`. Below is an example of how to use `Link` and `NavLink` for navigation:

```tsx
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
);
```

## API Integration
The React frontend communicates with the Django backend for fetching and displaying data. Ensure the Django server is running via Docker Compose before starting the React application.

##Project Structure
- src/: Contains the main application code.
- secure/components/: Reusable UI components.
- redux/: Redux store, actions, and reducers.
- src/classes/: Different section classes for types checking.
  
## Contributing
Contributions are welcome! Please create a pull request with a detailed description of your changes.

## License
This project is licensed under the MIT License.
