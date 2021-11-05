import styles from './index.module.css';



export default function Banner(){


    return <>
        <div className={styles['container']}>
            <div className={styles['max-wrap']}>
                <div className={styles['title']}>
                    Dreaming of learning
                    <div className={styles['subtitle']}>a New Language</div>
                </div>
                <div className={styles['wrap']}>
                    <div className={styles['left']}>
                        <div className={styles['content']}>
                            The road to conquer a new language is full of challenge barriers. We will accompany you to hit the peaks.
                        </div>
                    </div>
                    <div className={styles['right']}>
                        <img src='/imgs/question-mark.svg' className={styles['question-mark']} alt=''/>
                        <img src='/imgs/man.svg' className={styles['man']} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    </>
}