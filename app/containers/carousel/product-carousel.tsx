import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { products } from '~/utils/constants';
import { ProductCard } from '../product-card';

export function ProductCarousel() {
  const [emblaRef] = useEmblaCarousel(
    { loop: true, breakpoints: { '(min-width: 1024px)': { active: false } } },
    [Autoplay({ delay: 3000 })],
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex p-4">
        {products.map(({ homeText, name, image, id }) => (
          <div
            key={id}
            className="mr-2 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-1"
          >
            <ProductCard
              description={homeText}
              title={name}
              image={image}
              id={id}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
