import Input from "../Input/Input";
import Button from "../Button/Button";

function TaskForm() {
  return (
    <>
      <form>
        <Input name="task" placeholder="Agregar nueva tarea..." />
        <Button type="submit">Agregar tarea</Button>
      </form>
    </>
  );
}
export default TaskForm;