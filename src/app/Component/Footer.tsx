import React from 'react'
import {Linkedin , Youtube} from 'lucide-react'



export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#D9D9D9] py-8 px-4 md:px-6 lg:px-8 font-inter2 font-bold text-[#422e2c]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="">
          <h2 className="text-2xl font-bold mb-2">Get in touch</h2>
          <div className="">
            <p>Gmail: thontrapoowadol@gmail.com ( ภู )</p>
            <p> (66+) 080 - 9101328 </p>
            </div>
          <br />
        </div>
        <div className="flex space-x-4">
          <a 
            href="https://www.linkedin.com/in/phuwadon-thontra/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="https://www.youtube.com/@PoohSundir" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
      <div className=" text-center text-sm text-muted-foreground">
        © {currentYear} Phuwadon Thontra. All rights reserved.
      </div>
    </footer>
  )
}