# Chatbot AI Application (OpenAI + Bun)

A lightweight, high-performance AI chatbot application built with **Bun** and powered by the **OpenAI API**.  
This project demonstrates how to build and run a modern JavaScript-based chatbot with fast startup time, low overhead, and simple configuration.

---

## 🚀 Features

- OpenAI-powered conversational AI
- Built with Bun for fast execution and package management
- Simple and minimal setup
- Easy to extend with additional prompts, tools, or UI layers
- Environment-based configuration for secure API keys

---

## 🛠 Tech Stack

- **Runtime:** Bun
- **Language:** JavaScript / TypeScript
- **AI Provider:** OpenAI API

---

## 📦 Installation

Make sure you have **Bun** installed:

```bash
curl -fsSL https://bun.sh/install | bash
```

Install project dependencies:

```bash
bun install
```

---

## 🔑 Environment Setup

Create a `.env` file in the root directory and add your OpenAI API key:

```env
OPENAI_API_KEY=your_api_key_here
```

> ⚠️ Never commit your API key to version control.

---

## ▶️ Running the Application

Start the chatbot:

```bash
bun run index.ts
```

The application will launch and connect to the OpenAI API to handle chat requests.

---

## 📂 Project Structure

```
my-app-openai/
│
├── index.ts          # Main application entry point
├── package.json      # Project configuration
├── bun.lockb         # Bun lock file
├── .env              # Environment variables (not committed)
└── README.md         # Project documentation
```

---

## 🔧 Customization

You can easily customize the chatbot behavior by:

- Modifying system and user prompts
- Adjusting OpenAI model parameters (temperature, max tokens, etc.)
- Adding conversation memory
- Integrating a frontend UI
- Connecting to external APIs or databases

---

## 📖 About Bun

This project was created using:

```bash
bun init
```

Bun version: **v1.3.3**

[Bun](https://bun.com) is a fast all-in-one JavaScript runtime, bundler, test runner, and package manager.

---

## 📜 License

This project is open-source and available for learning and experimentation.

---

## ⭐ Support

If you find this project useful, consider giving it a star and extending it with new features!
