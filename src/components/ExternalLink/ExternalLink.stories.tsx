import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from '../../themes/default';
import { ExternalLink } from './ExternalLink';
import { Box } from '../Box/Box';
import { Button } from '../Button/Button';

const stories = storiesOf('ExternalLink', module);

stories.add('simple DT', () => (
    <ThemeProvider theme={darkTheme}>
        <Box backgroundColor="bg" height="100vh" p={12}>
            <ExternalLink
                href="https://metamask.io/download.html"
                referrerPolicy="noopener noreferrer"
                display="block"
            >
                Download
            </ExternalLink>
            <ExternalLink
                href="https://metamask.io/download.html"
                referrerPolicy="noopener noreferrer"
                display="block"
                mt={12}
            >
                <Button>Download</Button>
            </ExternalLink>
        </Box>
    </ThemeProvider>
));

stories.add('simple LT', () => (
    <ThemeProvider theme={lightTheme}>
        <Box backgroundColor="bg" height="100vh" p={12}>
            <ExternalLink
                href="https://metamask.io/download.html"
                referrerPolicy="noopener noreferrer"
                display="block"
            >
                Download
            </ExternalLink>
            <ExternalLink
                href="https://metamask.io/download.html"
                referrerPolicy="noopener noreferrer"
                display="block"
                mt={12}
            >
                <Button>Download</Button>
            </ExternalLink>
        </Box>
    </ThemeProvider>
));
