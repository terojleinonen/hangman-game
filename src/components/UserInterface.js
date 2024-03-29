const UserInterface = ({title,showElement,text,ShowWord,Keyboard,button}) => {
    
    return (
        <div className="row">
            <div className="infobox col-2">                
                    Try to guess the word!        
            </div>
            <div className="GameBox col-8">
                <div className="titleBox row">
                    <h1>{title}</h1>
                </div>                    
                <div className="imageBox row">
                    {showElement}
                    {text}
                    {ShowWord}
                    {Keyboard}
                    {button}
                </div>
            </div>
        </div>
    )
}
export default UserInterface;