import styles from './Footer.module.css';
import Image from 'next/image'
import Link from 'next/link';
const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.socialMedia}>
                        <div className={styles.linkenIn}>
                        <Link href="https://in.linkedin.com/compLinky/zfunds" target="_blank"><Image width={20} height={20} alt='' src='/linkedin.svg'></Image></Link>
                        </div>
                        <div className={styles.twitter}>
                        <Link href="https://twitter.com/z_funds" target="_blank"><Image width={20} height={20} alt='' src='/twitter.svg'></Image></Link>
                        </div>
                        <div className={styles.facebook}>
                        <Link href="https://www.facebook.com/zfunds.in/?modal=admin_todo_tour" target="_blank"><Image width={20} height={20} alt='' src='/facebook.svg'></Image></Link>
                        </div>
                        <div className={styles.youtube}>
                        <Link href="https://www.youtube.com/channel/UCdTCho3kU2lMHw2UjebD8fQ" target="_blank"><Image width={20} height={20} alt='' src='/youtube.png'></Image></Link>
                        </div>
                        <div className={styles.instagram}>
                        <Link href="https://www.instagram.com/zfunds.in/" target="_blank"><Image width={20} height={20} alt='' src='/instagram.svg'></Image></Link>
                        </div>
                    </div>
                    <div className={styles.brandDiv}> <p className={styles.brand}>ZFUNDS</p></div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.explore}>
                        <p className={styles.linkHeading}>EXPLORE</p>
                        <div>
                        <Link href='https://zfunds.in/mutual-funds'><p className={styles.navigationLinks}>Top Mutual fund</p></Link><br/>
                        <Link href='https://zfunds.in/m/saving-schemes'><p className={styles.navigationLinks}>Saving Schemes</p></Link>
                        </div>
                    </div>
                    <div className={styles.zfunds}>
                        <p className={styles.linkHeading}>ZFUNDS</p>
                        <div>
                        <Link href='https://zfunds.in/m'><p className={styles.navigationLinks}>Read Articles</p></Link><br/>
                        <Link href='https://zfunds.in/videos'><p className={styles.navigationLinks}>See Videos</p></Link><br/>
                        <Link href='https://zfunds.in/questions'><p className={styles.navigationLinks}>Ask Questions</p></Link><br/>
                        <Link href='https://zfunds.in/experts'><p className={styles.navigationLinks}>Find an Expert</p></Link><br/>
                        <Link href='https://zfunds.in/about'><p className={styles.navigationLinks}>About Us</p></Link><br/>
                        <Link href='https://zfunds.in/contact-us'><p className={styles.navigationLinks}>Contact Us</p></Link>
                        </div>
                    </div>
                    <div className={styles.business}>
                        <p className={styles.linkHeading}>BUSINESS</p>
                        <div>
                        <Link href='https://zfunds.in/advisor'><p className={styles.navigationLinks}>Become ZF Expert</p></Link>
                        </div>
                    </div>
                    <div className={styles.legal}>
                        <p className={styles.linkHeading}>LEGAL</p>
                        <div>
                        <Link href='https://zfunds.in/m'><p className={styles.navigationLinks}>Privacy Policy</p></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                <div className={styles.copy}>Copyright @ 2022 ZFunds <br/>All rights reserved</div>
                </div>
            </div>
        </div>
    )
}

export default Footer