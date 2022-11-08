import styles from "../styles/Home.module.css";
export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        © Developed By:
        <a>Md Sumon</a>
      </div>
    </footer>
  );
}

// .footer {
//   display: flex;
//   flex: 1;
//   padding: 2rem 0;
//   border-top: 1px solid #eaeaea;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 50px;
//   color: aqua;
//   background-color: black;
// }

// .main {
//   width: 100%;
//   border: 3px;
//   padding: 10px;
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   color: blue;
//   font-weight: bold;
// }
