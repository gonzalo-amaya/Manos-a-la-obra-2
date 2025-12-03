import Checkbox from "../Checkbox/Checkbox";
import IconDelete from "../IconDelete/IconDelete";

function TaskItem() {
  return (
    <>
      <Checkbox />
      <span>manos a la obra 4</span>
      <IconDelete/>
      <Checkbox />
      <span>manos a la obra 3</span>
      <IconDelete/>
      <Checkbox checked={true} />
      <s>Hacer manos a la obra 1 </s>
      <IconDelete/>
      <Checkbox checked={true}/>
      <s>Aprender html </s>
      <IconDelete />
    </>

  );
}

export default TaskItem;