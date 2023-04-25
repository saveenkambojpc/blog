import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

export default function ImgMediaCard({ blog }) {
  const { heading, description, tags } = blog;
  return (
    <Card sx={{ width: 320 }}>
      <CardMedia
        component="img"
        alt={heading}
        height="100"
        width="180"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <div className="mt-3 space-x-2">
          {tags && tags.map((tag) => (
            <Chip label={tag} />
          ))}
        </div>
      </CardContent>

      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
