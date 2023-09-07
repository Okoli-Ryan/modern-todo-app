import "./TimePicker.scss";

import { TimePicker as AntTimePicker, TimePickerProps } from "antd";
import dayjs from "dayjs";
import { FaRegClock } from "react-icons/fa";

interface ITimePicker extends TimePickerProps {
	onChangeDate: (e: Date) => void;
}

export default function TimePicker({ format = "HH:mm a", onChangeDate }: ITimePicker) {
	const time = dayjs(Date.now()).format(format as string);

	function onChange(e: dayjs.Dayjs | null) {
		onChangeDate(new Date(e!.toDate()));
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
