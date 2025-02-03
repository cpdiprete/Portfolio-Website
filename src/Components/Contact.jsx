import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
return (
    <div className="border-b border-neutral-900 pb-20">
    <h2 className="mt-36 mb-10 text-center text-4xl text-neutral-400">
        Get in Touch
    </h2>
    <motion.div
        whileInView={{ opacity: 2, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 2.0 }}
        className="text-center tracking-tighter"
    >
        <motion.p className="my-3 text-neutral-400">{CONTACT.address}</motion.p>
        <p className="my-4 text-neutral-400">{CONTACT.phoneNo}</p>
        
        <a
        href={`mailto:${CONTACT.email}`}
        className="border-b text-neutral-400"
        >
            {CONTACT.email}
        </a>
    </motion.div>
    </div>
);
};

export default Contact;
