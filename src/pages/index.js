import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

import WidthFullIcon from '@mui/icons-material/WidthFull';
import WidthNormalIcon from '@mui/icons-material/WidthNormal';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [domLoaded, setDomLoaded] = useState(false);

  const [isFull, setIsFull] = useState(false);

  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  const handleLoad = (e) => {
    const objectUrl = URL.createObjectURL(e.target?.files[0])
    console.log(e.target?.files[0]);
    console.log(objectUrl);
    setVideoUrl(objectUrl)
  }

  return (
    <>
      <Head>
        <title>Video Toolkit</title>
        <meta name="description" content="Created by Max MErtsalov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className} ${isFull ? "cover" : "fill"}`}>
        {domLoaded ? (
          <ReactPlayer
            url={videoUrl}
            playing
            loop
            volume="0"
            playsinline
            autoplay
            muted
            // aria-hidden={true}
            width="100%"
            height="100vh"
            style={{objectFit: "cover"}}
              
          />
        ):
          <div className={styles.loading}>
            loading
          </div>
        }
        <input onChange={handleLoad} type='file' accept="video/*,.png"/>
        <div className='control'>
          <a onClick={() => setIsFull(true)} href='#'><WidthFullIcon/></a>
          <a onClick={() => setIsFull(false)} href='#'><WidthNormalIcon/></a>
        </div>
       
      </main>
    </>
  )
}
