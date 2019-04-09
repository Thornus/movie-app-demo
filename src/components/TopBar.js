import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';

class TopBar extends Component {
    render() {
        const rightIcon = this.props.rightIcon || null;
        const leftIcon = this.props.leftIcon || null;

        return(
            <AppBar position="sticky" style={{backgroundColor: '#212121'}}>
                <Toolbar style={{alignItems: 'center', justifyContent: 'space-between'}}>
                    {leftIcon &&
                        <div>
                            <IconButton color="inherit">
                                {leftIcon}
                            </IconButton>
                        </div>
                    }

                    <h1>{this.props.title}</h1>

                    {rightIcon &&
                        <div>
                            <IconButton color="inherit">
                                {rightIcon}
                            </IconButton>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}

export default TopBar;