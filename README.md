# 💻 Codeybe Editor

**Codeybe Editor** is an online code editor built using **React.js**, **TypeScript**, and **Monaco Editor**, designed to help developers write, execute, and preview **HTML, CSS, and JavaScript** code instantly in the browser — with zero setup!

🔗 **Live Demo**: [https://codeybe-editor.pages.dev](https://codeybe-editor.pages.dev)

---

## 🚀 Features

- ⚡ Real-time HTML/CSS/JS code execution  
- 🧠 Monaco Editor integration (VS Code-like experience)  
- 🌗 Dark Mode toggle  
- 📱 Fully responsive & mobile-friendly UI  
- 🎨 Tailwind CSS for modern styling  
- 🔔 Toast notifications for actions  
- 🔒 Lightweight & frontend-only

---

## 🛠️ Tech Stack

| Category      | Tools & Technologies                     |
|---------------|-------------------------------------------|
| Frontend      | React.js, TypeScript, HTML, CSS           |
| Editor        | @monaco-editor/react, monaco-themes       |
| Styling       | Tailwind CSS                              |
| UI & UX       | React Icons, React Select, Toastify       |
| Testing       | Jest, React Testing Library               |
| Deployment    | Cloudflare Pages                          |
| Version Ctrl  | Git & GitHub                              |

---

## 📂 Project Structure

```
/src
│
├── components        # Reusable UI components
│   ├── Editor.tsx
│   ├── Output.tsx
│   └── Navbar.tsx
│
├── utils             # Helper functions
├── context           # Theme and global state
├── App.tsx           # Main app logic
└── index.tsx         # Entry point
```

---

## 🧪 Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/codeybe-editor.git
cd codeybe-editor

# Install dependencies
npm install

# Start the development server
npm start
```

Visit `http://localhost:3000` in your browser.

---

## 🌐 Deployment

This project is deployed using **Cloudflare Pages**.

- Commits to `main` branch are auto-deployed  
- Live site: [https://codeybe-editor.pages.dev](https://codeybe-editor.pages.dev)

---

## 🔮 Future Enhancements

- 📝 Multi-tab editor layout  
- 💾 Save/download code feature  
- 🧑‍🤝‍🧑 Real-time collaboration  
- 🧩 Language support for Python, C++, etc.
