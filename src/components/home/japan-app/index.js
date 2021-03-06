import styles from './index.module.css';


export default function JapanApp(){


    return <>
        <div className={styles['container']}>
            <div className={styles['max-wrap']}>
                <div className={styles['title']}>
                    Explore our Applications
                </div>
                <div className={styles['content']}>
                    We provide the most effective, time-saving, cost-effective practice tests and language learning apps.
                </div>
                <div className={styles['wrap']}>
                    <div className={styles['left']}>
                        <div className={styles['wrap-left']}>
                            <img src='/imgs/bg-jp.svg' className={styles['bg']} alt=''/>
                            <div className={styles['wrap-phone']}>
                                <img src='/imgs/white.svg' className={styles['white']} alt=''/>
                                <img src='/imgs/japanese.png' className={styles['phone']} alt=''/>
                            </div>
                        </div>
                    </div>
                    <div className={styles['right']}>
                        <div className={styles['title-right']}>
                            Prep JLPT
                            <img src='/imgs/line.svg' className={styles['line']} alt=''/>
                        </div>
                        <div className={styles['content-right']}>
                            With more than 30,000 JLPT questions and 200 JLPT exams from previous years will be the exam preparation book to store your progress.
                            Let experience the HERMANN EBBINGHAUS FORGETTING CURVE memorization method to help you feel more confident in the upcoming exam.
                        </div>
                        <div className={styles['wrap-button']}>
                            <a
                                className={styles['button1']}
                                href='https://apps.apple.com/us/app/jlpt-japanese-test-practice/id1564455047'
                                target="_blank"
                                rel='noreferrer'
                            >
                                <img src='/imgs/black-apple.svg' alt=''/>
                                <div>App Store</div>
                            </a>
                            <a
                                className={styles['button2']}
                                href='https://play.google.com/store/apps/details?id=com.jlpttest'
                                target="_blank"
                                rel='noreferrer'
                            >
                                <img src='/imgs/white-android.svg' alt=''/>
                                <div>Play Store</div>
                            </a>
                        </div>
                    </div>
                </div>
                <img src='/imgs/brush.svg' className={styles['brush']} alt=''/>
            </div>
        </div>
    </>
}
