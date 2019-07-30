import React from "react"

function NewCardForm(props){
    return (
        <form className="ui form container segment">
            <div className="field">
                <label>Title</label>
                <input name="title" onChange={props.handleChange} type="text" />
            </div>
            <div className="field">
                <label>Content</label>
                <textarea name="content" onChange={props.handleChange} ></textarea>
            </div>
            <div className="field">
                <label>Link to Image</label>
                <input name="img_url" onChange={props.handleChange} type="text" />
            </div>
            <button onClick={props.handleSubmit} className="ui green button" type="submit">Submit</button>
        </form>
    )
}

export default NewCardForm