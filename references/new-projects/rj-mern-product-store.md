# 🛒 RJ MERN Product Store

A full-stack product management web application built with the **MERN** stack. Users can create, view, update, and delete products through a clean and responsive UI.

---

## 🚀 Features

- View a list of all products
- Add new products (name, price, image)
- Edit existing products
- Delete products
- Responsive UI with light/dark mode support

---

## 🧰 Technologies Used

### Frontend
| Technology | Description |
|---|---|
| [React 19](https://react.dev/) | UI library for building component-based interfaces |
| [Vite](https://vitejs.dev/) | Fast frontend build tool and dev server |
| [Chakra UI](https://chakra-ui.com/) | Component library for accessible and responsive design |
| [Zustand](https://zustand-demo.pmnd.rs/) | Lightweight state management |
| [React Router DOM](https://reactrouter.com/) | Client-side routing |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon library |
| [Framer Motion](https://www.framer.com/motion/) | Animation library |

### Backend
| Technology | Description |
|---|---|
| [Node.js](https://nodejs.org/) | JavaScript runtime environment |
| [Express](https://expressjs.com/) | Minimal and flexible web framework |
| [MongoDB](https://www.mongodb.com/) | NoSQL document database |
| [Mongoose](https://mongoosejs.com/) | MongoDB object modeling for Node.js |
| [dotenv](https://github.com/motdotla/dotenv) | Environment variable management |

---

## 📁 Project Structure

```
rj-mern-product-store/
├── backend/
│   ├── config/        # Database connection
│   ├── controllers/   # Route handler logic
│   ├── models/        # Mongoose schemas
│   ├── routes/        # API route definitions
│   └── server.js      # Express app entry point
├── frontend/
│   ├── public/
│   └── src/           # React components, pages, store
├── package.json        # Root scripts (dev, build, start)
└── .env               # Environment variables (not committed)
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/) instance (local or Atlas)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RommJames/rj-mern-product-store.git
   cd rj-mern-product-store
   ```

2. **Set up environment variables**

   Create a `.env` file in the root directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

3. **Install dependencies & build**
   ```bash
   npm run build
   ```

### Running the App

- **Development mode** (with hot reload):
  ```bash
  npm run dev
  ```

- **Production mode**:
  ```bash
  npm start
  ```

---

## 📜 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).
