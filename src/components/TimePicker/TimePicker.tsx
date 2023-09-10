import './TimePicker.scss';

import { TimePicker as AntTimePicker, TimePickerProps } from 'antd';
import dayjs from 'dayjs';
import { FaRegClock } from 'react-icons/fa';

interface ITimePicker extends TimePickerProps {
	onChangeDate: (e: Date) => void;
	defaultStartTime?: Date | null;
	defaultTime?: Date | null;
}

export default function TimePicker({ format = "hh:mm a", onChangeDate, defaultTime }: ITimePicker) {
	const _defaultTime = defaultTime ? defaultTime : Date.now();

	const time = dayjs(_defaultTime).format(format as string);

	function onChange(e: dayjs.Dayjs | null) {
		onChangeDate(e!.toDate());
	}

	return (
		<AntTimePicker
			className="small-btn"
			defaultValue={dayjs(time, format as string)}
			format={format}
			suffixIcon={<FaRegClock className="text-[#344054]" />}
			onChange={onChange}
		/>
	);
}
