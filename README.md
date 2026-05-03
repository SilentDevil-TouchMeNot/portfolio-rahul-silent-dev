# Rahul Debnath - Interactive CV Website

Welcome to the source code for my interactive CV and Portfolio website! This project merges data science, computational neuroscience, and web development to create a unique, audio-reactive 3D experience.

## Features
- **3D Audio-Reactive Visualizer**: A bespoke WebGL/Three.js visualizer that responds in real-time to a dynamic playlist of ambient and classical tracks (Flute, Rudra V, Shiva Tandava, Maha S).
- **Interactive Dashboards**: Previews of interactive data dashboards spanning HR analytics, sales, e-commerce, and music streaming data.
- **Masonry Memory Gallery**: A curated, randomized gallery of photographs detailing my academic journey, events, and travels, featuring custom shuffle functionality and a golden representation layout.
- **Responsive Layout**: Designed to work seamlessly across mobile, tablet, and desktop devices.

## Setup & Deployment
This website is built with vanilla HTML, CSS, and JavaScript. No build step or framework is required.

To run locally:
1. Clone the repository.
2. Serve the directory using any local web server (e.g., `python3 -m http.server 8000`).
3. Open `http://localhost:8000` in your browser.

*Note: Due to browser security policies regarding Web Audio APIs, the site must be served over a local server (not via `file://`) for the audio visualizer to function.*
