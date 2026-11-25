type CheckboxSampleProps = {
  state: "empty" | "checked" | "mixed";
  label: string;
};

// CheckboxSample representa un único estado y lo anuncia con ARIA.
function CheckboxSample({ state, label }: CheckboxSampleProps) {
  const mark = state === "checked" ? "✓" : state === "mixed" ? "−" : "";
  const checkedState =
    state === "empty" ? "false" : state === "checked" ? "true" : "mixed";

  return (
    <div className="checkbox-sample">
      <span
        className={`checkbox-box checkbox-box--${state}`}
        role="checkbox"
        aria-checked={checkedState}
        aria-label={label}
      >
        {mark}
      </span>
      <span>{label}</span>
    </div>
  );
}

// CheckboxShowcase enseña en dos columnas los estados vacío, marcado e indeterminado.
export default function CheckboxShowcase() {
  const samples: CheckboxSampleProps[] = [
    { state: "empty", label: "not selected" },
    { state: "checked", label: "selected" },
    { state: "mixed", label: "indeterminate" },
  ];

  return (
    <section className="checkbox-showcase" aria-label="Estados de casillas">
      {[0, 1].map((column) => (
        <div className="checkbox-column" key={column}>
          {samples.map((sample) => (
            <CheckboxSample
              key={sample.state}
              state={sample.state}
              label={sample.label}
            />
          ))}
        </div>
      ))}
    </section>
  );
}
