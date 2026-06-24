import { HeadingSlogan } from "./HeadingSlogan";
import CanvasRevealEffect from "./ui/approachcard/CanvasRevealEffect";
import Card from "./ui/approachcard/Card";

export default function ApprochCard() {
  return (
    <div
      className="flex flex-col gap-[8vmin] py-[2vmax] my-[2vmax]"
      id="approach"
    >
      <div className="text-4xl md:text-7xl font-bold text-center text-primary">
        <HeadingSlogan words="My" />
        <HeadingSlogan words=" project approch" className="text-secondary" />
      </div>
      <div className="flex flex-col md:flex-row justify-evenly gap-12 md:gap-0">
        <Card
          title="Planning & Strategy"
          description="We define clear goals, user personas, and system architecture upfront. I map out API contracts, data models, and tech stack decisions — aligning every technical choice with your business objective before a single line of code is written."
          initialText="Phase 1"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[var(--background)]"
          />
        </Card>
        <Card
          title="Design & Develop"
          description="From pixel-perfect UI components to scalable backend services, I build iteratively with clean code standards and real-time feedback cycles. Features ship fast without sacrificing performance, accessibility, or long-term maintainability."
          initialText="Phase 2"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            colors={[[125, 211, 252]]}
            containerClassName="bg-[var(--background)]"
          />
        </Card>
        <Card
          title="Testing & Deploy"
          description="Every release goes through rigorous API testing, cross-device QA, and automated checks before hitting production. I deploy via CI/CD pipelines to VPS or cloud infrastructure — ensuring zero-downtime rollouts and full observability post-launch."
          initialText="Phase 3"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            containerClassName="bg-[var(--background)]"
          />
        </Card>
      </div>
    </div>
  );
}
