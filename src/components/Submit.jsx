import { useFormStatus } from "react-dom";

export default function Submit() {
  const { pending } = useFormStatus(); //we can get pending, data, method and action using this hook
  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {/*if pending is true then the button will be disabled */}
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
}
