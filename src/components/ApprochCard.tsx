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
          title="Planning & Statergy"
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. Well discuss things like site structure, navigation, and content requirements."
          initialText="Phase 1"
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-[var(--background)]"
          />
        </Card>
        <Card
          title="Design & Develop"
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. Well discuss things like site structure, navigation, and content requirements."
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
          description="We'll collaborate to map out your website's goals, target audience, and key functionalities. Well discuss things like site structure, navigation, and content requirements."
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
