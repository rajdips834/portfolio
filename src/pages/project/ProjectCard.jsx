import { motion } from "framer-motion";
export default function ProjectCard({ name, link, image, ...props }) {
  return (
    <li>
      <a href={link} target="_blank" rel="">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="relative flex flex-col items-center justify-center p-8 bg-gray-900 w-[300px] rounded-lg shadow-lg"
        >
          <div className="mb-4 overflow-hidden rounded-full w-30 h-30">
            <img src={image} alt="" />
          </div>
          <h3 className="text-lg font-semibold text-white">{name}</h3>
        </motion.div>
      </a>
    </li>
  );
}
