import Image from 'next/image'
import style from '../../styles/Home.module.css'
import bg from 'https://image.slidesdocs.com/responsive-images/background/technology-abstract-business-stereoscopic-white-square-powerpoint-background_04b8950287__960_540.jpg'

function Hero() {
  return (
    <header className={style.main}>
        A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.
         <Image
            src="bg"
            alt="Picture of the author"
            width={500}
            height={500}
            />
    </header>
  )
}

export default Hero