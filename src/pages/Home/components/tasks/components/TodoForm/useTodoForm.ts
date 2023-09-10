import { notification } from "antd";
import { format, isSameDay, set } from "date-fns";
import { ChangeEvent, useState } from "react";

import { saveTodo, updateTodo } from "@/lib/todoLib";
import { createTodoAsync, updateTodoAsync } from "@/lib/todoLibAsync";
import { Todo } from "@/models/Todo";

import { useTaskContext } from "../../context/TaskContext";
import { ITodoForm } from "./TodoForm";
import { NormalizeTodoPayload } from "./utils/NormalizeTodoPayload";

export interface FormValues {
	startTime: Date;
	endTime: Date;
	currentDate: Date;
	title: string;
}

export default function useTodoForm({ onClose, data, onAddTodo, onEditTodo }: ITodoForm) {
	const { selectedDate, selectedTodo } = useTaskContext();
	const [isLoading, setIsLoading] = useState(false);
	const [isCalenderOpen, setIsCalenderOpen] = useState(false);
	const [formValues, setFormValues] = useState<FormValues>({
		startTime: data?.startTime || new Date(),
		endTime: data?.endTime || new Date(),
		currentDate: data?.startTime || selectedDate!,
		title: data?.title || "",
	});

	const inEditMode = !!selectedTodo;

	function setValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
		setFormValues((prev) => ({ ...prev, [key]: value }));
	}

	function onSelectDate(date: Date) {
		setValue("currentDate", date);
		setIsCalenderOpen(false);
	}

	function setStartTime(e: Date) {
		const _currentDate = new Date(formValues.currentDate);
		const newDate = set(_currentDate, { hours: e.getHours(), minutes: e.getMinutes() });
		setValue("startTime", newDate);
	}

	function setEndTime(e: Date) {
		const _currentDate = new Date(formValues.currentDate);
		const newDate = set(_currentDate, { hours: e.getHours(), minutes: e.getMinutes() });
		setValue("endTime", newDate);
	}

	function onChangeTitle(e: ChangeEvent<HTMLTextAreaElement>) {
		setValue("title", e.target.value);
	}

	function onChangeCalenderOpen(newOpen: boolean) {
		setIsCalenderOpen(newOpen);
	}

	async function handleSubmitOnCreateMode(payload: Todo) {
		setIsLoading(true);
		try {
			await createTodoAsync(payload);
			saveTodo(payload);
			onAddTodo(payload);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	}

	async function handleSubmitOnEditMode(payload: Todo) {
		setIsLoading(true);
		try {
			await updateTodoAsync(payload);
			updateTodo(payload, data!.startTime);
			onEditTodo(payload);
		} catch (error) {
			console.log("didnt work");
		} finally {
			setIsLoading(false);
		}
	}

	async function handleSubmit() {
		if (!formValues.title) {
			notification.error({ message: "Add Todo title" });
			return;
		}

		const payload = NormalizeTodoPayload({ ...data, ...formValues });

		if (inEditMode) {
			await handleSubmitOnEditMode(payload);
		} else {
			await handleSubmitOnCreateMode(payload);
		}
		onClose();
	}

	const dateButtonLabel = isSameDay(formValues.currentDate, new Date()) ? "Today" : format(formValues.currentDate, "P");

	return {
		currentDate: formValues.currentDate,
		onChangeTitle,
		onSelectDate,
		dateButtonLabel,
		setStartTime,
		setEndTime,
		handleSubmit,
		selectedDate,
		isCalenderOpen,
		onChangeCalenderOpen,
		isLoading,
	};
}
