import React from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useFeaturesLoading } from "./useFeaturesLoading";

import UpvoteItem from "./UpvoteItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
        },
        title: {
            margin: theme.spacing(4, 0, 2),
        },
    })
);

function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5, 6].map((value) =>
        React.cloneElement(element, {
            key: value,
        })
    );
}

export function Upvote() {
    const classes = useStyles();
    const isFeeaturesLoading = useFeaturesLoading();

    console.log(isFeeaturesLoading);
    const up = (id: number) => {
        console.log("up vote on", id)
    }

    const down = (id: number) => {
        console.log("down vote on", id)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h6" className={classes.title}>
                        Feature requests
                    </Typography>
                    <div className={classes.demo}>
                        <List>
                            {generate(
                                <UpvoteItem up={(event: any) => {
                                    up(1)
                                }} down={(event: any) => {
                                    down(1)
                                }}/>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
