import React, { useState } from 'react';
	import { DatePicker } from 'react-datetime-range-super-picker';

	import 'react-datetime-range-super-picker/dist/index.css'

	const DatePickerComponent = () => {
		const [curr_date, setDate] = useState(new Date())

		const handleDateUpdate = ({date}) => {
			setDate(date)
		}

		return (
			<DatePicker date={curr_date}
				onDateUpdate={handleDateUpdate} />
		)
	}

  export default DatePickerComponent;