import Link from "next/Link";
import { Link as MaterialLink, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  pointer: { cursor: "pointer" },
  mb20: { marginBottom: 20 },
});

export default function Header({ link, title }) {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <Typography className={styles.mb20} variant="h4">
        {title}
      </Typography>
      <Link href={link.url}>
        <MaterialLink className={styles.pointer}>{link.label}</MaterialLink>
      </Link>
    </header>
  );
}
