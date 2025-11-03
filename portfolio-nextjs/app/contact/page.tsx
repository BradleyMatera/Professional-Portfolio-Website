"use client";

import { useState, useEffect } from "react";
import { Card, CardBody, Input, Textarea, Button, Link } from "@nextui-org/react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaYoutube, FaCodepen, FaPaperPlane } from "react-icons/fa";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    to_name: "Bradley Matera",
    from_name: "",
    message: "",
    reply_to: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      window.emailjs.init("bhtw4DGUnI8tHgIXQ");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // @ts-ignore
      await window.emailjs.send("service_d897zpl", "template_dibo5n9", formData);
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({
        to_name: "Bradley Matera",
        from_name: "",
        message: "",
        reply_to: "",
      });
    } catch (error: any) {
      setStatus({
        type: "error",
        message: `Failed to send message: ${error.text || "Unknown error"}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/BradleyMatera",
      icon: <FaGithub size={32} />,
      color: "#ffffff",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/championingempatheticwebsolutionsthroughcode/",
      icon: <FaLinkedin size={32} />,
      color: "#0077b5",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@bradmatera",
      icon: <FaYoutube size={32} />,
      color: "#ff0000",
    },
    {
      name: "CodePen",
      url: "https://codepen.io/student-account-bradley-matera",
      icon: <FaCodepen size={32} />,
      color: "#000000",
    },
  ];

  return (
    <>
      <Navigation />
      <main className="flex-grow bg-gradient-to-b from-[#0a192f] to-[#1c1c1c] py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-[#64ffda] mb-4">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              I'm open to opportunities, collaborations, or discussions about web development. 
              Reach out below!
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Card className="bg-[#1c1c1c] border border-[#fb8b24]/20">
              <CardBody className="p-8">
                <p className="text-gray-300 mb-4">
                  Email me directly at:{" "}
                  <Link
                    href="mailto:bradmatera@gmail.com"
                    className="text-[#64ffda] hover:text-[#fb8b24] transition-colors font-medium"
                  >
                    bradmatera@gmail.com
                  </Link>
                </p>
                <p className="text-gray-400 mb-6">Or use this form:</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Your Name"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-white",
                      label: "text-gray-400",
                      inputWrapper: "border-[#fb8b24]/30 hover:border-[#fb8b24] focus:border-[#64ffda]",
                    }}
                  />

                  <Input
                    label="Your Email"
                    name="reply_to"
                    type="email"
                    value={formData.reply_to}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                    classNames={{
                      input: "text-white",
                      label: "text-gray-400",
                      inputWrapper: "border-[#fb8b24]/30 hover:border-[#fb8b24] focus:border-[#64ffda]",
                    }}
                  />

                  <Textarea
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="bordered"
                    isRequired
                    minRows={6}
                    classNames={{
                      input: "text-white",
                      label: "text-gray-400",
                      inputWrapper: "border-[#fb8b24]/30 hover:border-[#fb8b24] focus:border-[#64ffda]",
                    }}
                  />

                  {status.message && (
                    <div
                      className={`p-4 rounded-lg ${
                        status.type === "success"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-red-500/20 text-red-400 border border-red-500/30"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    isLoading={isSubmitting}
                    className="bg-[#fb8b24] hover:bg-[#64ffda] text-white font-semibold transition-colors w-full"
                    startContent={!isSubmitting && <FaPaperPlane />}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardBody>
            </Card>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-[#64ffda]">
              Connect With Me
            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-[#1c1c1c] border border-[#fb8b24]/20 hover:border-[#fb8b24] transition-all"
                  >
                    <div className="text-[#fb8b24] hover:text-[#64ffda] transition-colors">
                      {link.icon}
                    </div>
                    <span className="text-white text-sm font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
