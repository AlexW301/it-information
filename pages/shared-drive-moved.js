import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shared Drive Has Moved</title>
        <meta name="description" content="Your shared drive has moved" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Shared Drive Has Moved!</h1>

        <p className={styles.description}>
          Your shared drive is now in a new location and will be much faster,
          updated should be nearly instant now.
        </p>
        <code className={styles.code}>
          Documents
          (\\appriver3651017932.sharepoint.com@SSL\DavWWWRoot\sites\PremierMortgageLending)
          (X:)
        </code>
        <div>
          <Image
            src={`/images/example.png`}
            height={760}
            width={1605}
            alt="example"
          />
        </div>

        <p className={styles.description}>
          You must now use the new X: Drive on your PC called 
          <code className={styles.code}>
            Documents
            (\\appriver3651017932.sharepoint.com@SSL\DavWWWRoot\sites\PremierMortgageLending)
            (X:)
          </code>{" "}
          located under This PC, see the picture for a better visual.  You can
          still use the shortcut in your One Drive, but it wont update as fast.
        </p>
      </main>
    </div>
  );
}
