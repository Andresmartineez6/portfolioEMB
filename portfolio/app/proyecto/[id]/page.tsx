"use client";

import { useParams } from "next/navigation";
import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";
import { projects } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

const ProyectoDetalle = () => {
  const params = useParams();
  const id = Number(params.id);
  
  // Encontrar el proyecto por ID
  const proyecto = projects.find((p) => p.id === id);
  
  if (!proyecto) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl">Proyecto no encontrado</h1>
      </div>
    );
  }

  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5" style={{
      background: 'linear-gradient(125deg, #030509 0%, #040610 50%, #05081a 100%)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative'
    }}>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden" style={{ zIndex: 0 }}>
        {/* Efecto de grid solo en la parte superior */}
        <div className="w-full absolute left-0 top-0 h-[40vh]">
          <Image
            src="/footer-grid.svg"
            alt="grid"
            fill
            sizes="100vw"
            className="w-full h-full opacity-20"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {/* Efecto de luz */}
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full opacity-15" 
          style={{ 
            background: 'linear-gradient(135deg, #2a3ca0 0%, #1c2c80 100%)', 
            filter: 'blur(120px)',
            transform: 'rotate(-25deg)'
          }}
        />
      </div>
      <div className="max-w-7xl w-full relative" style={{ zIndex: 1 }}>
        <FloatingNav navItems={navItems} />
        
        <div className="py-20">
          <div className="flex flex-col items-center">
            {/* Cabecera del proyecto */}
            <h1 className="heading text-center mb-8">
              <span className="text-purple">{proyecto.title}</span>
            </h1>
            
            {/* Contenido principal del proyecto */}
            <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl mb-16">
              {proyecto.id === 1 ? (
                // Video de YouTube para Peaky Blinders
                <div className="relative pt-10 pb-16">
                  <h2 className="text-3xl font-bold mb-6 text-center">Peaky Blinders</h2>
                  <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full"
                      src="https://www.youtube.com/embed/qXnJdcdIusM?si=U58Q1ck4ooxiEzSw" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ) : (
                // Imagen para otros proyectos
                <div className="relative w-full h-[50vh] overflow-hidden">
                  <div className="relative w-full h-full overflow-hidden" style={{ backgroundColor: "#13162D" }}>
                    <Image 
                      src="/bg.png" 
                      alt="fondo" 
                      fill 
                      sizes="100vw"
                      style={{ objectFit: 'cover' }} 
                    />
                  </div>
                  <Image
                    src={proyecto.img}
                    alt={proyecto.title}
                    width={400}
                    height={300}
                    className="z-10 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              )}
            </div>
            
            {/* Descripción del proyecto */}
            <div className="max-w-3xl mb-12 text-center">
              <p className="lg:text-xl text-base" style={{ color: "#BEC1DD" }}>
                {proyecto.des}
              </p>
            </div>
            
            {/* Tecnologías utilizadas */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Tecnologías utilizadas</h2>
              <div className="flex items-center justify-center gap-4">
                {proyecto.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-16 lg:h-16 w-12 h-12 flex justify-center items-center"
                  >
                    <Image src={icon} alt={`tecnología-${index}`} width={32} height={32} className="p-3" style={{ width: 'auto', height: 'auto' }} />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enlace al sitio */}
            <a 
              href={proyecto.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-purple/10 hover:bg-purple/20 transition-all duration-300 text-purple py-4 px-8 rounded-full"
            >
              <span className="text-xl">Ver Sitio en Vivo</span>
              <FaLocationArrow />
            </a>
            
            {/* Sección para más detalles (puedes expandir esto) */}
            <div className="mt-20 w-full">
              <h2 className="text-2xl font-bold mb-8">Detalles del proyecto</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#13162D] p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Desafío</h3>
                  <p style={{ color: "#BEC1DD" }}>
                    Aquí puedes describir el desafío que enfrentaste con este proyecto y cómo lo abordaste.
                  </p>
                </div>
                <div className="bg-[#13162D] p-8 rounded-2xl">
                  <h3 className="text-xl font-bold mb-4">Solución</h3>
                  <p style={{ color: "#BEC1DD" }}>
                    Explica la solución que implementaste y cómo resolvió el problema del cliente.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Navegación entre proyectos */}
            <div className="mt-20 w-full flex justify-between">
              <a 
                href={`/proyecto/${id > 1 ? id - 1 : projects.length}`}
                className="bg-[#13162D] hover:bg-[#1a1f3d] transition-all duration-300 py-3 px-6 rounded-xl"
              >
                Proyecto anterior
              </a>
              <a 
                href={`/proyecto/${id < projects.length ? id + 1 : 1}`}
                className="bg-[#13162D] hover:bg-[#1a1f3d] transition-all duration-300 py-3 px-6 rounded-xl"
              >
                Siguiente proyecto
              </a>
            </div>
          </div>
        </div>
        
        <Footer />
      </div>
    </main>
  );
};

export default ProyectoDetalle;
