import React, { useState } from "react";
import {Document, Page} from 'react-pdf/dist/esm/entry.webpack';

function CV(){
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPages);
        setPageNumber(1);
    }

    function changePage(offSet){
        setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }

    function changePageBack(){
        changePage(-1)
    }

    function changePageNext(){
        changePage(+1)
    }
    
    return(
        <center>
        <div className= "resume">
            <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
              <Page height="800" pageNumber={pageNumber}/>  
            </Document>
        </div>
        </center>
    )
}

export default CV;