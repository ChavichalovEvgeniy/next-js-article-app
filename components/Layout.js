import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    padding: "2rem",
  },
});

export default function Layout({ children, title }) {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
      </Head>

      {children}
    </div>
  );
}
