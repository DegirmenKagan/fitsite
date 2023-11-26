import { BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
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

export default benefits;
