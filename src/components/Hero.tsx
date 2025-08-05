import { motion } from "framer-motion";
import { Link } from "react-scroll";

const slideUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  }),
};

const Hero = () => {
  return (
    <section className="section min-h-screen pt-24 lg:pt-32 bg-gradient-to-br from-primary/5 to-secondary/5 overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            className="px-4 md:px-0"
          >
            <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <motion.span
                variants={slideUpVariants}
                custom={0.2}
                className="block"
              >
                Empower Your
              </motion.span>
              <motion.span
                variants={slideUpVariants}
                custom={0.4}
                className="block"
              >
                Future with{" "}
                <motion.span className="text-primary inline-block">
                  Quality
                </motion.span>
              </motion.span>
              <motion.span
                variants={slideUpVariants}
                custom={0.6}
                className="block text-primary"
              >
                Education
              </motion.span>
            </motion.h1>

            <motion.p
              variants={slideUpVariants}
              custom={0.8}
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
            >
              Join Kohaq Education and discover a world of opportunities through
              our comprehensive courses and expert instructors.
            </motion.p>
            <motion.div
              variants={slideUpVariants}
              custom={1}
              className="flex flex-wrap gap-6"
            >
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(79, 70, 229, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl opacity-75 blur-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.3, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <Link
                  to="register"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-primary text-xl px-10 py-5 relative z-10"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 30px rgba(79, 70, 229, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="btn btn-secondary text-xl px-10 py-5 relative z-10"
                >
                  Browse Courses
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mt-12 md:mt-0"
          >
            <div className="relative w-full max-w-2xl mx-auto">
              <motion.img
                src="/hero-education.jpg"
                alt="Education Illustration"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  target.parentElement!.classList.add(
                    "bg-gradient-to-r",
                    "from-primary",
                    "to-secondary",
                    "aspect-video"
                  );
                }}
              />
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full opacity-20"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <motion.div
                className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.6, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
