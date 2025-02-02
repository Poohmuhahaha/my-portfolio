import React from 'react'
import {Linkedin} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#553733] py-6 sm:py-8 px-4 sm:px-6 lg:px-8 font-inter2 font-bold text-[#d9dee2]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Get in touch</h2>
          <div className="space-y-2">
            <p className="text-sm sm:text-base">Gmail: thontrapoowadol@gmail.com ( ภู )</p>
            <p className="text-sm sm:text-base">(66+) 080 - 9101328</p>
          </div>
        </div>
        <div className="flex space-x-6 md:space-x-8">
          <a 
            href="https://www.linkedin.com/in/phuwadon-thontra/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
          <a 
            href="https://www.youtube.com/@PoohSundir" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
          </a>
        </div>
      </div>
      <div className="text-center text-xs sm:text-sm text-muted-foreground mt-6">
        © {currentYear} Phuwadon Thontra. All rights reserved.
      </div>
    </footer>
  )
}
