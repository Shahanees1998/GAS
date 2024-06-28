import styles from "./page.module.css";
import './globals.css';
import EE from "../../components/EE";
import prisma from "../../lib/prisma";

export default async function Home() {
  const eei5 = await prisma.eei.findMany()
  const eek5 = await prisma.eek.findMany()

  const gasi5 = await prisma.gasi.findMany()
  const gask5 = await prisma.gask.findMany()

  const password = await prisma.setting.findUnique({where : {name : 'password'}})
  return (
    <main className={styles.main}>
      <head>
        <title>Your Title 2</title>
        <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
      </head>
      <body>
        <EE eei5={eei5} eeik={eek5} gasi5={gasi5} gasik={gask5} password={password?.value}/>
      </body>

    </main>
  );
}
