import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import MiddleComponent from '../comp/middleComponent'
import Middle1ComponentStyle from '../comp/MiddleComponent1.module.css';
import Middle2ComponentStyle from '../comp/MiddleComponent2.module.css';
import Footer from '../comp/Footer';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
  const data1 = {
    headingPart1: 'How do we ensure',
    headingPart2: ' Sahi Advice?',
    subHeading1: 'Dedicated Research team',
    content1: 'Some of the most talented people with a proven track record to help you choose the right fund',
    subHeading2: 'Certified & Experienced Experts',
    content2: 'Our advisors are certified, verified and have gone through intensive training',
    imagePath: '/whatsapp122.png',
    tickPath: '/tickw.png'
  };
  const data2 = {
    headingPart1: 'How do we make',
    headingPart2: ' Investing Asaan?',
    subHeading1: 'SIP Packs',
    content1: 'Recommended funds to help you reach your goals faster',
    subHeading2: 'Easy investing for first time investors',
    content2: 'Paperless KYC and SIP registration',
    imagePath: '/whatsappren-white.png',
    tickPath: '/tick-blue.png'
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>ZFunds - Sahi.Asaan</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script> */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.headerContainer}>
          <Image alt='' width={100} height={50} src='/logo.png'></Image>
          <div className={styles.rightPortion}>
            <Link className='linkTag' href='https://zfunds.in/advisor'>Experts</Link>
            <Link className='linkTag' href='https://zfunds.in/homedetail'>How we work</Link>
            <button className={styles.loginBtn}><p className={styles.loginBtnText}>Portfolio Login</p></button>
          </div>
        </div>

        <div className={styles.firstContainer}>
          <div className={styles.leftPart}>
            <p className={styles.subHeading}>Make Your Investments<br />
              <span className={styles.boldHeading}>Sahi. Asaan</span></p>
            <p className={styles.helpText}>With us you have a trusted ZFunds expert by your side each step of your investment journey.</p>
            <button className={styles.whatsAppBtn} onClick={() => window.location.href = 'https://api.whatsapp.com/send/?phone=917217746224&amp;text=Hi+&amp;app_absent=0'}><Image width="31" height="28" alt='' src='/whatsapp.svg'></Image><span>WhatsApp Expert</span></button>
            <p className={styles.chatInstruction}>Chat with an Expert now</p>
          </div>
          <div className={styles.mobileImage}>
            <Image width={245.75} height={455.888} alt='' src='/test123.png'></Image>
          </div>
        </div>

        <MiddleComponent product={data1} style={Middle1ComponentStyle} />

        <MiddleComponent product={data2} style={Middle2ComponentStyle} />

        <hr className={styles.horizontalLine} />

        <div className={styles.secondContainer}>
          <div className={styles.topPart}>
            <p className={styles.boldText}>Know Your Funds<span className={styles.normalText}>- in the language you understand</span><br />
              <span className={styles.instructions}>We don&apos;t use jargons, ratios or numbers to explain you anything. We do this in 6 languages</span></p>
          </div>
          <div className={styles.bottomPart}>
            <Link className='linkCard linkTag' href='https://www.youtube.com/channel/UCdTCho3kU2lMHw2UjebD8fQ'><Image alt='' width={427.2} height={400} src='/homecarousel1.png'></Image></Link>
            <Link className='linkCard linkTag' href='https://zfunds.in/m'><Image alt='' width={427.2} height={400} src='/homecarousel2.png'></Image></Link>
            <Link className='linkCard linkTag' href='https://zfunds.in/questions'><Image alt='' width={427.2} height={400} src='/homecarousel3.png'></Image></Link>
          </div>
        </div>

        <div className={styles.ceoMessageContainer}>
          <div className={styles.ceoInfo}>
            <div className={styles.ceoImageSection}>
              <Image className={styles.ceoImage} width={250} height={244.75} alt='' src='/ceo1.png'></Image>
              <p className={styles.ceoName}>Manish Kothari - CEO</p>
            </div>
            <div className={styles.bottomPart}>
              <p className={styles.ceoMessageBoldText}> &#34;So far only the rich have had access to the right financial advice<br />
                <span className={styles.ceoMessageNormalText}>We are changing that by ensuring every investor has a dedicated experts to maximize your gains&#34; </span></p>
            </div>
          </div>
          <div className={styles.carouselSection}>
            <div className={styles.keyPoints}>
              <p className={styles.keyPointsText}>3000+ Verified<br />Experts</p>
              <p className={styles.keyPointsText}>500+ crs invested<br />on expert advice</p>
              <p className={styles.keyPointsText}>10L people<br />benefited</p>
            </div>
            {/* Carousel Code is to be added */}
            <div>
              <Carousel>
                <Carousel.Item className={styles.carouselItem}>
                  <Image
                    width={1227}
                    height={280}
                    className="d-block w-100"
                    src="/customer1.png"
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                  <Image
                    width={1227}
                    height={280}
                    className="d-block w-100"
                    src="/customer2.png"
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item className={styles.carouselItem}>
                  <Image
                    width={1227}
                    height={280}
                    className="d-block w-100"
                    src="/customer3.png"
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        <div className={styles.joinUsContainer}>
          <div className={styles.joinAsExpert}>
            <div className={styles.expertImage}><Image width={288} height={415.763} alt='' src='/expert1.png'></Image></div>
            <div className={styles.expertAdvice}>
              <p className={styles.expertAdviceHeading}>Join us as an Expert<br />
                <span className={styles.expertAdviceContent}>Change how India Invests, join us on a mission to make Investments Sahi and Asaan across India</span></p>
              <button className={styles.getStartedBtn} onClick={() => window.location.href = 'https://zfunds.in/advisor'}>Get Started</button>
            </div>
          </div>
          <div className={styles.blankDiv}></div>
        </div>

        <div className={styles.aboutUsContainer}>
          <div className={styles.moreAboutUsHeading}>
            <p className={styles.expertAdviceHeading}>More about us</p>
          </div>
          <div className='w-50'>
            <Accordion defaultActiveKey="">
              <Accordion.Item className={styles.accordionItem} eventKey="0">
                <Accordion.Header className={styles.accordionHeader}>How does ZFunds work?</Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                ZFunds is India&apos;s only Mutual Funds Platform where you can get advice from top experts about your investments.You can download our app or send us a message on WhatsApp and an expert will help you plan your investments.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className={styles.accordionItem} eventKey="1">
                <Accordion.Header className={styles.accordionHeader}>Is my money safe with ZFunds?</Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                We have integrated with Bombay Stock Exchange to process your transactions. This means that your money never enters ZFunds bank account. It directly goes from you to BSE and then to the Mutual Fund company you invest in , ensuring 100% safety.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className={styles.accordionItem} eventKey="2">
                <Accordion.Header className={styles.accordionHeader}>Is it free?</Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                With ZFunds you invest in Regular Mutual Funds, which means hat the Mutual Fund company you choose to invest with pays your ZFunds Expert a small commission. There is no other fees that we charge.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item className={styles.accordionItem} eventKey="3">
                <Accordion.Header className={styles.accordionHeader}>How can I connect with an expert?</Accordion.Header>
                <Accordion.Body className={styles.accordionBody}>
                You can simply download our App here. Or drop us a WhatsApp here.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>

        <div className={styles.comparisonContainer}>
          <p className={styles.comparisonContainerHeading}>Dedicated to your gains, not to make you transact<br />
            <span className={styles.comparisonContainerContent}>With ZFunds, you pick the right fund each time.</span></p>
          <Image className={styles.comparisonImage} width={1008} height={821} alt='' src='/compare (1).png'></Image>
          <p className={styles.comparisonContainerContent}>Know more about how we pick top funds and create the best possible portfolio for you</p>
          <button className={styles.viewBtn} onClick={() => window.location.href = 'https://www.zfunds.in/homedetail'} >View our Research and Model Portfolios</button>
        </div>

        <Footer />

      </main>
    </div>
  )
}
