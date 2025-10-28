import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const categoriesToDisplay = categories.filter(cat => cat !== "All");

  const [text, setText] = useState("");
  const [category, setCategory] = useState(categoriesToDisplay[0] || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      text: text,
      category: category,
    };

    onTaskFormSubmit(newTask);

    setText("");
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoriesToDisplay.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
