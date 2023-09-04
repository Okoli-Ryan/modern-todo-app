import { useMemo } from 'react';

import {
	getDaysInMonthWithDetails
} from '@/pages/Home/components/tasks/components/DateList/utils/getDaysInMonthWithDetails';
import { Button } from '@components/FormComponents';

import { useTaskContext } from '../../context/TaskContext';
import { checkIfCurrentDay, IDateObject } from './utils/checkIfCurrentDay';

export default function DateList() {
	const { selectedDate } = useTaskContext();

	const daysArray = useMemo(() => getDaysInMonthWithDetails(selectedDate!), [selectedDate]);

	return (
		<div className="sticky top-16 bg-white py-4">
			<h4 className="font-medium text-DarkGray text-sm">January 2023</h4>
			<div className="w-full overflow-auto flex gap-4 mt-3">
				{daysArray.map((props) => (
					<DateButton key={`${props.day}_${props.month}_${props.year}`} {...props} />
				))}
			</div>
		</div>
	);
}

interface IDateButton extends IDateObject {}

function DateButton(props: IDateButton) {
	const isCurrentDay = checkIfCurrentDay(props);

	return (
		<Button
			type={isCurrentDay ? "primary" : "default"}
			className="flex items-center justify-center flex-col gap-2 border-[1px] border-[#D0D5DD] px-4 py-2.5 min-w-[62px] min-h-[68px] rounded-md">
			<p className="font-semibold text-xs text-[#344054]">{props.dayOfWeek}</p>
			<p className="font-semibold text-xs text-[#344054]">{props.day}</p>
		</Button>
	);
}
