function Hero() {
  return (
    <section id="home"
      className="relative min-h-screen flex items-center text-white"
      style={{
        backgroundImage: "url('/images/pexels-tomfisk-3856440.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-5xl font-extrabold leading-tight">
            Welcome to{" "}
            <span className="text-blue-600">Fedostar Enterprise</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Delivering Excellence in Business & Trade Services
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
