import { HeadingSlogan } from "./HeadingSlogan";
import InfiniteMovingCards from "./ui/clientreview/InfiniteMovingCards";

export default function ClientReview() {
  return (
    <main
      className="flex flex-col gap-[4vmin] my-[2vmax] mx-[3vmax]"
      id="reviews"
    >
      <div className="text-4xl md:text-7xl font-bold text-center text-primary">
        <HeadingSlogan words="Reviews" />
        <HeadingSlogan
          words=" from satisfied clients"
          className="text-secondary"
        />
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </main>
  );
}

const testimonials = [
  {
    quote:
      "We are extremely pleased with the business website created for us by Aniket Saha. As a MERN stack developer, Aniket showed exceptional skill and creativity, delivering a site that perfectly matches our vision. His professionalism and attention to detail ensured a smooth process from start to finish. We highly recommend his services for anyone in need of high-quality web development.",
    name: "Code N Creativity",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Aniket Saha did an outstanding job creating our website. As a MERN stack developer, he brought our vision for Fipezo, an online platform for freelancers, to life with exceptional skill and creativity. His professionalism and attention to detail were evident throughout the project. We highly recommend Aniket for any web development needs.",
    name: "Fipezo",
    title: "Hamlet",
  },
  {
    quote:
      "Aniket Saha was an invaluable asset to our team at WebApps Software Service. As a Frontend developer, his expertise and creativity significantly enhanced our projects. Aniket's professionalism, attention to detail, and ability to deliver high-quality work on time made him a standout contributor. We highly recommend Aniket for any frontend development needs.",
    name: "WebApps Software Service",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Aniket Saha has been a fantastic addition to Rabin's Photography as our web and app developer. His expertise and creativity have greatly enhanced our digital presence. Aniket's dedication, attention to detail, and ability to deliver high-quality work have been invaluable to our team. We highly recommend him for any web and app development projects.",
    name: "Rabin's Photography",
    title: "Pride and Prejudice",
  },
];
