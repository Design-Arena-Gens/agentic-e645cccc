import { ArrowUpRight, Film, Layers, Sparkles, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Render Time", value: "13s average" },
  { label: "Max Length", value: "180 seconds" },
  { label: "Aspect Ratios", value: "21 cinematic presets" },
  { label: "Export Quality", value: "4K ProRes ready" },
];

const featureHighlights = [
  {
    title: "Watermark? Never.",
    description:
      "Capture cinematic shots with completely clean exports so your stories remain yours. Every frame is produced watermark-free by default.",
    icon: Sparkles,
  },
  {
    title: "Unrestricted Access",
    description:
      "Generate, iterate, and upscale without quotas or paywalls. Sora 2 gives you an open canvas for experimentation.",
    icon: Zap,
  },
  {
    title: "Director-grade Controls",
    description:
      "Prompt with scripts, upload mood boards, or tweak camera rigs. Blend text, video, and stills into a cohesive timeline.",
    icon: Layers,
  },
];

const workflow = [
  {
    step: "Vision",
    title: "Describe the world you want",
    body: "Feed Sora 2 a script, a rough storyboard, or a short phrase. Our inference engine maps your intent to cinematic sequences.",
  },
  {
    step: "Refine",
    title: "Direct with live previews",
    body: "Adjust lighting, camera motion, or subject focus while watching live renders in HQ preview mode.",
  },
  {
    step: "Deliver",
    title: "Export instantly in 4K",
    body: "No watermarks, no waitlists, no export caps. Ship broadcast-ready scenes in whatever aspect ratio you need.",
  },
];

const promptPresets = [
  {
    label: "Urban Neon Run",
    prompt:
      "A lone runner dashes through rain-soaked Tokyo streets at night, neon signs reflecting off the puddles, dramatic dolly shots.",
  },
  {
    label: "Arctic Discovery",
    prompt:
      "Slow aerial sweep across a glacial canyon as an explorer plants a signal beacon, volumetric light breaking through the fog.",
  },
  {
    label: "Dreamscape Bloom",
    prompt:
      "Macro lens gliding over an impossible garden, bioluminescent petals opening in slow motion with soft pastel lighting.",
  },
];

const faq = [
  {
    q: "Are exports really watermark-free?",
    a: "Yes. Every render—from previews to final 4K masters—ships clean with no overlays or burn-ins.",
  },
  {
    q: "Is there any usage cap or credit system?",
    a: "No quotas, no throttling. Queue unlimited generations and rerolls with prioritized compute.",
  },
  {
    q: "Can I bring my own footage?",
    a: "Upload clips or stills to anchor motion, transfer textures, or maintain brand assets across scenes.",
  },
  {
    q: "How does Sora 2 stay affordable?",
    a: "Hybrid distillation pipelines keep inference costs low, allowing us to offer an unrestricted tier at zero cost.",
  },
];

function GlassPanel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_40px_120px_-60px_rgba(15,8,37,0.75)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

