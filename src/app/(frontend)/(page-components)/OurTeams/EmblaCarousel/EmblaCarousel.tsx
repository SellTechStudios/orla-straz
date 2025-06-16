import './embla.css'

import CarouselCard, { CarouselCardProps } from './CarouselCard'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'

import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

type PropType = {
  slides: CarouselCardProps[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <CarouselCard id={slide.id} title={slide.title} image={slide.image} />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : '',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel
