import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import appStyles from '@styles/App.module.css';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay';
import AutoHeight from 'embla-carousel-auto-height';
import { InlineImage } from '@components/InlineImage';
import { PortfolioItem } from './'
import { CarouselDot } from '@components/CarouselDot';
import { ArrowRight, ArrowLeft, Dot } from '@phosphor-icons/react';
// change
import voss1 from '@images/portfolio/voss/1.webp';
import voss2 from '@images/portfolio/voss/2.webp';
import voss3 from '@images/portfolio/voss/3.webp';
import voss4 from '@images/portfolio/voss/4.webp';
import vossmo1 from '@images/portfolio/voss/1_mobile.webp';
import vossmo2 from '@images/portfolio/voss/2_mobile.webp';
import vossmo3 from '@images/portfolio/voss/3_mobile.webp';

type PortfolioProps = {

}

export const Portfolio: React.FC<PortfolioProps> = (): JSX.Element => {
  const [ scrollSnapList, setScrollSnapList] = useState<number[]>([]);
  const [ selectedIndex, setSelectedIndex ] = useState<number>(1);
  const [carouselRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [
      AutoHeight()
    ]
  );

  const onNextClick = useCallback(() => {
    if(emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onPrevClick = useCallback(() => {
    if(emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  
  const scrollTo = useCallback((index: number) => {
    if(emblaApi) {
      emblaApi.scrollTo(index);
    }
  }, [emblaApi])
  
  const onSelect = useCallback(() => {
    if (emblaApi) {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    }
  }, [emblaApi]);
  
  useEffect(() => {
    if(emblaApi) {
      setScrollSnapList(emblaApi.scrollSnapList())
      emblaApi.on("select", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="portfolio" className={[appStyles.scrollMargin, appStyles.pageHeight].join(" ")} >
      <div className={[appStyles.inlineContainer, appStyles.flexV].join(" ")}>
        <h1>Portfolio</h1>
        <PortfolioItem 
          title="VOSS - eine Software zur Rechnungserstellung"
          githubName="voss-web"
          >
          <div className="embla" >
            <div className="embla_viewport" ref={carouselRef}>
            <div className="embla__container">
              {
                [voss1, voss2, voss3, voss4].map((i, key) => (
                  <InlineImage key={key} className="embla__slide">
                    <Image
                      src={i}
                      alt="image showing voss invoice software"
                    />
                  </InlineImage>
                ))
              }
              </div>
            </div>
          </div>
          <div className="embla__controls">
            <button className="embla__prev" onClick={onPrevClick}>
              <ArrowLeft size="1rem"/>
            </button>
            <div className="embla__dots">
              {scrollSnapList.map((_, key) => (
                <CarouselDot
                  // className="embla_dot"
                  selected={selectedIndex === key}
                  key={key}
                  onClick={() => scrollTo(key)}>
                </CarouselDot>
              ))
              }
            </div>
            <button className="embla__next" onClick={onNextClick}>
              <ArrowRight size="1rem"/>
            </button>
          </div>
        </PortfolioItem>
      </div>
    </section>
  );
}
