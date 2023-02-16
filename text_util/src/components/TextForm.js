import React,{useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("Enter your Text")
    const handleUpClick = () => {
        setText(text.toUpperCase())
        props.showAlert("Convertd to Uppercase","success");
    }
    const handleLoClick = () => {
        setText(text.toLowerCase())
        props.showAlert("Convertd to LowerCase","success");
    }
    const handleClearClick = () => {
        setText("")
    }
    const handleChange = (event) => {
        setText(event.target.value)
    }
    const handleCopy = ()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        // setText(text.replace(/\s/g, "")) it will remove all spaces
     
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }
  return (
    <div>
    <div className="mb-3">
    <label>{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleChange} id="mybox"
    style={{backgroundColor:props.mode==='dark'?'grey':'white',
    color:props.mode==='dark'?'white':'black'}} rows="8"></textarea>
    </div>
    <button className='btn btn-primary' onClick={handleUpClick}>Convert To Upper Case</button>
    <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert To Lower Case</button>

    <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear</button>
    <button className='btn btn-primary mx-2' onClick={handleCopy}>CopyText</button>
    <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove ExtraSpaces</button>
    <div className='container my-3'>
        <h1>Your Text Summary</h1>
        {/* //split using white space and new  regex used lines */}
        <p>{text.split(/\s+/ ).filter((element)=> {return element.length !=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=> {return element.length !=0}).length } minutes takes to read</p>
        <h4>{text.length>0?text:"Enter Something to preview here"}</h4>
    </div>
    
    </div>
  )
}
