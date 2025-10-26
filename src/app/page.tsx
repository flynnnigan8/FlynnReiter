import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-wf-background">
      <section className="max-w-5xl w-full px-6 py-16 flex flex-col items-center text-center gap-8">
        <div className="w-full relative aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
          <Image
            src="/headshot_b.jpg"
            alt="Flynn Reiter"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-lg text-wf-foreground/90 mb-2">Software Engineer</p>
          <h1 className="text-4xl md:text-5xl font-medium text-wf-p mb-4">
            Flynn Reiter
          </h1>
          <p className="text-base leading-7 text-wf-foreground/80">
            I’m a backend engineer specializing in high-throughput, real-time backend platforms. At Starbucks, I help
                design and scale distributed microservices on AWS/Kubernetes—building fast APIs, Kafka-based event flows,
                and reliable data access with Redis and DynamoDB, all with strong testing and observability practices. I care
                deeply about sustainability and thoughtful engineering—solutions that are efficient, resilient, and kind to the
                planet. When I’m not shipping code, I’m probably on the sand playing beach volleyball or spikeball, or outside
                chasing California sunshine. Also.. my favorite color is green. 🌱
          </p>
        </div>
      </section>
    </main>
  );
}
