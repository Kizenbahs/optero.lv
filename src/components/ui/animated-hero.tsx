"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Announcement, AnnouncementTitle } from "@/components/ui/announcement";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["profesionāļi", "speciālisti", "meistari", "ieteikumi", "chat", "atsauksmes"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-full px-4 sm:px-6 md:container md:mx-auto">
        <div className="flex gap-6 md:gap-8 py-6 md:py-8 lg:py-12 items-center justify-center flex-col">
          <div>
            <Announcement>
              <AnnouncementTitle>
                Drīzumā šeit būs
                <ArrowDown size={16} className="shrink-0 text-muted-foreground" />
              </AnnouncementTitle>
            </Announcement>
          </div>
          <div className="flex gap-3 md:gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl max-w-sm sm:max-w-md md:max-w-2xl tracking-tighter text-center font-regular">
              <span className="text-foreground">OPTERO.LV</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed tracking-tight text-muted-foreground w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl text-center">
            Mūsu platforma būs vieta, kur atrast uzticamus profesionāļus un atrast vajadzīgos pakalpojumus. Pakalpojumu sniedzēji varēs viegli publicēt piedāvājumus, lietotāji – salīdzināt un izvēlēties labāko. Būs iespēja ērti sazināties tieši portālā.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">
            <a href="tel:+37120036477">
              <Announcement className="w-full sm:w-auto cursor-pointer hover:bg-accent/50 justify-center sm:justify-start" variant="outline">
                <AnnouncementTitle>
                  <span className="hidden sm:inline">Jautājumi? Zvani:</span>+371 20 036 477 
                  <PhoneCall size={16} className="shrink-0 text-muted-foreground" />
                </AnnouncementTitle>
              </Announcement>
            </a>
            <Announcement className="w-full sm:w-auto cursor-pointer bg-primary text-primary-foreground border-primary hover:bg-background hover:text-primary hover:border-primary transition-colors justify-center sm:justify-start" variant="default">
              <AnnouncementTitle>
                info@optero.lv 
                <MoveRight size={16} className="shrink-0 text-primary-foreground transition-colors" />
              </AnnouncementTitle>
            </Announcement>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };
