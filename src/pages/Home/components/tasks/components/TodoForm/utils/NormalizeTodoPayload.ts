import { set } from 'date-fns';

import { Todo } from '@/models/Todo';

import { FormValues } from '../useTodoForm';

export function NormalizeTodoPayload(formValues: Partial<Todo> & FormValues): Todo {
	const _currentDate = formValues.currentDate;
	const _startTime = formValues.startTime;
	const _endTime = formValues.endTime;
	const title = formValues.title;
	const startTime = set(new Date(_startTime), { date: _currentDate.getDate(), month: _currentDate.getMonth(), year: _currentDate.getFullYear() });
	const endTime = set(new Date(_endTime), { date: _currentDate.getDate(), month: _currentDate.getMonth(), year: _currentDate.getFullYear() });
	const id = formValues.id || Date.now();
	return { endTime, startTime, title, id, completed: false };
}
