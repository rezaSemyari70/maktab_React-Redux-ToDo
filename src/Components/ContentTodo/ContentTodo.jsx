import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './ContentTodo.css';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    inputCheck:{
        marginRight:10,
    },
    checkItem:{
        cursor:'pointer',
    },
    describeTitle:{
        paddingLeft:5,
        marginBottom:5,
    },
});



export default function ContentTodo({todo, toggleStatusCheckItem}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
                
            <Accordion>
                <AccordionSummary
                    className={classes.describeTitle}
                    expandIcon={< ExpandMoreIcon />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header">
                    <p className={classes.describeTitle}>{todo.describe}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography color="textSecondary">
                        <ul>
                            {todo.checkList
                                .map(checkItem => <span
                                    onClick={() => toggleStatusCheckItem(todo.id, checkItem.id)}
                                    key={`${todo.id}${checkItem.id}`}>
                                    <li >
                                        {checkItem.status
                                            ? <span className={classes.checkItem}><input className={classes.inputCheck} type="checkbox" checked/>
                                                    <del>{checkItem.text}</del>
                                                </span>
                                            : <span className={classes.checkItem}><input className={classes.inputCheck} type="checkbox" null/>{checkItem.text}</span>}
                                    </li>
                                </span>)}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    );
}
