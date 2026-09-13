# 🚀 Dev Stack

**Build Your Ideal Development Stack**

🔗 **Live Demo:** [https://devstack0.netlify.app/](https://devstack0.netlify.app/)

Dev Stack is a web app that helps developers explore frontend, backend, database, and tooling options side by side, and put together a technology stack that fits their next project. Browse curated technologies, add the ones you like to your personal stack, and remove them just as easily — all with a clean, responsive UI that works great on desktop and mobile.

---

## 🛠️ Built With

- **React** (with TypeScript)
- **Tailwind CSS** for styling and responsive design
- **HeroUI** for UI components (Button, Drawer, etc.)
- **Gravity UI Icons** / **Lucide React** for icons
- **React Toastify** for toast notifications
- **Vite** as the build tool

---

## ✨ Features

- **🔍 Explore Technologies** — Browse a curated grid of technologies (frontend, backend, database, and tooling), each shown with its category, difficulty level, and rating.
- **📦 Build Your Stack** — Add technologies to your personal "Stack" with one click, see them listed in a live summary panel, and remove individual items or clear the whole stack instantly.
- **📱 Fully Responsive** — A polished mobile experience with a slide-in navigation drawer, a hero section that adapts cleanly to small screens, and loading skeletons that keep the layout stable while data loads.

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/No-Face00/my-dev-stack.git

# Move into the project
cd my-dev-stack

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**
JSX is a syntax that lets us write HTML-like code directly inside JavaScript. It's used in React because it makes describing what the UI should look like much easier to read and write, compared to calling functions like `createElement` manually. Under the hood, it gets compiled into regular JavaScript.

**2. What is the difference between props and state?**
Props are data passed **into** a component from its parent — the component receiving them can't change them, they're read-only. State is data that a component **manages itself**, and it can change over time (for example, when a user clicks a button). In short: props come from outside, state lives inside.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` lets a component remember and update a value between re-renders. In this project, I used it in places like `StackCard` to track whether a technology `isSelected`, and in `ExploreTechnologies`/`App` to keep track of `addStack` (the list of technologies the user has added) and the fetched technology data.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets a component run some code as a side effect, usually after it renders or when certain values change — things like fetching data, subscribing to something, or updating the document title. In this project, fetching the technologies from `data.json` is a side effect (an outside network request), so it can't just happen directly inside the render function. Instead of a manual `useEffect` + `useState` combo, I fetched the data once as a promise and used React's `Suspense` to show a loading skeleton while it resolves — this achieves the same goal (loading external data safely, outside of plain render logic) but lets `Suspense` handle showing the fallback UI automatically.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` to keep track of which item is which between re-renders. Without a stable, unique key, React can get confused about which item changed, was added, or was removed, which can cause bugs like wrong data showing up in the wrong row or unnecessary re-renders. In this project, keys like `item.name` or `label` are used when mapping over technologies and nav items.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**
Conditional rendering means showing different UI depending on some condition, instead of always rendering the same thing. For example, in the `YourStack` component, if `addStack.length === 0`, it shows a "Your stack is empty." message; otherwise, it renders the actual list of added technologies:

```tsx
{addStack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  addStack.map((item) => <StackItem key={item.name} item={item} />)
)}
```

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
A parent passes data down to a child using **props** — for example, `<StackCard technology={tech} />` passes the `technology` object down. For a child to send data back up, the parent passes down a **function** as a prop (often a state setter like `setAddStack`), and the child calls that function with new data. For example, `StackCard` receives `setAddStack` from its parent and calls `setAddStack((prev) => [...prev, technology])` when a technology is added — this updates the parent's state, and the new data flows back down to any component that depends on it (like `YourStack`).
