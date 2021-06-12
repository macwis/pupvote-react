import React, {useState} from "react";
import {makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import ExtensionIcon from '@material-ui/icons/Extension';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { UpvoteItemProps } from './interfaces';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({})
);


const UpvoteItem = (props: UpvoteItemProps) => {
    const classes = useStyles();
    const [voted, setVoted] = useState(false)

    return (
        <ListItem>

            <ListItemAvatar>
                <Avatar>
                    <ExtensionIcon/>
                </Avatar>
            </ListItemAvatar>

            <ListItemText
                primary="Single-line item"
                secondary="Secondary text"
            />

            <ListItemSecondaryAction>
                <IconButton aria-label="down" onClick={props.down}>
                    <ThumbDownIcon color={voted ? "disabled" : "secondary"}/>
                </IconButton>
                <label>3</label>
                <IconButton aria-label="up" onClick={props.up}>
                    <ThumbUpIcon color={voted ? "disabled" : "primary"}/>
                </IconButton>
            </ListItemSecondaryAction>

        </ListItem>
    );

}

export default UpvoteItem;