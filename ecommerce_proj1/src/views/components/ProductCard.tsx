import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

// testing
import gatYellowImg from "../../assets/gat_yellow.jpg";

export default function ProductCard() {
    const matches = useMediaQuery("(max-width:600px)");
    return (
        <Card sx={{ borderRadius: "30px", maxWidth: 345 }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={0}
            >
                <Grid item>
                    <CardMedia
                        sx={{ marginTop: "24px", borderRadius: "30px" }}
                        component="img"
                        alt="product image"
                        height="140"
                        image={gatYellowImg}
                    />
                </Grid>
                <CardContent sx={{ padding: 0 }}>
                    <Grid item>
                        <Button size="medium">
                            Gateron Milky Yellow Switches
                        </Button>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" align="center">
                            Gateron
                        </Typography>
                    </Grid>
                </CardContent>
            </Grid>
        </Card>
    );
}
