import styles from './index.module.css';


export default function OtherApps(){


    return <>
        <div className={styles['container']}>
            {/* Korean */}
            <div className={styles['wrap']}>
                <div className={styles['right']}>
                    <div className={styles['title-right']}>
                        Prep JLPT
                        <img src='/imgs/line.svg' className={styles['line']} alt=''/>
                    </div>
                    <div className={styles['content-right']}>
                        Let the App help you increase 80 Topik points.
                        With more than 5,000 questions and 60 Korean exams simulator will be the exam preparation book to store your progress.
                    </div>
                    <div className={styles['wrap-button']}>
                        <a className={styles['button1']} href='#' target="_blank">
                            <img src='/imgs/white-apple.svg' alt=''/>
                            <div>App Store</div>
                        </a>
                        <a className={styles['button2']} href='#' target="_blank">
                            <img src='/imgs/black-android.svg' alt=''/>
                            <div>Play Store</div>
                        </a>
                    </div>
                </div>
                <div className={styles['left']}>
                    <div className={styles['wrap-left']}>
                        <img src='/imgs/bg-korean.svg' className={styles['bg']} alt=''/>
                        <div className={styles['wrap-phone']}>
                            <img src='/imgs/korean.svg' className={styles['phone']} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            {/* German */}
            <div className={styles['wrap']}>
                <div className={styles['left']}>
                    <div className={styles['wrap-left']}>
                        <img src='/imgs/bg-german.svg' className={styles['bg']} alt=''/>
                        <div className={styles['wrap-phone']}>
                            <img src='/imgs/german.svg' className={styles['phone']} alt=''/>
                        </div>
                    </div>
                </div>
                <div className={styles['right']}>
                    <div className={styles['title-right']}>
                        Prep JLPT
                        <img src='/imgs/line.svg' className={styles['line']} alt=''/>
                    </div>
                    <div className={styles['content-right']}>
                        Let the App help you increase 30 Goethe points.
                        With more than 5,000 German questions and 60 German exams simulator will be the exam preparation book to store your progress.
                    </div>
                    <div className={styles['wrap-button']}>
                        <a className={styles['button1']} href='#' target="_blank">
                            <img src='/imgs/white-apple.svg' alt=''/>
                            <div>App Store</div>
                        </a>
                        <a className={styles['button2']} href='#' target="_blank">
                            <img src='/imgs/black-android.svg' alt=''/>
                            <div>Play Store</div>
                        </a>
                    </div>
                </div>
                <img src='/imgs/arrow.svg' className={styles['arrow']} alt=''/>
            </div>
            {/* Toeic */}
            <div className={styles['wrap']}>
                <div className={styles['right']}>
                    <div className={styles['title-right']}>
                        Prep JLPT
                        <img src='/imgs/line.svg' className={styles['line']} alt=''/>
                    </div>
                    <div className={styles['content-right']}>
                        This app helps you increase 90 TOEIC points in the TOEIC test. Over 10,000 TOEIC questions and 100 TOEIC exams from the previous year will be your exam preparation book to save your progress.
                    </div>
                    <div className={styles['wrap-button']}>
                        <a className={styles['button1']} href='#' target="_blank">
                            <img src='/imgs/white-apple.svg' alt=''/>
                            <div>App Store</div>
                        </a>
                        <a className={styles['button2']} href='#' target="_blank">
                            <img src='/imgs/black-android.svg' alt=''/>
                            <div>Play Store</div>
                        </a>
                    </div>
                </div>
                <div className={styles['left']}>
                    <div className={styles['wrap-left']}>
                        <img src='/imgs/bg-english.svg' className={styles['bg']} alt=''/>
                        <div className={styles['wrap-phone']}>
                            <img src='/imgs/english.svg' className={styles['phone']} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
            <img src='/imgs/brush-blue.svg' className={styles['brush']} alt=''/>
        </div>
    </>
}
