import { useState } from 'react';
import { Box, styled } from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';

import { Controlled as CtrlEdtr } from 'react-codemirror2';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css';

const Heading = styled(Box)`
    background: #1d1e22;
    display: flex;
    color: grey;
    padding: 9px 12px
`
const Header = styled(Box)`
    background: #1B1212;
    display: flex;
    justify-content: space-between;
`
const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 3px;

`


const Editor = ({ heading, symbol, colour, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return(
        <Container style={ open ? null : {flexGrow:0 }}>
            <Header>
                <Heading>
                    <Box component="span" 
                        style={
                                { background: colour, 
                                    height: 20, 
                                    width: 20, 
                                    display: 'flex', 
                                    placeContent: 'center',
                                    borderRadius: 5,
                                    marginRight: 5,
                                    paddingBottom: 5,
                                    color: 'grey',
                                    fontWeight: 2000,
                                }
                           }
                    > {symbol}
                    </Box>{heading}
                </Heading>
                <CloseFullscreenIcon 
                    fontSize='small'
                    onClick={() => setOpen(prevState => !prevState)}
                    style={{
                        background: 'grey', 
                                    alignSelf: 'center',
                                    borderRadius: 20,
                                    paddingTop: 3,
                                    paddingBottom: 3
                    }}/>
            </Header>
            <CtrlEdtr
                className='controlled-editor' 
                value= {value}
                onBeforeChange = {handleChange}
                options={
                    {
                        theme: 'material',
                        lineNumbers: true

                    }
                }
            />
        </Container>
    )
}

export default Editor;