import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip, Grid, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { OpenInNew } from "@mui/icons-material";
import { styles } from "../../css/style";
import { theme } from "../../misc/theme";
import { timeSince } from "../../misc/helper";

export default function ImgMediaCard({ blog }) {
  const { heading, description, tags, image_link, id } = blog;
  return (
    <Grid sx={{ width: 320 }}>
      <CardMedia
        component="img"
        className="h-44"
        alt={heading}
        image={image_link}
      />
      <CardContent>
        <div className="">
          <Typography fontSize={12}>
            {blog?.creator_name} &#x2022;{" "}
            {timeSince(new Date(blog?.created_at))}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography gutterBottom variant="h5" component="div">
            {heading}
          </Typography>
          <Link title="Read more" to={`/blogs/${id}`} size="small">
            <IconButton>
              <OpenInNew />
            </IconButton>
          </Link>
        </div>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <div className="mt-3 space-x-2">
          {tags && tags.map((tag) => <Chip label={tag} />)}
        </div>
      </CardContent>

      <CardActions>
        {/* <Link to={`/blogs/${id}`} size="small">
          Learn More
        </Link> */}
      </CardActions>
    </Grid>
  );
}
