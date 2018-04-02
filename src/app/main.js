import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Tabs, {Tab} from 'material-ui/Tabs';
import {ApiClient, DefaultApi} from '../../client/src/index';
import Table, {TableBody, TableHead, TableRow, TableCell} from 'material-ui/Table';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import AddIcon from 'material-ui-icons/Add';
import {createMuiTheme} from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import AppBar from 'material-ui/AppBar';

const theme = createMuiTheme({
    palette: {
        primary: blue,
    },
});

let client = new ApiClient();
client.basePath = 'http://localhost:8888';

let api = new DefaultApi(client);

class Main extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data: [],
            openNew: false,
            tab: 0
        };

        this.handleTabChange = this.handleTabChange.bind(this);
        this.renderTableBody = this.renderTableBody.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handleOpenNew = this.handleOpenNew.bind(this);
        this.handleCloseNew = this.handleCloseNew.bind(this);
    }

    componentDidMount() {
        this.fetchData(0)
    }

    fetchData(tab) {
        this.setState({tab: tab});
        let callback = function (error, data) {
            if (error) {
                alert(error);
            } else {
                this.setState({data: data});
            }
        };

        callback = callback.bind(this);

        switch (tab) {
            case 0 :
                api.trainingunitGet(callback);
                break;
            case 1 :
                api.techniqueGet(callback);
                break;
            case 2 :
                api.methodGet(callback);
                break;
            case 3 :
                api.exerciseGet(callback);
                break;
        }
    }

    handleTabChange(event, value) {
        this.fetchData(value);
    }

    renderTableBody() {
        return (
            <TableBody>
                {this.state.data.map((row) =>
                    <TableRow>
                        <TableCell>{this.state.tab == 0 ? row.data.series : row.data.name}</TableCell>
                        <TableCell>{this.state.tab == 0 ? row.data.start : row.data.kind}</TableCell>
                    </TableRow>
                )}
            </TableBody>
        );
    }

    handleOpenNew() {
        this.setState({openNew: true});
    }

    handleCloseNew() {
        this.setState({openNew: false});
    }

    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <AppBar position="static">
                        <Tabs fullWidth centered value={this.state.tab} onChange={this.handleTabChange}>
                            <Tab label="Training Units"/>
                            <Tab label="Techniques"/>
                            <Tab label="Methods"/>
                            <Tab label="Exercises"/>
                        </Tabs>
                    </AppBar>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>{this.state.tab == 0 ? "Series" : "Name"}</TableCell>
                                <TableCell>{this.state.tab == 0 ? "Date" : "Kind"}</TableCell>
                            </TableRow>
                        </TableHead>
                        {this.renderTableBody()}
                    </Table>
                    <Button variant="fab" color="primary" aria-label="new" onClick={this.handleOpenNew}>
                        <AddIcon/>
                    </Button>
                    <Dialog
                        open={this.state.openNew}
                        onClose={this.handleCloseNew}
                        aria-labelledby="new-dialog-title"
                    >
                        <DialogTitle id="new-dialog-title">New</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleCloseNew} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.handleCloseNew} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Main;
