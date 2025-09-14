/**
 * ProcessCard component displays a single step in the development process
 * 
 * Features:
 * - Numbered card with title and description
 * - Clean, minimal design with monospace typography
 * - Responsive layout with proper spacing
 * - Used within the Process component for workflow steps
 * 
 * @param number - Step number (e.g., "01", "02")
 * @param title - Title of the process step
 * @param description - Detailed description of the step
 */
interface ProcessCardProps {
  /** Step number displayed prominently */
  number: string;
  /** Title of the process step */
  title: string;
  /** Detailed description of what happens in this step */
  description: string;
}

/**
 * Main ProcessCard component that renders a single process step
 */
export default function ProcessCard({ number, title, description }: ProcessCardProps) {
  return (
    <div className="space-y-4">
      <div className="font-mono text-sm opacity-50">{number}</div>
      <h3 className="font-mono text-xl">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
}