import React, { useEffect, useRef } from "react";
import styles from "./Home.module.css";
import { assets } from "../../assets/assets.jsx";
import Slider from "../../components/slider/Slider.jsx";

export default function Home() {
  const carouselItems = [
    "Wedding Rings",
    "Bridal Collection",
    "Elegant Necklaces",
    "Shiny Charms",
    "Outstanding Bracelets",
    "Vintage Pieces",
    "Birthstone Jewelry",
  ];

  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Enable animation flag
    scroller.dataset.animated = "true";

    const scrollerInner = scroller.querySelector(`.${styles.caruselTrack}`);
    const scrollerContent = Array.from(scrollerInner.children);

    // Duplicate items for seamless looping
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.gif}>
        <img src={assets.homegif} alt="Home GIF" />
      </div>

      <Slider />

      <div className={styles.collection}>
        <h1 className={styles.collectionTitle}>
          "Jewelry is more than just an accessory — it's a timeless expression
          of elegance, crafted to celebrate the beauty, strength, and
          individuality of every woman who wears it."
        </h1>
        <div className={styles.collectionImages}>
          <img
            src={assets.collection}
            alt="Collection"
            className={styles.collectionimg}
          />
        </div>
      </div>

      <div className={styles.section}>
        <h1 className={styles.sectionTitle}>Explore Our Collection</h1>
        <div className={styles.carusel} ref={scrollerRef}>
          <ul className={styles.caruselTrack}>
            {carouselItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.resgrid}>
        <div className={styles.resitem}>
          <img src={assets.jewel1} className={styles.imggnohover}/>

          <div className={styles.namecost}>
            <p className={styles.naming}>Fairy Light Charm</p>
            <p className={styles.cost}>$60</p>
          </div>
          <p className={styles.colc}>Jenny Slate x Catbird</p>
        </div>

        <div className={styles.resitem}>
          <img src={assets.jewel2} className={styles.imggnohover}/>
          <div className={styles.namecost}>
            <p className={styles.naming}>Rosette Gold Charm</p>
            <p className={styles.cost}>85$</p>
          </div>
          <p className={styles.colc}>Bittersweets NY</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel3} className={styles.imggnohover} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Heart Beauty Necklace</p>
            <p className={styles.cost}>110$</p>
          </div>
          <p className={styles.colc}>Catbird Jewellery</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel4} className={styles.imgg}/>
          <img src={assets.jewel4hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Loggia Diamond Ring</p>
            <p className={styles.cost}>115$</p>
          </div>
          <p className={styles.colc}>Bittersweets NY</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel5} className={styles.imgg} />
          <img src={assets.jewel5hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Daphne Diamond Ring</p>
            <p className={styles.cost}>95$</p>
          </div>
          <p className={styles.colc}>Jenny Slate x Catbird</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel6} className={styles.imgg} />
          <img src={assets.jewel6hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Classic Emerald Ring</p>
            <p className={styles.cost}>120$</p>
          </div>
         
           <p className={styles.colc}> Concrete Collective</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel7} className={styles.imgg}/>
          <img src={assets.jewel7hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Love Knot Bracelet</p>
            <p className={styles.cost}>195$</p>
          </div>
           <p className={styles.colc}> Collette Ishiyama</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel8} className={styles.imgg} />
          <img src={assets.jewel8hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Angel Hair Earrings</p>
            <p className={styles.cost}>150$</p>
          </div>
           <p className={styles.colc}>  Yayoi Forest</p>
        </div>
        <div className={styles.resitem}>
          <img src={assets.jewel9} className={styles.imgg} />
          <img src={assets.jewel9hover} className={styles.hoverImage} />
          <div className={styles.namecost}>
            <p className={styles.naming}>Diamond  Earrings</p>
            <p className={styles.cost}>200$</p>
             
          </div>
           <p className={styles.colc}> Catbird x The Met</p>
        
        </div>
      </div>

      <div className={styles.desktop}>
            <div className={styles.itm}>
               <img src={assets.background}  className={styles.background}></img>
      </div>

    </div>

    </div>
  );
}