function MockVideo({
  title,
  label,
  gradient,
}: {
  title: string;
  label: string;
  gradient: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/50 backdrop-blur">
      <div
        className={cn(
          "absolute inset-0 opacity-90",
          "bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),transparent_60%)]",
        )}
      />
      <div
        className={cn(
          "absolute inset-0 mix-blend-screen opacity-70",
          gradient,
        )}
      />
      <div className="relative flex h-64 flex-col justify-between p-6">
        <div className="flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80 backdrop-blur">
          <Film className="h-4 w-4" />
          {label}
        </div>
        <div className="space-y-3">
          <p className="text-lg font-semibold text-white">{title}</p>
          <p className="text-sm text-white/70">
            Generated in 11 seconds · 4K ProRes export
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(141,109,255,0.2),_transparent_60%)]" />
      <header className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-16 pt-20 md:px-10 lg:px-12">
        <div className="flex flex-col gap-5">
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-lg">
            <Sparkles className="h-4 w-4 text-white" />
            Sora 2 · Unlimited cinematic video engine
          </span>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Direct watermark-free worlds with the{" "}
            <span className="bg-gradient-to-r from-[#9B8CFF] via-[#7BC9FF] to-[#FF71C3] bg-clip-text text-transparent">
              most open AI video studio
            </span>
            .
          </h1>
          <p className="max-w-2xl text-lg text-white/70 sm:text-xl">
            Sora 2 delivers unrestricted, photoreal video generation for teams
            that need cinematic quality without licensing locks or watermark
            overlays. Build, iterate, and ship visuals at the speed of thought.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="h-12 px-8 text-base font-semibold">
            Launch Studio
          </Button>
          <Button
            variant="secondary"
            className="h-12 px-8 text-base font-semibold text-white/85"
          >
            Explore Examples
          </Button>
          <div className="flex w-full flex-wrap gap-3 text-sm text-white/60 sm:w-auto sm:flex-nowrap sm:text-base">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
              >
                <span className="font-semibold text-white">{stat.value}</span>
                <span className="text-white/50">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.1fr_0.9fr]">
          <MockVideo
            label="Real-time director cut"
            title="Tracking shot following a dancer through a thunder-lit rooftop set."
            gradient="bg-[radial-gradient(circle_at_30%_20%,_rgba(120,88,255,0.65),transparent_60%),radial-gradient(circle_at_70%_80%,_rgba(243,93,172,0.55),transparent_60%)]"
          />
          <GlassPanel className="flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">
                Unrestricted studio seat for everyone
              </h2>
              <p className="text-sm leading-6 text-white/70">
                Forget credit packs or export watermarks. Sora 2 gives every
                creator a production-ready pipeline with scripting, camera
                staging, and diffusion-based refinement stages bundled in.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-sm text-white/70">
              {promptPresets.map((preset) => (
                <div
                  key={preset.label}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur"
                >
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/60">
                    <span>{preset.label}</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/70">
                      Play prompt
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/75">{preset.prompt}</p>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </header>

      <section className="mx-auto mt-8 w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <GlassPanel key={feature.title} className="h-full">
              <feature.icon className="h-10 w-10 rounded-2xl border border-white/10 bg-white/10 p-2 text-white/90" />
              <h3 className="mt-6 text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                {feature.description}
              </p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Director-first workflow from idea to final export
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Each tool inside Sora 2 is tuned for cinematic storytelling. Follow
            a precise pipeline or improvise on the fly—your canvas stays
            limitless and watermark-free.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {workflow.map((item) => (
            <GlassPanel key={item.title} className="relative h-full">
              <span className="text-sm uppercase tracking-[0.3em] text-white/60">
                {item.step}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.body}</p>
              <div className="absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </GlassPanel>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <GlassPanel className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
          <div className="flex-1 space-y-4">
            <span className="text-sm uppercase tracking-[0.3em] text-white/60">
              free forever
            </span>
            <h2 className="text-3xl font-semibold text-white">
              Zero watermark. Zero limits. Zero cost.
            </h2>
            <p className="text-sm leading-6 text-white/70">
              Sora 2 keeps the entire feature set unlocked. No premium guard
              rails, no hidden overlays—just a cinematic AI studio shaped
              around you. Bring your collaborators on board and ship projects
              without worrying about licensing traps.
            </p>
          </div>
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 p-5 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  unlimited tier
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  $0<span className="text-base font-medium text-white/60">/month</span>
                </p>
              </div>
              <Button size="lg" className="px-10">
                Claim Seat
              </Button>
            </div>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#9B8CFF] to-[#FF71C3]" />
                Unlimited generations & rerolls
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7BC9FF] to-[#9B8CFF]" />
                Native 4K ProRes & alpha exports
              </li>
              <li className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#FF71C3] to-[#FFC371]" />
                Watermark-free previews, forever
              </li>
            </ul>
          </div>
        </GlassPanel>
      </section>

      <section className="mx-auto mt-20 w-full max-w-6xl space-y-10 px-6 md:px-10 lg:px-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Frequently asked
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Everything you need to know about building inside Sora 2 with clean
            exports and unrestricted access.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faq.map((item) => (
            <GlassPanel key={item.q} className="h-full bg-white/5">
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">{item.a}</p>
            </GlassPanel>
          ))}
        </div>
      </section>

      <footer className="mx-auto mt-24 w-full max-w-6xl px-6 pb-16 md:px-10 lg:px-12">
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur md:flex-row md:items-center">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">
              ready to ship
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Start directing cinematic universes today.
            </h2>
            <p className="text-sm text-white/70">
              Hit launch to open the Sora 2 studio in your browser—no installs,
              no watermark surprises, just pure creative flow.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="px-10">
              Launch Studio
            </Button>
            <Button variant="secondary" size="lg" className="px-10">
              Join Discord
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Sora 2. Built for creators who refuse
          compromise.
        </p>
      </footer>
    </div>
  );
}
