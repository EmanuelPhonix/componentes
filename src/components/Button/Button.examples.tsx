/**
 * Ejemplos de uso práctico del componente Button
 * Casos de uso reales en aplicaciones React
 */

import { useState, useRef } from "react";
import Button from "./Button";

/**
 * CASO 1: Formulario de Contacto
 * Botón que valida antes de enviar
 */
export function ContactFormExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!message.trim()) {
      alert("Por favor escribe un mensaje");
      return;
    }

    setIsLoading(true);
    try {
      // Simula API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Mensaje enviado!");
      setMessage("");
    } catch (error) {
      alert("Error al enviar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Formulario de Contacto</h2>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Tu mensaje..."
        style={{ width: "100%", padding: "12px", marginBottom: "16px" }}
      />
      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          variant="primary"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Enviando..."
        >
          Enviar
        </Button>
        <Button variant="secondary" onClick={() => setMessage("")}>
          Limpiar
        </Button>
      </div>
    </div>
  );
}

/**
 * CASO 2: Diálogo de Confirmación
 * Botones con acciones principales y secundarias
 */
export function ConfirmDialogExample() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    alert("Elemento eliminado!");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <Button variant="primary" onClick={() => setIsOpen(true)}>
        Eliminar elemento
      </Button>
    );
  }

  return (
    <div
      style={{
        border: "2px solid #ff0000",
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: "#fff5f5",
      }}
    >
      <h3 style={{ color: "#ff0000" }}>¿Estás seguro?</h3>
      <p>Esta acción no se puede deshacer.</p>
      <div style={{ display: "flex", gap: "12px" }}>
        <Button variant="primary" onClick={handleDelete}>
          Sí, eliminar
        </Button>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}

/**
 * CASO 3: Acceso al DOM vía Ref
 * Controlar el botón desde el padre
 */
export function RefControlExample() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [focusCount, setFocusCount] = useState(0);

  const handleFocusButton = () => {
    buttonRef.current?.focus();
    setFocusCount((count) => count + 1);
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Control vía Ref: {focusCount} veces enfocado</h2>

      <Button ref={buttonRef} variant="primary">
        Botón controlado
      </Button>

      <Button variant="secondary" onClick={handleFocusButton}>
        Enfocar botón
      </Button>

      <Button
        variant="tertiary"
        onClick={() => {
          if (buttonRef.current) {
            buttonRef.current.disabled = !buttonRef.current.disabled;
          }
        }}
      >
        Toggle Disabled
      </Button>
    </div>
  );
}

/**
 * CASO 4: Sistema de Botones de Filtrado
 * Toggle de múltiples opciones
 */
export function FilterButtonsExample() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filters = ["Todos", "Activos", "Completados", "Archivados"];

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Filtros</h2>
      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilters.includes(filter) ? "primary" : "secondary"}
            size="sm"
            onClick={() => toggleFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </div>
      <p>Filtros activos: {activeFilters.join(", ") || "Ninguno"}</p>
    </div>
  );
}

/**
 * CASO 5: Paginación
 * Navegación entre páginas
 */
export function PaginationExample() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  return (
    <div style={{ padding: "24px" }}>
      <h2>Página {currentPage} de {totalPages}</h2>

      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          ← Anterior
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "primary" : "secondary"}
            size="sm"
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Siguiente →
        </Button>
      </div>
    </div>
  );
}

/**
 * CASO 6: Wizard / Stepper
 * Navegación paso a paso
 */
export function WizardStepperExample() {
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ["Información", "Dirección", "Pago", "Confirmación"];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Paso {currentStep} de {steps.length}</h2>
      <p style={{ fontSize: "18px", marginBottom: "24px" }}>
        {steps[currentStep - 1]}
      </p>

      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          variant="secondary"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          ← Anterior
        </Button>

        {currentStep === steps.length ? (
          <Button variant="primary" onClick={() => alert("¡Completado!")}>
            Finalizar
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            Siguiente →
          </Button>
        )}
      </div>
    </div>
  );
}

/**
 * CASO 7: Botón con Menú Dropdown
 * Patrón común en UI
 */
export function ButtonWithDropdownExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "24px", position: "relative" }}>
      <Button
        variant="primary"
        onClick={() => setIsOpen(!isOpen)}
        endIcon={isOpen ? "▲" : "▼"}
      >
        Opciones
      </Button>

      {isOpen && (
        <div
          style={{
            marginTop: "8px",
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            backgroundColor: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          {["Editar", "Duplicar", "Compartir", "Eliminar"].map((option) => (
            <button
              key={option}
              onClick={() => {
                alert(`Seleccionaste: ${option}`);
                setIsOpen(false);
              }}
              style={{
                width: "100%",
                padding: "12px",
                border: "none",
                backgroundColor: "transparent",
                cursor: "pointer",
                textAlign: "left",
                borderBottom: "1px solid #f3f4f6",
              }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * CASO 8: Validación en tiempo real con botón
 * Botón solo habilitado si hay cambios
 */
export function FormValidationExample() {
  const [originalName, setOriginalName] = useState("Juan");
  const [name, setName] = useState("Juan");
  const [isLoading, setIsLoading] = useState(false);

  const hasChanges = name !== originalName;

  const handleSave = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setOriginalName(name);
    setIsLoading(false);
    alert("Guardado!");
  };

  return (
    <div style={{ padding: "24px" }}>
      <h2>Editar Nombre</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          padding: "12px",
          marginBottom: "16px",
          width: "100%",
          border: hasChanges ? "2px solid #ff0000" : "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      <div style={{ display: "flex", gap: "12px" }}>
        <Button
          variant="primary"
          disabled={!hasChanges}
          isLoading={isLoading}
          onClick={handleSave}
        >
          Guardar cambios
        </Button>

        <Button
          variant="secondary"
          disabled={!hasChanges}
          onClick={() => setName(originalName)}
        >
          Descartar
        </Button>
      </div>

      {hasChanges && <p style={{ color: "#ff0000", marginTop: "12px" }}>Cambios sin guardar</p>}
    </div>
  );
}

/**
 * GALERÍA DE EJEMPLOS
 * Componente que muestra todos los casos de uso
 */
export function ExamplesGallery() {
  const examples = [
    {
      title: "Formulario de Contacto",
      Component: ContactFormExample,
    },
    {
      title: "Diálogo de Confirmación",
      Component: ConfirmDialogExample,
    },
    {
      title: "Control vía Ref",
      Component: RefControlExample,
    },
    {
      title: "Botones de Filtrado",
      Component: FilterButtonsExample,
    },
    {
      title: "Paginación",
      Component: PaginationExample,
    },
    {
      title: "Wizard / Stepper",
      Component: WizardStepperExample,
    },
    {
      title: "Botón con Dropdown",
      Component: ButtonWithDropdownExample,
    },
    {
      title: "Validación en Tiempo Real",
      Component: FormValidationExample,
    },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "40px" }}>Ejemplos de Uso - Button Component</h1>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
        {examples.map(({ title, Component }) => (
          <div
            key={title}
            style={{
              border: "2px solid #e5e7eb",
              borderRadius: "12px",
              padding: "24px",
              backgroundColor: "#f9fafb",
            }}
          >
            <h2 style={{ marginTop: 0, borderBottom: "2px solid #588a9d", paddingBottom: "12px" }}>
              {title}
            </h2>
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}
