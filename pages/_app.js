import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "../utils";
import { MUIProvider } from "../providers";
import "slick-carousel/slick/slick.css";
import "../assets/css/style.css";
import "../styles/react-slick.css";
import { useRouter } from "next/router";
import Script from 'next/script';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);
    const { asPath } = useRouter()
    // console.log('RRRRR', asPath.split('/')[1] === 'blogs')
    return (
        <CacheProvider value={emotionCache}>
            <Head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
               
                                <title>
                               Dental Clinic in Kalamboli, Navi Mumbai - Aesthetic

                                </title>
                                <meta name="title" content="Dental Clinic in Thergaon, Pune - Dr. Dombe's Dental Clinic"></meta>
                                 <meta name='description' content=" Achieve a healthy, confident smile at Aesthetic Dental Clinic in Kalamboli. We provide modern, family-friendly dental care with a focus on your comfort and long-term oral health."></meta> 
                              

                             





    
{/* Website Monitoring Code - */}

<Script
        id="smartlook"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.smartlook||(function(d) {
              var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
              var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
              c.charset='utf-8';c.src='https://web-sdk.smartlook.com/recorder.js';h.appendChild(c);
            })(document);
            smartlook('init', '962ad21cf16541cd7016e30b9f6fcdb20e0d7eea', { region: 'eu' });
          `,
        }}
      />

    
            </Head>
            <MUIProvider>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {getLayout(<Component {...pageProps} />)}
            </MUIProvider>
        </CacheProvider>
    );
}
