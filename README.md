# React Landing Page – S5 Exercise

This project is a first exercise using **React** to rebuild the landing page from **S1-Vanilla-HTML/CSS** using a component-based architecture and atomic design principles.

## 🖼 Demo

![Landing Page Screenshot](./public/demo.gif)

---

## 🎯 Objectives

- ✅ Recreate the S1 landing page using **React**
- ✅ Learn the **basics of React**, including:
  - JSX and Components
  - `useState` hook
  - Props and composition
- ✅ Apply **Atomic Design** principles to organize and scale components

---

## 🔄 Workflow

1. **Start from the S1 Vanilla project**
2. **Break down global HTML/CSS into reusable pieces**
3. **Convert each section into a React component**
4. **Structure the project by Atomic Design levels**

---

## 📁 Project Structure

```
src/
├── assets/                # Static files (images, etc.)
├── components/            # All UI components, grouped by sections        
│   ├── 00-Buttons/           # Reusable atoms across sections.
│   ├── 01-Navbar/               
│   ├── 02-Hero/           
│   ├── 03-Features/
│   ├── 04-Tabs/      
│   ├── 05-Download/ 
|   ├── 06-Cards    
│   ├── 07-FAQs/            
│   ├── 08-Last Section/           
│   └── 09-Footer/         
├── styles/                # Global styles
├── App.tsx                # Root component
├── main.tsx               # Entry point
```

---

## 🛠️ Tech Stack

- **React 19**
- **Javascript E16**
- **Vite** for fast dev environment
- **ESLint** for linting
- **Atomic Design** structure

---

## 📦 Installation

```bash
# 1. Clone the repo
git clone https://github.com/ireneruiz00/S5-React-landing-page

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```

---

## 🧠 What I Learned

 • How to break a page into reusable React components  
 • Managing state using useState  
 • Passing data via props  
 • Organizing a project using Atomic Design  
 • Setting up a React project using Vite and Javascript
