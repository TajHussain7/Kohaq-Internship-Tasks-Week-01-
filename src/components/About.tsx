import { motion } from "framer-motion";
import {
  AcademicCapIcon,
  BookOpenIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: AcademicCapIcon,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of experience.",
  },
  {
    icon: BookOpenIcon,
    title: "Comprehensive Curriculum",
    description: "Well-structured courses designed to maximize your learning.",
  },
  {
    icon: UserGroupIcon,
    title: "Supportive Community",
    description: "Join a vibrant community of learners and educators.",
  },
];

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Kohaq Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are committed to providing high-quality education that empowers
            students to achieve their full potential and succeed in their chosen
            fields.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
