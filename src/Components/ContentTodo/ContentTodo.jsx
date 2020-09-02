import React from 'react';
import {makeStyles , withStyles} from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {theme} from '../../theme';
import {ThemeProvider} from '@material-ui/core';
import './ContentTodo.css';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        width: '100%'
    },
    inputCheck: {
        marginRight: 10
    },
    checkItem: {
        cursor: 'pointer'
    },
    describeTitle: {
        paddingLeft: 5,
        marginBottom: 5
    }
});

const CustomCheckbox = withStyles({
    MuiCheckbox:{
        root:{
            borderRadius:'20px',
          //   background:'linear-gradient(to right, #ecececbd , #979797a8)'
          }
    }
    
})(Checkbox)

export default function ContentTodo({todo, toggleStatusCheckItem}) {
    const classes = useStyles();
    const [checked,
        setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>

                <Accordion>
                    <AccordionSummary
                        className={classes.describeTitle}
                        expandIcon={< ExpandMoreIcon />}
                        aria-label="Expand"
                        square={false}
                        aria-controls="additional-actions1-content"
                        id="additional-actions1-header">
                        <p className={classes.describeTitle}>{todo.describe}</p>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="textSecondary">
                            <ul>
                                {todo
                                    .checkList
                                    .map(checkItem => <span
                                        onClick={() => toggleStatusCheckItem(todo.id, checkItem.id)}
                                        key={`${todo.id}${checkItem.id}`}>
                                        <li >
                                            {checkItem.status
                                                ? <span className={classes.checkItem}>
                                                        <CustomCheckbox
                                                            checked={checked}
                                                            onChange={handleChange}
                                                            color="secondary"
                                                            size="small"
                                                            />
                                                        <del>{checkItem.text}</del>
                                                    </span>
                                                : <span className={classes.checkItem}>
                                                    <Checkbox
                                                        checked={null}
                                                        onChange={handleChange}
                                                        color="secondary"
                                                        inputProps={{
                                                        'aria-label': 'primary checkbox'
                                                    }}/> {checkItem.text}
                                                </span>}
                                        </li>
                                    </span>)}
                            </ul>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </ThemeProvider>
    );
}
