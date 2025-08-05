import { motion } from "framer-motion";

import {
  ClockIcon,
  UserGroupIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

const courses = [
  {
    title: "Advanced Mathematics",
    description:
      "Master advanced mathematical concepts including calculus, algebra, and geometry with practical applications.",
    duration: "12 weeks",
    students: 150,
    level: "Advanced",
    image: "/course-math.jpg",
    price: 299,
    rating: 4.9,
  },
  {
    title: "Science & Laboratory",
    description:
      "Hands-on science education covering physics, chemistry, and biology with real laboratory experiments.",
    duration: "16 weeks",
    students: 120,
    level: "Intermediate",
    image: "/course-science.jpg",
    price: 399,
    rating: 4.8,
  },
  {
    title: "English Literature",
    description:
      "Explore classic and contemporary literature while developing critical thinking and writing skills.",
    duration: "10 weeks",
    students: 200,
    level: "All Levels",
    image: "/course-english.jpg",
    price: 249,
    rating: 4.7,
  },
];

const Courses = () => {
  return (
    <section id="courses" className="section bg-gray-50 py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our selection of high-quality courses designed to help
            you excel in your academic journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
                  {course.level}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {course.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <ClockIcon className="h-5 w-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserGroupIcon className="h-5 w-5" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${course.price}
                  </span>
                  <button className="btn btn-primary">Enroll Now</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
