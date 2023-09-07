import { format, isSameDay, set } from "date-fns";
import { ChangeEvent, useState } from "react";

import { useTaskContext } from "../../context/TaskContext";

type FormValues = {
	startTime: Date;
	endTime: Date;
	currentDate: Date;
	title: string;
};

export default function useTodoForm() {
	const { selectedDate } = useTaskContext();
	const [formValues, setFormValues] = useState<FormValues>({ startTime: selectedDate!, endTime: selectedDate!, currentDate: selectedDate!, title: "" });

	function onSelectDate(date: Date) {
		setValue("currentDate", date);
	}

	function setValue<K extends keyof FormValues>(key: K, value: FormValues[K]) {
		setFormValues((prev) => ({ ...prev, [key]: value }));
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

	function handleSubmit() {
		const _currentDate = formValues.currentDate;
		const _startTime = formValues.startTime;
		const _endTime = formValues.endTime;
		const title = formValues.title;
		const startTime = set(new Date(_startTime), { date: _currentDate.getDate(), month: _currentDate.getMonth(), year: _currentDate.getFullYear() });
		const endTime = set(new Date(_endTime), { date: _currentDate.getDate(), month: _currentDate.getMonth(), year: _currentDate.getFullYear() });

		console.log({ endTime, startTime, title });
	}

	const dateButtonLabel = isSameDay(formValues.currentDate, new Date()) ? "Today" : format(formValues.currentDate, "P");

	return { currentDate: formValues.currentDate, onChangeTitle, onSelectDate, dateButtonLabel, setStartTime, setEndTime, handleSubmit, selectedDate };
}
