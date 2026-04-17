import { useState } from "react";
import ButtonShowcase from "@/components/Button/Button.showcase";
import { ExamplesGallery as ButtonExamples } from "@/components/Button/Button.examples";
import InputShowcase from "@/components/Input/Input.showcase";
import { ExamplesGallery as InputExamples } from "@/components/Input/Input.examples";
import SelectShowcase from "@/components/Select/Select.showcase";
import { ExamplesGallery as SelectExamples } from "@/components/Select/Select.examples";
import "./App.css";

type Page =
  | "button-showcase"
  | "button-examples"
  | "input-showcase"
  | "input-examples"
  | "select-showcase"
  | "select-examples";

const components = [
  {
    id: "button",
    name: "Button",
    pages: [
      { id: "button-showcase", label: "Showcase", icon: "🎪" },
      { id: "button-examples", label: "Ejemplos", icon: "📚" },
    ],
  },
  {
    id: "input",
    name: "Input",
    pages: [
      { id: "input-showcase", label: "Showcase", icon: "🎪" },
      { id: "input-examples", label: "Ejemplos", icon: "📚" },
    ],
  },
  {
    id: "select",
    name: "Select",
    pages: [
      { id: "select-showcase", label: "Showcase", icon: "🎪" },
      { id: "select-examples", label: "Ejemplos", icon: "📚" },
    ],
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("button-showcase");

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-container">
          <div className="header-title">
            <h1>Design System</h1>
            <p>Figma Components Library</p>
          </div>
        </div>
      </header>

      <nav className="app-nav">
        <div className="nav-container">
          {components.map((component) => (
            <div key={component.id} className="nav-component-group">
              <div className="nav-component-label">{component.name}</div>
              <div className="nav-buttons-group">
                {component.pages.map((page) => (
                  <button
                    key={page.id}
                    className={`nav-btn ${currentPage === page.id ? "active" : ""}`}
                    onClick={() => setCurrentPage(page.id as Page)}
                  >
                    <span className="nav-btn-icon">{page.icon}</span>
                    <span className="nav-btn-label">{page.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>

      <main className="app-content">
        {currentPage === "button-showcase" && <ButtonShowcase />}
        {currentPage === "button-examples" && <ButtonExamples />}
        {currentPage === "input-showcase" && <InputShowcase />}
        {currentPage === "input-examples" && <InputExamples />}
        {currentPage === "select-showcase" && <SelectShowcase />}
        {currentPage === "select-examples" && <SelectExamples />}
      </main>
    </div>
  );
}
