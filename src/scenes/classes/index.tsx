import { useContext } from "react";
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import PageContext from "@/shared/pageContext";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Our weight training classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Our yoga classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Our ab core classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Our adventure classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Our fitness classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Our training classes are designed to help you achieve your fitness goals. We offer a variety of classes, including yoga, Pilates, and more.",
    image: image6,
  },
];

type Props = {};

const Classes = ({}: Props) => {
  const { setSelectedPage } = useContext(PageContext);

  return (
    <section id="classes" className="w-full bg-primary-100 py-40">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Classes)}>
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Classes</HText>
            <p className="py-5">
              Classes at our gym offer a dynamic and engaging way for fitness
              enthusiasts to achieve their health goals. From heart-pumping
              cardio sessions to muscle-sculpting strength training, gym classes
              cater to a diverse range of preferences and fitness levels.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Classes;
