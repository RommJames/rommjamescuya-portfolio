# 1 - THINKBOARD

"""

# 🧠 RJ Thinkboard

A full-stack note-taking and idea management application built with the MERN stack. Thinkboard lets you capture, organize, and manage your thoughts and notes through a clean, responsive interface.

## 📋 Project Description

RJ Thinkboard is a modern web application that provides a simple and intuitive platform for creating and managing notes or "thoughts." It features a decoupled frontend and backend architecture, rate limiting via Upstash Redis to protect the API, and a responsive UI powered by Tailwind CSS and DaisyUI.

## 🛠️ Technologies Used

### Frontend

| Technology                                      | Description                        |
| ----------------------------------------------- | ---------------------------------- |
| [React 19](https://react.dev/)                  | UI component library               |
| [React Router v7](https://reactrouter.com/)     | Client-side routing                |
| [Axios](https://axios-http.com/)                | HTTP client for API requests       |
| [Tailwind CSS](https://tailwindcss.com/)        | Utility-first CSS framework        |
| [DaisyUI](https://daisyui.com/)                 | Tailwind CSS component library     |
| [Lucide React](https://lucide.dev/)             | Icon library                       |
| [React Hot Toast](https://react-hot-toast.com/) | Notifications and toast alerts     |
| [Vite](https://vitejs.dev/)                     | Frontend build tool and dev server |

### Backend

| Technology                                                 | Description                              |
| ---------------------------------------------------------- | ---------------------------------------- |
| [Node.js](https://nodejs.org/)                             | JavaScript runtime environment           |
| [Express](https://expressjs.com/)                          | Web application framework                |
| [MongoDB](https://www.mongodb.com/)                        | NoSQL database                           |
| [Mongoose](https://mongoosejs.com/)                        | MongoDB object modeling for Node.js      |
| [Upstash Redis](https://upstash.com/)                      | Serverless Redis for rate limiting       |
| [@upstash/ratelimit](https://github.com/upstash/ratelimit) | Rate limiting middleware                 |
| [dotenv](https://github.com/motdotla/dotenv)               | Environment variable management          |
| [cors](https://github.com/expressjs/cors)                  | Cross-origin resource sharing middleware |
| [Nodemon](https://nodemon.io/)                             | Auto-restart dev server on file changes  |

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Upstash Redis account (for rate limiting)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/RommJames/rj-thinkboard.git
   cd rj-thinkboard
   ```

2. **Install all dependencies and build the frontend**

   ```bash
   npm run build
   ```

3. **Configure environment variables**

   Create a `.env` file in the `backend/` directory:

   ```env
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
   PORT=5000
   ```

4. **Start the application**
   ```bash
   npm start
   ```

### Development

To run the frontend and backend in development mode separately:

```bash
# Backend (from /backend directory)
npm run dev

# Frontend (from /frontend directory)
npm run dev
```

## 📁 Project Structure

```
rj-thinkboard/
├── backend/
│   └── src/
│       └── server.js       # Express server entry point
├── frontend/
│   ├── src/                # React application source
│   ├── public/             # Static assets
│   └── index.html          # HTML entry point
└── package.json            # Root scripts for build & start
```

"""

# 2 - My Library

"""

# MyLibrary: A Personal Book Management System

**MyLibrary** is a client-side web application that lets you build and manage your own personal book collection — right in the browser. Whether you're tracking books you've borrowed, purchased, or are currently reading, MyLibrary gives you a clean and intuitive interface to stay on top of your reading life. All data is persisted via the browser's **Local Storage**, so your library is always available without needing a backend or database.

The project was built as a vanilla JavaScript exercise, showcasing core web fundamentals such as DOM manipulation, object-oriented design with constructors, and persistent client-side storage — no frameworks or libraries required.

## Features

- **Add Books:** Easily input details for each book you borrow or purchase, including:
  - Title
  - Author
  - Number of Pages
  - Reading Status (Not Read, In Progress, Finished)

- **Remove Books:** Keep your library organized by removing specific books or clearing out your entire collection with just a click.

- **Update Reading Status:** Track your reading journey by changing the status of each book, ensuring you know exactly where you stand.

- **Choose Display Style:** Select how you want your books to be displayed, either in a list style or card style (default), for a personalized viewing experience.

- **Local Storage:** All your data is automatically saved locally, so you can access your library anytime without losing your progress.

## Technologies Used

| Technology            | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| **HTML5**             | Semantic page structure and form elements                     |
| **CSS3**              | Styling, layout, and responsive design                        |
| **JavaScript (ES6+)** | Application logic, DOM manipulation, and OOP via constructors |
| **Web Storage API**   | Client-side data persistence using `localStorage`             |

> No frameworks or external dependencies — built entirely with vanilla web technologies.

## Future Enhancements

- User authentication for multiple users
- Advanced search and filtering options
- Integration with external book databases for additional information

---

Thank you for exploring MyLibrary! Happy reading!
"""

