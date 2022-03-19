import "./style.css";
import { StateUpdater, useRef } from "preact/hooks";

interface Props {
  todo: string;
  setTodo: StateUpdater<string>;
  handleAdd: (e: Event) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onInput={(e) => setTodo(e.currentTarget.value)}
        placeholder="Add a task..."
        className="input_box"
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
