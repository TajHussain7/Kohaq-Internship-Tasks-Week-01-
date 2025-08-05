const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-lg">
            © 2024 Kohaq Education. All rights reserved.
          </p>
          <p className="text-lg">
            Developed by{" "}
            <a
              href="https://wa.me/+923438002540"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-white transition-colors"
            >
              Tajamal Hussain
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
