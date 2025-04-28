import { Badge } from "@/components/ui/badge";

export function Description({ challenge }: { challenge: any }) {
  return (
    <div className="prose prose-invert max-w-none prose-pre:bg-white/5 prose-pre:backdrop-blur-xl">
      <h1 className="text-2xl font-bold mb-2">{challenge.title}</h1>

      <div className="mb-8">
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Badge>JavaScript</Badge>
            <Badge>{challenge.difficulty}</Badge>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span>{challenge.time}</span>
            <span>•</span>
            <span>{challenge.completed}</span>
          </div>
        </div>
        <pre className="mb-4">{challenge.initialCode}</pre>
      </div>

      {challenge.theory && (
        <>
          <h2 className="text-xl font-semibold">Theory</h2>
          {challenge.theory.map((point: string, idx: number) => (
            <p key={idx}>{point}</p>
          ))}
        </>
      )}

      {challenge.example && (
        <>
          <h2 className="text-xl font-semibold">Examples</h2>
          <pre className="rounded-xl">
            <code className="language-javascript">{challenge.example}</code>
          </pre>
        </>
      )}

      {challenge.notes && (
        <>
          <h2 className="text-xl font-semibold">Notes</h2>
          <ul className="list-disc space-y-2">
            {challenge.notes.map((note: string, idx: number) => (
              <li key={idx}>{note}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
