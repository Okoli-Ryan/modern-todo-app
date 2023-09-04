import { Button as AntDButton, ButtonProps } from 'antd';

export default function Button(props: ButtonProps) {
	const { type, className } = props;

    if(type === 'primary') return <AntDButton {...props} className={`${className} color-white bg-primary`} />
	return <AntDButton {...props} />
}
