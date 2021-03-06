import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <center>
                Website created by{' '}
                <a
                    data-splitbee-event="Click footer link"
                    className={styles.a}
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://aryanbeezadhur.com"
                >
                    Aryan Beezadhur
                </a>
            </center>
        </footer>
    )
}