import React from "react"

function NewCardForm(props){
    return (
        <form className="ui form">
            <div className="field">
                <label>Title</label>
                <input type="text" />
            </div>
            <div className="field">
                <label>Content</label>
                <textarea></textarea>
            </div>
            <div className="field">
                <label>ImageUrl</label>
                <input type="text" />
            </div>
        </form>
    )
}

export default NewCardForm