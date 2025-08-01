const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg py-4 px-8 flex justify-between items-center border-b border-white/10">
      <h1 className="text-lg font-bold text-white tracking-wide">Arjun Nath</h1>
      <div className="space-x-6 text-sm text-white/80">
        <a href="#about" className="hover:text-white transition">About</a>
        <a href="#projects" className="hover:text-white transition">Projects</a>
        <a href="#contact" className="hover:text-white transition">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