# 3 - PixelSketch

"""

# PixelSketch: Art at Your Fingertips

**PixelSketch** is a browser-based pixel drawing application that blends the creativity of a digital sketchpad with the nostalgic charm of an Etch A Sketch. Draw freely on a customizable grid, experiment with colors, and export your artwork — all without any installation required.

🔗 **[Try it live!](https://rommjames.github.io/pixel-sketch/)**

---

## 🛠️ Technologies Used

| Technology               | Purpose                                                   |
| ------------------------ | --------------------------------------------------------- |
| **HTML5**                | Structure and layout of the application                   |
| **CSS3**                 | Styling, responsive design, and UI components             |
| **JavaScript (Vanilla)** | Core drawing logic, event handling, and interactivity     |
| **html2canvas** (v1.4.1) | Capturing the sketch grid and exporting it as a PNG image |

---

## ✨ Features

- **Hover & Draw** — On desktop, hover over the grid to paint pixels instantly. Left-click drawing is also supported. On mobile, touch the screen to create.
- **Color Customization** — Pick any color with the built-in color picker to personalize your drawings.
- **Rainbow Mode** — Activate a vibrant mode that randomly shifts colors as you draw for a dynamic, psychedelic effect.
- **Eraser Mode** — Precisely erase areas of your artwork without clearing the whole canvas.
- **Clear Button** — Wipe the entire sketch area with a single click to start fresh.
- **Customizable Grid** — Default 16×16 grid with a slider to resize up to 100×100 for highly detailed pixel art.
- **Download Your Artwork** — Export your finished drawing as a PNG file via the Download button.
- **Collapsible Settings Panel** — Hide or show the control panel to maximize your drawing area.
- **Keyboard Shortcuts** — Speed up your workflow with hotkeys:

  | Key | Action                    |
  | --- | ------------------------- |
  | `1` | Hover Mode                |
  | `2` | Click Mode                |
  | `3` | Activate Brush Color      |
  | `4` | Open Color Picker         |
  | `Q` | Eraser Mode               |
  | `W` | Clear Sketch Area         |
  | `E` | Rainbow Brush             |
  | `A` | Hide / Show Setting Panel |
  | `S` | Download Sketch           |

---

## 🚀 Getting Started

No installation needed! Simply open `index.html` in your browser, or visit the [live demo](https://rommjames.github.io/pixel-sketch/).

```bash
# Clone the repository
git clone https://github.com/RommJames/pixel-sketch.git

# Open in your browser
open index.html
```

---

## 📁 Project Structure

```
pixel-sketch/
├── index.html        # Main HTML entry point
├── favicon.ico       # Site favicon
└── src/
    ├── script.js     # Application logic and drawing engine
    └── styles.css    # Styling and layout
```

---

> **Note:** Local storage is not yet implemented — be sure to download your artwork before closing the tab!
> """

# 4 - Grocery Checkout Simulator

