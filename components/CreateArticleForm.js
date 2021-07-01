import { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonContainer: {
    marginTop: 15,
    display: "flex",
    justifyContent: "flex-end",
  },
});

const initialFormFields = {
  title: "",
  article: "",
  email: "",
  date: "",
};

export default function CreateArticleForm() {
  const [formFields, setFormFields] = useState(initialFormFields);
  const styles = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`api/article`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFields),
    });

    if (res.ok) setFormFields({ ...initialFormFields });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          name="title"
          label="Article title"
          placeholder="My article"
          onChange={handleChange}
          value={formFields.title}
          autoFocus
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="article"
          label="Intro text"
          placeholder="My article intro text"
          onChange={handleChange}
          value={formFields.article}
          inputProps={{ maxLength: 255 }}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="email"
          type="email"
          label="Your email"
          placeholder="user@example.com"
          autoComplete="email"
          onChange={handleChange}
          value={formFields.email}
          required
          fullWidth
        />
        <TextField
          variant="outlined"
          margin="normal"
          name="date"
          label="Date for publication"
          type="date"
          onChange={handleChange}
          value={formFields.date}
          required
          fullWidth
          InputLabelProps={{ shrink: true }}
        />

        <div className={styles.buttonContainer}>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
