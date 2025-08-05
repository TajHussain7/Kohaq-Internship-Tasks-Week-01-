import { motion } from "framer-motion";
import { ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

type WeekDay = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday";
type Schedule = {
  time: string;
  course: string;
  instructor: string;
  location: string;
  level: "Advanced" | "Intermediate" | "All Levels";
};

const weekDays: WeekDay[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const schedules: Record<WeekDay, Schedule[]> = {
  Monday: [
    {
      time: "9:00 AM - 10:30 AM",
      course: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      location: "Room 101",
      level: "Advanced",
    },
    {
      time: "2:00 PM - 3:30 PM",
      course: "English Literature",
      instructor: "Prof. Michael Chen",
      location: "Room 205",
      level: "All Levels",
    },
  ],
  Tuesday: [
    {
      time: "10:00 AM - 11:30 AM",
      course: "Science & Laboratory",
      instructor: "Dr. Emily Rodriguez",
      location: "Lab 301",
      level: "Intermediate",
    },
    {
      time: "3:00 PM - 4:30 PM",
      course: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      location: "Room 101",
      level: "Advanced",
    },
  ],
  Wednesday: [
    {
      time: "9:00 AM - 10:30 AM",
      course: "English Literature",
      instructor: "Prof. Michael Chen",
      location: "Room 205",
      level: "All Levels",
    },
    {
      time: "1:00 PM - 2:30 PM",
      course: "Science & Laboratory",
      instructor: "Dr. Emily Rodriguez",
      location: "Lab 301",
      level: "Intermediate",
    },
  ],
  Thursday: [
    {
      time: "10:00 AM - 11:30 AM",
      course: "Advanced Mathematics",
      instructor: "Dr. Sarah Johnson",
      location: "Room 101",
      level: "Advanced",
    },
    {
      time: "2:00 PM - 3:30 PM",
      course: "Science & Laboratory",
      instructor: "Dr. Emily Rodriguez",
      location: "Lab 301",
      level: "Intermediate",
    },
  ],
  Friday: [
    {
      time: "9:00 AM - 10:30 AM",
      course: "English Literature",
      instructor: "Prof. Michael Chen",
      location: "Room 205",
      level: "All Levels",
    },
    {
      time: "11:00 AM - 12:30 PM",
      course: "Review Sessions",
      instructor: "All Instructors",
      location: "Main Hall",
      level: "All Levels",
    },
  ],
};

const Schedule = () => {
  return (
    <section id="schedule" className="section bg-gray-50">
      <div className="container-custom max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Weekly Schedule
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find your perfect learning time with our flexible class schedule
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {weekDays.map((day: WeekDay, dayIndex) => (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: dayIndex * 0.1,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <motion.div
                className="bg-indigo-600 text-white py-4 px-6"
                whileHover={{
                  backgroundColor: "#4338CA",
                  transition: { duration: 0.2 },
                }}
              >
                <motion.h3
                  className="text-xl font-semibold text-center"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: dayIndex * 0.1 }}
                >
                  {day}
                </motion.h3>
              </motion.div>
              <div className="p-4 space-y-6">
                {schedules[day].map((schedule, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: dayIndex * 0.1 + index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.02,
                      x: 10,
                      transition: { duration: 0.2 },
                    }}
                    className="space-y-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center text-gray-600 text-lg">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      {schedule.time}
                    </div>
                    <h4 className="font-semibold text-gray-900">
                      {schedule.course}
                    </h4>
                    <p className="text-gray-600 text-lg">
                      {schedule.instructor}
                    </p>
                    <div className="flex items-center text-gray-500 text-lg">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {schedule.location}
                    </div>
                    <span
                      className={`inline-block px-2 py-1 text-xs rounded-full ${
                        schedule.level === "Advanced"
                          ? "bg-red-100 text-red-700"
                          : schedule.level === "Intermediate"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {schedule.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