"""

# 🛒 Grocery Checkout with UI

A browser-based grocery checkout system that simulates a point-of-sale (POS) experience. Users can browse available products, scan items into a cart, apply sales promotions, manage the checkout monitor, and generate a printable official receipt — all within a clean and interactive UI.

## 📋 Features

- **Product Listing** — Browse all available grocery items with their name, price per unit, and sales promotion status.
- **Item Scanning** — Click on any product to open a checkout modal where you can input the desired quantity.
- **Sales Promotions** — Automatically applies active promotions to the item price and quantity.
- **Checkout Monitor** — Tracks all scanned items with the ability to delete individual entries or clear the entire cart.
- **Official Receipt** — Displays a live receipt with product details, quantities, prices, and a running total — updated in real time.
- **Print Receipt** — Exports the official receipt as an image using `html2canvas`.
- **Live Date & Time** — The receipt displays the current date and time, updated every 500ms.

## 🗂️ Project Structure

```
Grocery-Checkout-with-UI/
├── index.html              # Main HTML layout
├── index.js                # Core application logic (ES Module)
├── style.css               # Styling for the UI
├── favicon.ico             # App icon
├── media/                  # Static assets (e.g., barcode image)
└── src/
    ├── products.js         # Product data
    ├── promotion.js        # Sales promotion logic
    ├── accumulatedCart.js  # Cart aggregation logic
    ├── getCurrentDateTime.js # Date & time utility
    └── html2canvas.min.js  # Library for receipt image export
```

## 🛠️ Technologies Used

| Technology            | Purpose                                                                 |
| --------------------- | ----------------------------------------------------------------------- |
| **HTML5**             | Page structure and layout                                               |
| **CSS3**              | Styling and responsive design                                           |
| **JavaScript (ES6+)** | Application logic, DOM manipulation, ES Modules                         |
| **html2canvas**       | Captures the receipt DOM element and exports it as a downloadable image |

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/RommJames/Grocery-Checkout-with-UI.git
   ```
2. Open `index.html` in your browser.

> ⚠️ Because the project uses ES Modules (`type="module"`), it must be served via a local server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code) rather than opened directly as a file.

## 📄 License

This project is open source and available for personal and educational use.
""'

# 5 - Tic Tac Toe

"""

# Tic-Tac-Toe Web Game

A web-based Tic-Tac-Toe game where you can play against a friend or take on a computer opponent. The game is simple, interactive, and supports multiple rounds with score tracking.

The computer opponent does **not** use any AI or decision-making algorithm — it simply picks a random available cell on the board using an index randomizer, so don't expect it to play smart!

## Technologies Used

- **HTML** — Page structure and layout
- **CSS** — Styling and visual design
- **JavaScript (Vanilla)** — Game logic, UI interactions, and DOM manipulation

## Features

- **Two Game Modes**:
  - **2 Player Game**: Play with a friend, with Player X starting the game.
  - **VS Computer**: Choose whether you will be Player X or Player O. The computer opponent picks its moves randomly from the remaining available cells.

- **Score Tracking**:
  - Every time a player wins, their score is updated automatically.
  - The game tracks scores for both Player X and Player O.

- **End of Round Options**:
  - After a round ends, you can choose to continue to the next round or stop the game.
  - If you stop, the player with the highest score is declared the winner.

- **Restart Option**: After ending the game, you have the option to restart and play again.

## Code Design

- **Factory Functions**: The game logic is built using factory functions to create reusable and independent game objects (such as players and the game board), ensuring modularity and flexibility.

- **Closures**: Closures are used to maintain private state and provide encapsulation, making the game state (like scores and moves) securely accessible and manipulable only within appropriate scopes.

- **Module Pattern**: The application is structured with the Module Pattern to organize the code into self-contained modules. This allows for better maintainability, reusability, and separation of concerns.
  """

# 6 - Aim Trainer

"""

# 🎯 Aim Trainer

A browser-based aim trainer game designed to **test and improve your aiming skills and reflex performance**. Click on randomly appearing targets as fast and accurately as you can to rack up your score!

## 🕹️ Features

- Animated loading screen with a custom crosshair logo
- Player name entry before starting
- Randomly spawning target circles to click
- Live score and remaining targets display
- Mobile-friendly (touch support)

## 🛠️ Technologies Used

| Technology     | Purpose                                          |
| -------------- | ------------------------------------------------ |
| **HTML5**      | Page structure and game layout                   |
| **CSS3**       | Styling, animations, and responsive design       |
| **JavaScript** | Game logic, target spawning, and interactivity   |
| **PHP**        | Server-side support (e.g., leaderboards backend) |

## 📁 Project Structure

```
aim-trainer/
├── index.html        # Loading/splash screen
├── game/
│   └── index.html    # Main game screen
├── css/              # Stylesheets
├── js/               # JavaScript files
└── media/            # Images and assets
```

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Press any key (or tap the screen on mobile) to proceed.
4. Enter your name and start training your aim!

---

_Made by RJCuya_
"""

# 7 - Admin Dashboard

"""

# Admin Dashboard

