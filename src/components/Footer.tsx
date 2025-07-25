const Footer = () => {
  return (
    <footer className="bg-cool-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg"></div>
              <span className="text-xl font-bold">Trainlance</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering careers through comprehensive training and mentorship in technology and professional skills.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors cursor-pointer">
                <span className="text-sm">f</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors cursor-pointer">
                <span className="text-sm">t</span>
              </div>
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center hover:bg-primary/40 transition-colors cursor-pointer">
                <span className="text-sm">in</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Programming Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Aptitude Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Soft Skills Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Programs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Student Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Trainlance. All rights reserved. | Hyderabad, Telangana, India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;