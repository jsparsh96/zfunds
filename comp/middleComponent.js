import Image from 'next/image'

const middleComponent = (props) => {
    const product = props.product;
    const styles = props.style;
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div>
                        <p className={styles.heading}><span className={styles.opaque}>{product.headingPart1}</span>{product.headingPart2}</p>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.tickContainer}>
                            <Image width={50} height={50} alt='' src={product.tickPath}></Image>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.textHeader}>{product.subHeading1}<br/>
                            <span className={styles.textStyle}>{product.content1}</span></p>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.tickContainer}>
                            <Image width={50} height={50} alt='' src={product.tickPath}></Image>
                        </div>
                        <div className={styles.textContainer}>
                            <p className={styles.textHeader}>{product.subHeading2}<br/>
                            <span className={styles.textStyle}>{product.content2}</span></p>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Image width="245.75" height="455.888" alt='' src={product.imagePath}></Image>
                </div>
            </div>
        </>
    )
}

export default middleComponent