import { motion } from "framer-motion";

export function FeatureCard({ title, delay }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">Oferecemos soluções modernas para web.</p>
    </motion.div>
  );
}
