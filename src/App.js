import React, {useState} from "react";

function App() {
  return <div>
  <Folder name="Desktop">
  <Folder name="Music">
    <File name="all-star.mp4"/>
      <File name="express_file.mp4"/>
    </Folder>
    <Folder name="Pictures">
  <File name="dogs.jpeg" />
  <File name="cats.png" />
  <File name="birds.png" />
  </Folder>
  </Folder>
  <Folder name="Application"/>
  <Folder name="Documents" />
  </div>
}

const Folder = (props) =>{
  const [isOpen, setIsOpen] = useState(true);
  const {name, children} = props;
  const direction = isOpen ? "down" : "right";
  //const borderStyle = {border:"2px solid red"}
  const handleClick = () => setIsOpen(!isOpen);


return <div>
  <span onClick={handleClick}>
    <i className=" grey folder icon"></i>
    <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
<div style={{marginLeft:"17px"}}>
{isOpen ? children : null}
</div>
</div>
}

const File = (props) => {
  const {name} = props;
  const fileExtension = name.split(".")[1];
  const fileIcons = {
mp4: "headphones",
jpeg: "file image",
png: "file image outline",
  };
return <div>
  <i className={`${fileIcons[fileExtension]} icon`}></i>
  {name}
  </div>
}
export default App;
