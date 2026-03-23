import { Card } from "@/components/ui/Card";

type Suggestion = {
  title: string;
  reason: string;
  actionLabel: string;
};

type SuggestionListProps = {
  suggestions: Suggestion[];
};

export function SuggestionList({ suggestions }: SuggestionListProps) {
  return (
    <Card title="Sugerencias inteligentes" subtitle="Basadas en tu historial y mejores prácticas MEP">
      <ul className="suggestion-list">
        {suggestions.map((suggestion) => (
          <li key={suggestion.title}>
            <div>
              <strong>{suggestion.title}</strong>
              <p>{suggestion.reason}</p>
            </div>
            <button type="button" className="button">
              {suggestion.actionLabel}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
