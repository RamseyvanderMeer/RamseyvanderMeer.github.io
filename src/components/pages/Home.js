import React, { Component } from 'react';
import { Nav } from '..';
import { createMuiTheme, ThemeProvider, responsiveFontSizes, CssBaseline } from '@material-ui/core';

const theme = responsiveFontSizes(createMuiTheme({
  typography: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
  },
  background: {
    default: '#fff'
  }
}));
class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <div >
            <main>
              <Nav />
            </main>
          </div>
        </CssBaseline>
      </ThemeProvider>
    )
  }
}
export default App;
