import React from "react";
import { FaHeart, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiNextdotjs } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-white/80 backdrop-blur-sm border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 py-2">
        <div className="flex flex-wrap items-center justify-center gap-2 text-sm text-gray-600">
          <span className="flex items-center">
            <span>✨ Crafting code magic at</span>
            <span className="font-semibold text-indigo-600 ml-1">codeYbe</span>
          </span>
          
          <span className="text-gray-400">|</span>
          
          <div className="flex items-center gap-2">
            <SiReact className="h-4 w-4 hover:text-[#61DAFB] transition-colors" />
            <SiNextdotjs className="h-4 w-4 hover:text-black transition-colors" />
            <SiTailwindcss className="h-4 w-4 hover:text-[#06B6D4] transition-colors" />
          </div>
          
          <span className="text-gray-400">|</span>
          
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/codeYbe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com/codeYbe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#1DA1F2] transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/company/codeYbe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#0A66C2] transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
          </div>
          
          <span className="text-gray-400">|</span>
          
          <span className="flex items-center text-xs text-gray-500">
            <span>Made with</span>
            <FaHeart className="mx-1 text-red-500" />
            <span>by team codeYbe</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;