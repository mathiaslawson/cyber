import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { carouselBanners, clientLogos, heroServices, services } from "./data";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const HeroSection = () => {
 
  return (
    <div className="bg-black text-white -mt-4">
      <section className="relative w-full min-h-screen flex items-center bg-[#000000] overflow-hidden" >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Experience, Trust, Knowledge
            </h1>
            <p className="text-xl text-gray-400 max-w-xl">
              CyberTech-Global: Protecting Your Most Valuable Digital Assets
            </p>
            <div className="flex space-x-4">
              {/* <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                Contact Us
              </Button> */}
              <Button 
                variant="secondary" 
                className="bg-white text-black hover:bg-gray-200"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden md:flex justify-center items-center"
          >
            <img 
              src="https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXD8ZFFzpYwEaLRm2Jjro9eGZ7U4dBOfKVTpnz" 
              alt="Cyber Security Visualization" 
              className="w-full max-w-4xl rounded-lg "
            />
          </motion.div>
        </div>
      </section>

      {/* Carousel Banner */}
      <section className="bg-black" id="about" >
        <Carousel 
          plugins={[Autoplay({ delay: 5000 })]}
          className="w-full"
        >
          <CarouselContent>
            {carouselBanners.map((banner, index) => (
              <CarouselItem key={index}>
                <div className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden rounded-xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${banner.backgroundImage})`,
                      filter: 'brightness(30%) grayscale(100%)'
                    }}
                  />
                  <div className="relative z-10 px-6 py-16 text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                      {banner.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                      {banner.subtitle}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="text-black left-4" />
            <CarouselNext className="text-black right-4" />
          </div>
        </Carousel>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 mt-[150px] mb-[150px]">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="bg-black p-8 rounded-xl transition-all duration-300"
              >
                <div className="text-center mb-6">
                  <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-black">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-neutral-400 text-center leading-[40px] text-2xl">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Services Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
               <h3 className="text-white text-4xl mt-5 mb-[100px] text-center font-bold">Cyber Security</h3>
          {heroServices.map((service, index) => (
            <div 
              key={index} 
              className={`
                flex 
                flex-col 
                md:flex-row 
                items-center 
                mb-16 
                ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
              `}
            >
              <div className="md:w-1/2 p-4">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="md:w-1/2 p-4">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h2 className="text-3xl font-bold ml-4 text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-400 mb-6 leading-[40px] text-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted Clients Section */}
      <section className="p-20 bg-white">    
        <div className="px-4">
          <div className="flex flex-wrap justify-center items-center space-x-8 md:space-x-[200px] space-y-16 md:space-y-1 opacity-50 hover:opacity-100 transition-opacity duration-300">
            {clientLogos.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt={`Client Logo ${index + 1}`} 
                className="w-[150px] grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

   

      {/* Contact Section */}
    <section 
      id="contact" 
      className="relative py-16 bg-cover bg-center"
      style={{ 
        backgroundImage: 'url("https://5l0prg7sfe.ufs.sh/f/eqhzCUbWhUpXtq6pkLcmxkKJhCFpAIS89osjUyMreHq03BO2")', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0,0,0,0.7)'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto bg-black/80 p-10 rounded-xl">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Contact Us
          </h2>
          <p className="text-center text-gray-300 mb-8">
            To discuss how we can support your organization, please fill in your contact details
          </p>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-white">Name *</Label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-white">Email *</Label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-md text-white"
                  placeholder="Your Email"
                />
              </div>
            </div>

            <div>
              <Label className="text-white mb-4 block">What services interest you? *</Label>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Cybersecurity",
                  "Incident Response",
                  "Inspections & Assessment",
                  "Endpoint Monitoring",
                  "Digital Forensics",
                  "Data Recovery",
                  "Specialized Government Services"
                ].map((service) => (
                  <div key={service} className="flex items-center space-x-2">
                    <Checkbox id={service} />
                    <Label htmlFor={service} className="text-white">{service}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="orgSize" className="text-white mb-3 mt-10">Organization Size *</Label>
              <Select>
                <SelectTrigger className="w-full bg-black/50 border border-gray-700 text-white">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "1-25",
                    "26-99",
                    "100-199",
                    "200-499",
                    "500+"
                  ].map((size) => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" required />
                <Label htmlFor="terms" className="text-white">
                  I accept the terms and conditions
                </Label>
              </div>
            </div>

            <Button 
              type="submit"
              variant="secondary" 
              className="w-full bg-white text-black hover:bg-gray-200"
            >
              Submit
            </Button>
          </form>

          <div className="mt-8 text-center text-gray-400">
            <p>Tel: +233559690060</p>
            <p>Accra, Ghana - 1st Soula Street - Cantonmets</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default HeroSection;