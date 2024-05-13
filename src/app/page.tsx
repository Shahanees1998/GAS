import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';

import User from "../../components/user";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
  return (
    <main className={styles.main}>
      <head>
        <title>Your Title</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <User />
    </main>
  );
}
