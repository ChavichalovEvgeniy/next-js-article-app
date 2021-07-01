import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  mb20: { marginBottom: 20 },
});

const formatDate = (date) => {
  return new Date(date).toDateString();
};

export default function ArticleCard({ title, article, email, date }) {
  const styles = useStyles();

  return (
    <Card variant="outlined" className={styles.mb20}>
      <CardContent>
        <Typography>{title}</Typography>
        <Typography>{article}</Typography>
        <Typography>Published by: {email}</Typography>
        <Typography>Publication date: {formatDate(date)}</Typography>
      </CardContent>
    </Card>
  );
}