A responsive **Admin Dashboard** web application built as a practice project to showcase proficiency in modern front-end web development. This project demonstrates effective use of HTML, CSS (Flexbox & Grid), JavaScript, and PHP to create a fully structured, visually appealing, and functional admin interface.

## 🖥️ Live Demo

> Hosted via GitHub Pages — [View Live](https://rommjames.github.io/admin-dashboard/)

## 📋 Project Description

The Admin Dashboard is a front-end project designed to simulate a real-world admin panel interface. It features a clean sidebar navigation, a top header bar, content cards, and project panels — all laid out using CSS Grid and Flexbox for precise, responsive control. The project emphasizes semantic HTML structure, maintainable CSS architecture, and dynamic interactivity through JavaScript, with PHP supporting server-side logic.

## 🛠️ Technologies Used

| Technology     | Purpose                                 |
| -------------- | --------------------------------------- |
| **HTML5**      | Semantic markup and page structure      |
| **CSS3**       | Styling, layout, and responsive design  |
| **CSS Grid**   | Primary layout system for the dashboard |
| **Flexbox**    | Component-level alignment and spacing   |
| **JavaScript** | Dynamic behavior and interactivity      |
| **PHP**        | Server-side scripting and logic         |

## 📁 Project Structure

```
admin-dashboard/
├── index.html       # Main dashboard page
├── style.css        # Global styles (Grid & Flexbox layouts)
├── js/              # JavaScript files
├── projects/        # Project-related assets or pages
└── media/           # Images and media assets
```

## ✨ Key Features

- **Responsive Layout** — Adapts seamlessly across different screen sizes.
- **CSS Grid & Flexbox** — Demonstrates mastery of modern CSS layout techniques.
- **Clean & Minimal UI** — Focused on usability and visual clarity.
- **Semantic HTML** — Well-structured markup for accessibility and maintainability.
- **JavaScript Interactivity** — Dynamic elements and user interactions.
- **PHP Integration** — Server-side functionality support.

## 🚀 Getting Started

### Prerequisites

- A modern web browser
- A local server (e.g., [XAMPP](https://www.apachefriends.org/) or [MAMP](https://www.mamp.info/)) if running PHP features locally

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RommJames/admin-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd admin-dashboard
   ```
3. Open `index.html` in your browser, or serve through a local PHP server for full functionality.

## 📄 License

This project is open source and available for personal and educational use.

"""

# 8 - Vocalize IT

"""

# 🔊 VocalizeIt — Transform Text to Speech with Ease

**VocalizeIt** is a lightweight, browser-based **Text-to-Speech (TTS) web application** that instantly converts any text into spoken words. Powered entirely by the native **Web Speech API**, it requires no backend, no installations, and no external libraries — just open it in your browser and start speaking.

Whether you need an accessibility aid, a reading assistant, or a quick way to hear your written content out loud, VocalizeIt has you covered.

🌐 **Live Demo**: [https://rommjames.github.io/vocalize-it/](https://rommjames.github.io/vocalize-it/)

---

## ✨ Features

- 🗣️ **Text-to-Speech Conversion** — Enter any text and have it spoken aloud with a single click.
- 🎙️ **Voice Selection** — Choose from multiple system voices with varied accents, languages, and tones.
- ⚡ **Adjustable Speech Rate** — Control how fast or slow the speech is delivered (0x to 3x).
- 🎵 **Customizable Pitch** — Modify the pitch of the voice for a personalized listening experience (0 to 2).
- ⏹️ **Stop Button** — Instantly stop the speech at any point.
- 📱 **Mobile-Friendly** — Responsive design that works seamlessly on both desktop and mobile devices.

---

## 🛠️ Technologies Used

| Technology            | Purpose                                                                         |
| --------------------- | ------------------------------------------------------------------------------- |
| **HTML5**             | Semantic page structure and UI layout                                           |
| **CSS3**              | Responsive design, styling, and layout                                          |
| **JavaScript (ES6+)** | Application logic and DOM manipulation                                          |
| **Web Speech API**    | Browser-native speech synthesis (`SpeechSynthesis`, `SpeechSynthesisUtterance`) |

> ⚠️ **Browser Support**: The Web Speech API is supported in most modern browsers (Chrome, Edge, Safari). Firefox support may be limited.

---

## 🚀 How to Use

1. Open the app in your browser.
2. Type or paste your desired text into the input field.
3. Select a voice from the available options in the dropdown.
4. Adjust the **Rate** slider to control the speed of speech.
5. Adjust the **Pitch** slider to change the tone of the voice.
6. Click **"Speak"** to hear the text read aloud.
7. Click **"Stop"** to immediately stop the speech.

---

## 📁 Project Structure

```
vocalize-it/
├── index.html              # Main HTML structure
├── style.css               # Styling and responsive layout
├── script.js               # Speech synthesis logic (Web Speech API)
├── text-to-speech-logo.png # App favicon/logo
└── rj-logo-3-nobg.png      # Author logo
```

---

## 👤 Author

**Romm James**
🌐 [Portfolio](https://rommjames.github.io/About-Me/)
🐙 [GitHub](https://github.com/RommJames)
"""

# 9 - Rock Paper Scissors

"""

# 🪨📄✂️ Rock Paper Scissors

A browser-based **Rock Paper Scissors** game where you play against the computer across multiple rounds. Choose your attack, track scores on the live scoreboard, and see who wins the match!

🎮 **[Play the game here!](https://rommjames.github.io/Rock-Paper-Scissors-Console/)**

---

## 📖 About

This is a fun and interactive Rock Paper Scissors game built as a front-end web project. The player goes head-to-head against a computer opponent that picks its move at random. The game tracks scores across configurable rounds and declares an overall winner at the end.

It was built to enhance and maintain coding and problem-solving skills — keeping things simple, clean, and playable right in the browser with no setup required.

---

## ✨ Features

- 🖱️ **Click-to-play** — choose Rock, Paper, or Scissors by clicking the icons
- 🤖 **Computer AI** — the computer picks its move randomly each round
- 📊 **Live Scoreboard** — tracks your score and the computer's score in real time
- 🔢 **Configurable Rounds** — click the round limit on the scoreboard to change the number of rounds (default: 5)
- 🏆 **Game Over Screen** — displays the winner at the end with options to play again or view the final score
- ⚔️ **Round Result Display** — shows both the player's and computer's chosen moves and the outcome of each round

---

## 🛠️ Technologies Used

| Technology                  | Purpose                                         |
| --------------------------- | ----------------------------------------------- |
| **HTML5**                   | Page structure and game layout                  |
| **CSS3**                    | Styling, layout, and visual design              |
| **JavaScript (Vanilla JS)** | Game logic, DOM manipulation, and interactivity |

No frameworks, no libraries — just pure HTML, CSS, and JavaScript.

---

## 📁 Project Structure

```
Rock-Paper-Scissors-Console/
├── index.html        # Main game page
├── src/
│   ├── script.js     # Game logic and interactivity
│   └── styles.css    # Styling and layout
└── media/            # Images (rock, paper, scissors icons, favicon)
```

---

## 🚀 Getting Started

To run locally, simply clone the repository and open `index.html` in your browser:

```bash
git clone https://github.com/RommJames/Rock-Paper-Scissors-Console.git
cd Rock-Paper-Scissors-Console
# Open index.html in your browser
```

No build steps or dependencies required.

---

## 📄 License

Copyright © 2024 Romm James

"""

# 10 - Hotel V Layout

"""

# Hotel V Layout

A front-end layout project for a hotel website, built as part of a WorldSkills practice exercise. The page showcases a full hotel detail view including room booking, meeting & events, a photo gallery, testimonials, and a "Things To Do" sidebar — all structured with a responsive, multi-column layout.

## Features

- **Room Booking Widget** – Allows guests to enter arrival/departure dates, number of nights, adults, and children to check availability.
- **Side Navigation** – Vertical hotel navigation with links to Find a Hotel, Meeting & Events, and About Hotel.
- **Hotel Detail Sub-navbar** – Displays amenities, map, and room type options, along with check-in/check-out times and a map image.
- **Meeting & Events Section** – Showcases event venue types (Gatherings, Meetings, Workshops) with images.
- **Photo Gallery** – Canvas-based photo gallery with supporting hotel imagery and guest testimonials.
- **Things To Do Sidebar** – Promotional ads sidebar with a sponsor callout.
- **Footer** – Contact info, newsletter subscription, and hotel group branding.

## Technologies Used

| Technology         | Purpose                                                    |
| ------------------ | ---------------------------------------------------------- |
| **HTML5**          | Page structure and semantic markup                         |
| **CSS3**           | Styling, layout (multi-column/grid), and responsive design |
| **JavaScript**     | Photo gallery canvas rendering (`photo-gallery.js`)        |
| **PHP**            | Server-side icon include (`icon.php`)                      |
| **prefix-free.js** | CSS vendor prefix automation                               |
| **Custom Fonts**   | Local font assets (via `Fonts/` directory)                 |

## Project Structure

```
hotel-v-layout/
├── index.html          # Main HTML page
├── style.css           # All styles for the layout
├── Fonts/              # Custom font files
├── Images/             # Image assets (photos, map, icons, ads)
└── js/
    ├── photo-gallery.js  # Canvas-based photo gallery script
    └── prefix-free.js    # CSS prefix library
```

## Credits

© 2015 WorldSkills

"""

# 11 - Rubik's Cube Animation

"""

# Rubik's Cube Animation

A pure CSS and HTML implementation of a 3D animated Rubik's Cube. This project showcases two simultaneously rotating cubes — one spinning on the Y-axis and another on the X-axis — built entirely without JavaScript, using CSS 3D transforms and keyframe animations.

## 🎯 Project Description

This project renders a pair of 3D Rubik's Cubes directly in the browser using semantic HTML and CSS. Each cube is composed of six faces (front, back, left, right, top, bottom), with each face containing a 3×3 grid of colored tiles represented by `<span>` elements. The cubes rotate continuously and independently using CSS animations, demonstrating the power of CSS 3D transforms for visual effects.

## 🛠️ Technologies Used

| Technology           | Purpose                                                                                             |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| **HTML5**            | Structure and markup of the cube faces and tiles                                                    |
| **CSS3**             | 3D transforms (`rotateX`, `rotateY`), `perspective`, `@keyframes` animations, and cube face styling |
| **PHP** _(optional)_ | Server-side icon inclusion via `include_once` (used in a broader project context)                   |

## 📁 File Structure

```
rubrics-cube-animation/
├── index.html   # HTML structure of the two animated cubes
├── style.css    # All 3D transforms, animations, and visual styling
└── readme.md    # Project documentation
```

## 🚀 Getting Started

Simply open `index.html` in any modern web browser — no build tools or dependencies required.

> **Note:** The PHP `include_once` snippet in `index.html` is part of a larger project context. It can be safely removed or ignored when running the file standalone.
> """

# 12 - Loading Animation

"""

# Loading Animation

A pure CSS loading screen animation featuring four colored circles that rotate and swap positions in a smooth, infinite loop — built as a reusable loading screen component.

## 📋 Description

This project implements an animated loading screen using four circular elements arranged in a 2×2 grid. Each circle moves in a coordinated keyframe animation, cycling through all four corner positions over a 5-second loop. The animation is centered over a full-viewport background image, making it suitable as a splash/loading screen for web applications.

## 🛠️ Technologies Used

| Technology | Purpose                                            |
| ---------- | -------------------------------------------------- |
| **HTML5**  | Page structure and loading spinner markup          |
| **CSS3**   | Styling, layout (Flexbox), and keyframe animations |
| **PHP**    | Server-side icon inclusion via `include_once`      |

## 📁 Project Structure

```
loading-animation/
├── index.html       # Loading screen markup
├── style.css        # Animation styles and keyframes
└── background.png   # Background image for the loading screen
```

"""

# 13 - RGB Slider

"""

# RGB Slider

An interactive web app that lets you mix colors in real time using Red, Green, and Blue sliders. As you adjust each slider (ranging from 0 to 255), the background color updates instantly and displays the corresponding `rgb()` value on screen.

## 🚀 Live Demo

Check it out on GitHub Pages: [https://rommjames.github.io/rgb-slider/](https://rommjames.github.io/rgb-slider/)

## 🛠️ Technologies Used

| Technology     | Purpose                                      |
| -------------- | -------------------------------------------- |
| **HTML**       | Page structure and range input sliders       |
| **CSS**        | Styling and layout                           |
| **JavaScript** | Real-time color updates via DOM manipulation |
| **PHP**        | Icon inclusion (`icon.php`)                  |

## 📁 Project Structure

```
rgb-slider/
├── index.html   # Main HTML file with slider inputs
├── style.css    # Stylesheet for layout and design
└── script.js    # JavaScript logic for live color mixing
```

"""

# 14 -
