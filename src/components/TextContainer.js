import React from 'react'

export default function TextContainer() {
    return (
        <>
            <div className="container my-3">
                <h4 className="my-2">Enter Your Text to Analyse</h4>
                <textarea className="form-control" rows="8"></textarea>
                <button type="button" className="btn btn-primary my-3 mx-2">Convert to Upper Case</button>
                <button type="button" className="btn btn-primary my-3 mx-2">Convert to Lower Case</button>
                <button type="button" className="btn btn-primary my-3 mx-2">Convert to Tilte Case</button>
                <button type="button" className="btn btn-primary my-3 mx-2">Clear Text</button>
                <button type="button" className="btn btn-primary my-3 mx-2">Copy to Clipboard</button>
                <button type="button" className="btn btn-primary my-3 mx-2">Remove Extra Spaces</button>
                <h4>Your Text Summary</h4>
                <p> Words Count :  Characters :    </p>
                <p>Approx 3 mins for complete reading</p>
                <h5>Preview</h5>
            </div>




        </>
    )
}
