import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Maximize2, X } from 'lucide-react'

const englishProjectImages = [
  '/assets/images/S-lOC-USAGES-R3-08.jpg',
  '/assets/images/S-lOC-USAGES-R3-09.jpg',
  '/assets/images/S-lOC-USAGES-R3-10.jpg',
  '/assets/images/S-lOC-USAGES-R3-11.jpg',
  '/assets/images/S-lOC-USAGES-R3-12.jpg',
  '/assets/images/S-lOC-USAGES-R3-13.jpg',
  '/assets/images/S-lOC-USAGES-R3-14.jpg',
  '/assets/images/S-lOC-USAGES-R3-15.jpg',
  '/assets/images/S-lOC-USAGES-R3-16.jpg',
  '/assets/images/S-lOC-USAGES-R3-17.jpg',
  '/assets/images/S-lOC-USAGES-R3-19.jpg',
  '/assets/images/S-lOC-USAGES-R3-20.jpg',
  '/assets/images/S-lOC-USAGES-R3-21.jpg',
  '/assets/images/S-lOC-USAGES-R3-22.jpg',
  '/assets/images/S-lOC-USAGES-R3-23.jpg',
  '/assets/images/S-lOC-USAGES-R3-24.jpg',
]

const arabicProjectImages = [
  '/assets/images/تحسين-2.png',
  '/assets/images/Votre-texte-de-paragraphe-24.png',
  '/assets/images/Votre-texte-de-paragraphe-25.png',
  '/assets/images/Votre-texte-de-paragraphe-31.png',
  '/assets/images/Votre-texte-de-paragraphe-30.png',
  '/assets/images/Votre-texte-de-paragraphe-28-2.png',
  '/assets/images/Votre-texte-de-paragraphe-27.png',
  '/assets/images/Votre-texte-de-paragraphe-26.png',
  '/assets/images/تحسين-3.png',
  '/assets/images/Votre-texte-de-paragraphe-16.png',
  '/assets/images/Votre-texte-de-paragraphe-12-1.png',
  '/assets/images/Votre-texte-de-paragraphe-14.png',
  '/assets/images/تحسين-1.png',
  '/assets/images/Votre-texte-de-paragraphe-28.png',
  '/assets/images/Votre-texte-de-paragraphe-20-1.png',
]

export const ProjectMarquee: React.FC = () => {
  const { i18n } = useTranslation()
  const isAr = i18n.language === 'ar'
  const projectImages = isAr ? arabicProjectImages : englishProjectImages
  const [popupImage, setPopupImage] = useState<string | null>(null)

  return (
    <>
      <style>{`
        @keyframes scroll-marquee-home {
          0% { transform: translateX(0); }
          100% { transform: translateX(${isAr ? '50%' : '-50%'}); }
        }
        .animate-marquee-home {
          display: flex;
          width: max-content;
          animation: scroll-marquee-home 40s linear infinite;
        }
        .animate-marquee-home:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="bg-[#110222] py-16 overflow-hidden border-t border-white/10">
        <div className="w-full relative">
          <div className="animate-marquee-home flex gap-4 items-center">
            {[...projectImages, ...projectImages].map((img, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] shrink-0 mx-2 rounded-xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-white/5 cursor-pointer relative group bg-[#1a0535]"
              >
                <img
                  src={img}
                  alt={`Project ${i + 1}`}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <button
                  type="button"
                  onClick={() => setPopupImage(img)}
                  aria-label="Open project image"
                  className="absolute inset-0 bg-[#2b1055]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
                >
                  <div className="bg-[#38e54d] p-4 rounded-full text-[#110222] shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={30} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {popupImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
          dir="ltr"
        >
          <button
            type="button"
            onClick={() => setPopupImage(null)}
            aria-label="Close"
            className="absolute top-10 right-10 text-white hover:text-[#38e54d] transition-colors p-2 bg-white/10 rounded-full z-10"
          >
            <X size={40} />
          </button>
          <div className="max-w-6xl w-full flex justify-center items-center">
            <img
              src={popupImage}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-[0_0_80px_rgba(56,229,77,0.4)] transition-transform duration-500"
              alt="Project"
            />
          </div>
        </div>
      )}
    </>
  )
}
