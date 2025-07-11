import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
} from "lucide-react";
import { GridPattern } from "./GridPattern";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import BlackLogo14 from "../imports/BlackLogo14";
import { navigateTo } from "../App";
import { useState } from "react";

const footerNavigation = {
  Explore: [
    { label: "Home", url: "/home" },
    { label: "Services", url: "/services" },
    { label: "Solutions", url: "/solutions" },
    { label: "Industries", url: "/industries" },
    { label: "Company", url: "/company" },
    { label: "Contact", url: "/contact" },
  ],
  Resources: [
    { label: "Articles", url: "/resources/blog" },
    { label: "Case Studies", url: "/case-studies" },
    {
      label: "Client Testimonials",
      url: "/resources/client-testimonials",
    },
    {
      label: "Whitepapers & Insights",
      url: "/resources/whitepapers-insights",
    },
    { label: "FAQ", url: "/resources/faqs" },
  ],
  Services: [
    {
      label: "Mobile App Development",
      url: "/services/mobile-app-development",
    },
    {
      label: "Web & Cloud Solutions",
      url: "/services/web-cloud-solutions",
    },
    {
      label: "Software Engineering",
      url: "/services/software-engineering",
    },
    {
      label: "Design & Experience",
      url: "/services/design-experience",
    },
  ],
  "AI & ML": [
    {
      label: "Artificial Intelligence Services",
      url: "/ai/artificial-intelligence-services",
    },
    {
      label: "Machine Learning Solutions",
      url: "/ai/machine-learning-solutions",
    },
  ],
  Solutions: [
    {
      label: "Digital Product Development",
      url: "/digital-product-development",
    },
    {
      label: "MVP & Startup Launch Packages",
      url: "/mvp-startup-launch",
    },
    {
      label: "Legacy System Rebuilds",
      url: "/legacy-system-rebuilds",
    },
    {
      label: "Dedicated Development Centers",
      url: "/dedicated-development-centers",
    },
    {
      label: "Business Process Automation",
      url: "/business-process-automation",
    },
    {
      label: "Compliance-Ready Systems",
      url: "/compliance-ready-systems",
    },
  ],
};

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/company/wdi",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/wdi_dev",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/wdi",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/wdi",
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: "ideas@wdipl.com",
    url: "mailto:ideas@wdipl.com",
  },
  {
    icon: Phone,
    label: "(+91) 7700900039",
    url: "tel:+917700900039",
  },
  {
    icon: MapPin,
    label:
      "614, Palm Spring Centre, Link Road, Malad (West), Mumbai - 400064. India.",
    url: "#",
  },
];

const FooterSection = ({
  title,
  links,
  delay = 0,
}: {
  title: string;
  links: Array<{ label: string; url: string }>;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <h4 className="font-semibold text-white text-lg">
      {title}
    </h4>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigateTo(link.url);
            }}
            className="text-[#CCCCCC] hover:text-white transition-colors duration-200 text-sm block py-1 hover:translate-x-1 transform cursor-pointer"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
);

// Newsletter subscription component
const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-white/10"
    >
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
            Never Miss an Update
          </h3>
          <p className="text-[#CCCCCC] text-lg mb-8 max-w-2xl mx-auto">
            Get the latest insights on digital product
            development, AI trends, and startup success stories
            delivered to your inbox.
          </p>

          {isSubscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/10 border border-green-500/20 rounded-lg p-6 max-w-md mx-auto"
            >
              <div className="flex items-center justify-center gap-2 text-green-400">
                <Mail className="w-5 h-5" />
                <span className="font-medium">
                  Successfully subscribed!
                </span>
              </div>
              <p className="text-green-300 text-sm mt-2">
                Welcome to our community of innovators.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="max-w-md mx-auto"
            >
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-[#CCCCCC] focus:border-[#E5195E] focus:ring-[#E5195E]/20"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#E5195E] hover:bg-[#E5195E]/90 text-white px-6 shrink-0 disabled:opacity-50"
                >
                  {isSubmitting
                    ? "Subscribing..."
                    : "Subscribe"}
                </Button>
              </div>
              <p className="text-[#CCCCCC] text-xs mt-3">
                No spam, unsubscribe at any time. We respect
                your privacy.
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export const Footer = () => {
  return (
    <footer className="relative bg-[#0E0E0E] border-t border-white/10 overflow-hidden">
      <GridPattern strokeDasharray="4 2" />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-7 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center">
                <div className="w-12 h-12">
                  <BlackLogo14 />
                </div>
              </div>

              <p className="text-[#CCCCCC] leading-relaxed max-w-md">
                Web Development Institute - Transforming ideas
                into scalable digital products. 25+ years of
                industry expertise, serving founders and CTOs
                across 15+ countries.
              </p>

              {/* India Office Contact Information */}
              <div className="space-y-4">
                <h5 className="font-semibold text-white text-sm tracking-wide uppercase">
                  India Office
                </h5>
                <div className="space-y-3">
                  {contactInfo.map((contact) => {
                    const Icon = contact.icon;
                    return (
                      <a
                        key={contact.label}
                        href={contact.url}
                        className="flex items-start gap-3 text-[#CCCCCC] hover:text-white transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 text-[#E5195E] mt-0.5 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                          {contact.label}
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-[#CCCCCC] hover:text-white hover:bg-[#E5195E]/20 transition-all duration-200"
                      aria-label={social.name}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Navigation Sections */}
            <FooterSection
              title="Explore"
              links={footerNavigation.Explore}
              delay={0.1}
            />
            <FooterSection
              title="Services"
              links={footerNavigation.Services}
              delay={0.2}
            />
            <FooterSection
              title="AI & ML"
              links={footerNavigation["AI & ML"]}
              delay={0.3}
            />
            <FooterSection
              title="Solutions"
              links={footerNavigation.Solutions}
              delay={0.4}
            />
            <FooterSection
              title="Resources"
              links={footerNavigation.Resources}
              delay={0.5}
            />
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <NewsletterSection />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-white/10"
        >
          <div className="container mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-[#CCCCCC] text-sm text-center lg:text-left">
                © 2024 Web Development Institute. All rights
                reserved.
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <a
                  href="/privacy"
                  className="text-[#CCCCCC] hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-[#CCCCCC] hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="/cookies"
                  className="text-[#CCCCCC] hover:text-white transition-colors"
                >
                  Cookie Policy
                </a>
                <a
                  href="/sitemap"
                  className="text-[#CCCCCC] hover:text-white transition-colors"
                >
                  Sitemap
                </a>
              </div>

              <div className="text-[#CCCCCC] text-sm text-center lg:text-right">
                Engineered by WDI — because someone had to do it
                right. 💻
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};