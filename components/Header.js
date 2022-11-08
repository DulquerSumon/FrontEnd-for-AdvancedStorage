import { ConnectButton } from "web3uikit";
import styles from "../styles/Home.module.css";
export default function Header() {
  return (
    <div className={styles.parent}>
      <div className={styles.child}>
        <h1>Advanced Storage</h1>
      </div>
      <div className={styles.child}>
        <ConnectButton className={styles.two} moralisAuth={false} />
      </div>
    </div>
  );
}
