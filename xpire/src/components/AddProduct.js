import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import flower from '../Mehl.jpg';
import ArrowIcon from '@material-ui/icons/KeyboardBackspace';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    root: {
        marginTop: "56px"
    },
    img: {
        height: '15rem',
        backgroundImage: "url(" + flower + ")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "auto 80%"
    },
    imgOverlay: {
        height: '15rem',
        backgroundColor: "hsla(0, 0%, 0%, 0.23)"
    }, 
    arrowIcon: {
        float: 'left',
        marginLeft: "16px",
        marginTop: "10px",
        color: "white"
    }, 
    deleteIcon: {
        float: 'right',
        marginRight: "28px",
        marginTop: "10px",
        color: "white"
    },
    form: {
        margin: '1.6rem'
    },
    textField: {
        width: '100%'
    },
    submitButton: {
        float: 'right',
        marginTop: '1rem'
    } 
});

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            name: "",
            amount: "",
            purchase_date: "",
            vailid_unitil: ""
        }
    }

    addProduct(event){
        this.props.add(this.state.name, this.state.amount, this.state.purchase_date, this.state.vailid_unitil);
        this.props.navigate();
    }

    handleClick(event) {
        this.props.navigate();
    }

    handleInput(event) {
        const value = event.target.value;
        this.setState({
            ...this.state,
            [event.target.id]: value
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <div className={classes.img}>
                    <div className={classes.imgOverlay}>
                        <ArrowIcon 
                            edge="end"
                            className={classes.arrowIcon}
                            onClick={this.handleClick}
                        />
                    </div>
                </div>
                <form className={classes.form}>
                    <TextField
                        id="name"
                        label="Titel"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="amount"
                        label="Anzahl"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                        onChange={this.handleInput}
                    />                           
                    <br />
                    <TextField
                        id="purchase_date"
                        label="Eingekauft am"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    <TextField
                        id="vailid_unitil"
                        label="Gültig bis"
                        margin="dense"
                        variant="outlined"
                        className={classes.textField}
                        onChange={this.handleInput}
                    />
                    <br />
                    
                    <Button
                        id="SaveButton"
                        variant="contained"
                        color="primary"
                        className={classes.submitButton}
                        onClick={this.addProduct}>
                        Speichern
                    </Button>
                </form>                           
            </div>
        );
    }
}

export default withStyles(styles)(AddProduct);