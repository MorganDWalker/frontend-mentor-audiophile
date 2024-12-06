import Image from 'next/image';
import Cart from './assets/shared/desktop/icon-cart.svg';
import Logo from './assets/shared/desktop/logo.svg';
import HeadphoneImage from '';
import SpeakerImage from '';
import EarphonesImage from '';



export default function Home() {
  return (
    <main>
       <header className='block--background-black block__white-text'>
        <nav>
            <ul>
              <li>
              <Image src={Logo} alt='Audiophile logo' />
              </li>
              <li>Home</li>
              <li>Headphones</li>
              <li>Speakers</li>
              <li>Earphones</li>
              <li>
                <a>
                  <Image src={Cart} alt='Shopping Cart Icon'/>
                </a>
              </li>
            </ul>
          </nav>
          

          <p className='overline'>New product</p>
          <h1>XX99 Mark II Headphones</h1>
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          See product
        </header>
        <section>
          Headphones
            Shop

            Speakers
            Shop

            Earphones
            Shop
        </section>
        
        <section>
          ZX9 speaker
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
          See product

          ZX7 speaker
          See product

          YX1 earphones
          See product
        </section>
        
        <article>
          Bringing you the best audio gear
          Located at the heart of New York City, Audiophile is the premier store for high end headphones, 
          earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration 
          rooms available for you to browse and experience a wide range of our products. Stop by our store 
          to meet some of the fantastic people who make Audiophile the best place to buy your portable 
          audio equipment.
        </article>
        
        <footer>
          <aside>
            <nav>
              Home
              Headphones
              Speakers
              Earphones
            </nav>
          </aside>
          Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers 
          and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
          visit our demo facility - we&apos;re open 7 days a week.

          Copyright 2021. All Rights Reserved
        </footer>
        
    </main>
   
  );
}
