import { useState } from "react";

import { useTaskContext } from "./context/TaskContext";

export default function useTaskContainer() {
	const [showTaskModal, setShowTaskModal] = useState(false);
	const [inEditMode, setInEditMode] = useState(false);
	const { selectedTodo, setSelectedTodo } = useTaskContext();

	function closeModalForm() {
		setInEditMode(false);
		setShowTaskModal(false);
		setSelectedTodo(null);
	}

	function openAddTaskModal() {
		setShowTaskModal(true);
	}

	function setOnEditMode() {
		setInEditMode(true);
	}

	return { showTaskModal, openAddTaskModal, closeModalForm, selectedTodo, setSelectedTodo, setOnEditMode, inEditMode };
}
