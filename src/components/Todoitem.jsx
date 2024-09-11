import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    //console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  }
  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const completedTask = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={completedTask} onClick={() => handleClick(item.name)}>
          {item.name}
          <button className={styles.donebutton}>Done</button>
        </span>
        <div>
          {/* Button trigger modal */}
          <button
            type="button"
            className={styles.deleteButton}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img
              type="image"
              src="Trash-Can.png-removebg-preview.png"
              height={25}
            />
          </button>
          {/* Modal */}
          <div>
            <div
              className="modal fade"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title" id="exampleModalLabel">
                      Are You Sure
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    />
                  </div>

                  <div className="modal-footer">
                    <button
                      className={styles.donebutton}
                      type="button"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <div className="modal-body">
                      <button
                        type="button"
                        class="btn btn-primary"
                        className={styles.deleteButton}
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={() => {
                          handleDelete(item);
                        }}
                      >
                        Yes Delete It
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
{
}
