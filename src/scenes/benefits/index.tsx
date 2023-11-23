import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Our gym is equipped with the latest technology and equipment to help you reach your fitness goals. We have a wide range of cardio machines, free weights, and weight machines to suit all fitness levels.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "We offer a wide range of classes to suit all fitness levels. From yoga and pilates to HIIT and boxing, we have something for everyone. Our classes are designed to help you reach your fitness goals and have fun while doing it.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Our trainers are experts in their field and have years of experience helping people reach their fitness goals. They will work with you to create a personalized training program that is tailored to your needs and goals.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

type Props = {
  setSelectedPage: (page: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">
            We're a community, a club, a place where you can grow and improve.
            We offer personalized training programs, expert guidance, and a
            supportive environment to help you reach your fitness goals.
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphics and Description */}
        <div className="mt-16 items-center justify-between gap-20 md:flex">
          {/* Graphic */}
          <img
            className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />
          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Step into our vibrant fitness community where millions of
                enthusiastic members are on a journey to a healthier, happier
                life. Our state-of-the-art gyms provide a dynamic and supportive
                environment, fostering a sense of camaraderie among members.
                From invigorating group classes to personalized training
                sessions, our fitness professionals are dedicated to helping
                each individual reach their unique goals. Witness the
                transformation as smiles abound and confidence soars, with
                millions finding joy in their fitness journey within our
                welcoming gym family.
              </p>
              <p className="mb-5">
                In the heart of our fitness haven, millions of radiant faces
                light up the space as members embrace the exhilarating path to
                wellness. The buzz of energy and the shared commitment to a
                healthier lifestyle create an uplifting atmosphere that
                resonates throughout our expansive gym network. With
                cutting-edge equipment, expert guidance, and a shared passion
                for well-being, our community thrives. It's not just about
                lifting weights; it's about lifting spirits and creating a
                tapestry of millions of success stories, proving that getting
                fit is not just a journey but a celebration of life in our
                vibrant gym community.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before: z:-[-1] before:absolute before:-bottom-20 before:right-40 before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
