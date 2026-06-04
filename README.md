# 📝 Todo List App

A clean and responsive Todo List application built with **React**, **Vite**, and **Tailwind CSS**.

## 🚀 Tech Stack

- [React](https://react.dev/) — UI components and state management
- [Vite](https://vitejs.dev/) — Fast development build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS styling
- [UUID](https://www.npmjs.com/package/uuid) — Generating unique IDs for tasks

## ✨ Features

- ➕ Add new tasks
- ✏️ Edit existing tasks
- ✅ Mark tasks as completed
- 🗑️ Delete tasks
- 💾 Tasks saved in localStorage
- 🔑 Unique ID for each task using UUID
- 📱 Fully responsive design

## 📁 Project Structure

```
todo-list/
├── public/
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── .gitignore
```

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js** installed on your machine.

### Installation

1. Clone the repository
```bash
git clone https://github.com/Shrey-Mangal/todo-list.git
```

2. Navigate to the project folder
```bash
cd todo-list
```

3. Install dependencies
```bash
npm install
```

4. Install UUID package
```bash
npm install uuid
```

5. Start the development server
```bash
npm run dev
```

6. Open your browser and go to `http://localhost:5173`

## 🏗️ Project Initialization (How this project was created)

### 1. Create Vite + React project
```bash
npm create vite@latest todo-list -- --template react
cd todo-list
npm install
```

### 2. Install and setup Tailwind CSS
```bash
npm install tailwindcss @tailwindcss/vite
```

### 3. Install UUID
```bash
npm install uuid
```

## 📦 Build for Production

```bash
npm run build
```

## 👨‍💻 Author

**Shrey Mangal**
- GitHub: [@Shrey-Mangal](https://github.com/Shrey-Mangal)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).