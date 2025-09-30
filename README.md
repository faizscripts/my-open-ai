# Chatty - AI Assistant 🤖

**Live Demo:** [https://faizscripts-chatty.vercel.app/](https://faizscripts-chatty.vercel.app/)

A modern, fast, and responsive chat application built with React and Vite, powered by the Google Gemini API. The application uses Vercel Serverless Functions to securely manage API calls and enables real-time response streaming for a seamless user experience.

-----

## ✨ Features

* **Real-time Streaming:** AI responses are streamed chunk-by-chunk for low-latency feedback, utilizing Vercel Serverless Functions for efficient data transmission.
* **Chat History Management:** Full thread persistence and the ability to switch between active and previous chat sessions.
* **Dynamic Thread Titles:** Automatically generates a relevant title for new chat sessions based on the first user message.
* **Mobile-First Design:** Fully responsive layout with smooth CSS transitions for the sidebar and backdrop on mobile screens.
* **Accessible UI:** Built with accessibility (A11Y) best practices in mind, including proper focus management and ARIA attributes.

-----

## 🛠️ Tech Stack

This project leverages a full-stack JavaScript environment for development and deployment.

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Frontend** | **React**, **Vite** | Fast, modern framework and build toolchain. |
| **Styling** | **SCSS Modules** | Modular, pre-processed CSS for organized styling and responsive design. |
| **AI Model** | **Gemini API** (via Google Gen AI SDK) | Provides powerful conversational AI capabilities. |
| **Backend/Deployment** | **Vercel Serverless Functions** | Hosts the backend API (`/api/chat.ts`) for secure, scalable, and cost-effective API key management. |
| **Utilities** | **TypeScript**, **Lucide React** | Type safety and modular icon library. |

-----

## 🚀 Local Setup & Installation

Follow these steps to get a copy of the project running on your local machine.

### Prerequisites

* **Node.js** (v18+)
* **npm** or **Yarn**
* **Google Gemini API Key** (Get one from Google AI Studio)

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/faizscripts/my-open-ai.git
    cd my-open-ai
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env.local` in the project root and add your API key:

    ```
    # .env.local
    GEMINI_API_KEY="YOUR_GEMINI_API_KEY_HERE"
    ```

4.  **Run in Vercel Development Mode:**
    Since the project uses Vercel Serverless Functions for the API, you must use the Vercel CLI to run both the frontend and backend simultaneously:

    ```bash
    vercel dev
    ```

    The application will typically start at `http://localhost:3000`.

-----

## ☁️ Deployment

This project is built for **zero-configuration deployment** on Vercel.

1.  **Connect Repository:** Log in to the Vercel dashboard and import the project's Git repository (`faizscripts/my-open-ai`).
2.  **Environment Variables:** In the Vercel dashboard, navigate to **Settings** $\rightarrow$ **Environment Variables** and add the **`GEMINI_API_KEY`** for both the `Production` and `Preview` environments.
3.  **Deploy:** Vercel will automatically detect the Vite/Vercel configuration and deploy the static frontend assets and the serverless functions in the `/api` directory.

-----

## 📁 Project Structure

Key directories and files:

| Path | Description |
| :--- | :--- |
| `src/` | Contains all frontend React components and logic. |
| `src/context/AppContext.tsx` | Manages the global state for chat threads, messages, and active thread ID. |
| `src/services/chat-service.ts` | Client-side service for handling the streaming `fetch` request to the Vercel API. |
| `api/` | The serverless functions directory, handled by Vercel's Node runtime. |
| `api/chat.ts` | The core serverless function that streams responses from the Gemini API. |
| `api/gemini-client.ts` | Initializes the Gemini client instance. |

-----

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----

## 👋 Contact

Feel free to connect or contribute\!

* **GitHub:** [https://github.com/faizscripts](https://github.com/faizscripts)
* **Live App:** [https://faizscripts-chatty.vercel.app/](https://faizscripts-chatty.vercel.app/)
