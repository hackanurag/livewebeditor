import { useContext  } from "react";

import { Box, styled } from "@mui/system";
import Editor from "./Editor";

import { DataContext } from "../Context/DataProvider";

const Container = styled(Box)`
    display: flex;
    background-color: #060606;
`

const Code = () => {


    const {html, setHtml, css, setCss, js, setJs } = useContext(DataContext);

    return (
        <Container>
            <Editor
                heading = "HTML" 
                symbol = "/"   
                colour = 'red' 
                value = {html}   
                onChange = {setHtml}  
            />
            <Editor
                heading = "CSS"
                symbol = "*" 
                colour = 'blue'
                value = {css}
                onChange = {setCss}
            />
            <Editor
                heading = "JavaScript"
                symbol = "()" 
                colour = 'yellow'
                value = {js}
                onChange = {setJs}
            />
        </Container>
        
    )
}

export default Code;