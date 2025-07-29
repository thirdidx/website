import ProcessCard from './ProcessCard';

export default function Process() {
  return (
    <section id="process" className="bg-muted/20 flex min-h-screen items-center py-16 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-2xl font-bold">How We Work</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-sm leading-relaxed">
            From strategy to launch, we build in the open. No surprises, just results.
          </p>
        </div>

        {/* Bento-style process grid */}
        <div className="grid gap-4 md:grid-cols-3">
          {/* Discovery */}
          <ProcessCard
            number="01"
            title="Discovery & Planning"
            description="We start with your business goals and user needs, then architect the technical approach that gets you there fastest."
          />

          {/* Development */}
          <ProcessCard
            number="02"
            title="Rapid Development"
            description="Weekly demos and iterative builds. Fast feedback loops mean fewer wrong turns."
          />

          {/* Launch */}
          <ProcessCard
            number="03"
            title="Launch & Optimize"
            description="Deployment, monitoring, and performance optimization. Your product launches right, not just fast."
          />
        </div>
      </div>
    </section>
  );
}