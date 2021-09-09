import { useEffect, useState, useCallback} from 'react';
import moment from 'moment';
import TimeChildList from './components/TimeChildList/TimeChildList';
import { getTimeLeft, getStandardDateForBirthday } from '../helpers/countdown';
import { CTO_BIRTHDAY } from '../constants/admin';

export const initialState = {
    Day: 0,
    Hour: 0,
    Min: 0,
    Sec: 0
};

const Countdown = () => {

    const endDateStr = moment(getStandardDateForBirthday(CTO_BIRTHDAY));
    const endDate = moment(endDateStr);

    const [startDate, setStartDate] = useState(moment());
    const [formatData, setFormatData] = useState({
        Day: 0,
        Hour: 0,
        Min: 0,
        Sec: 0
    });

    const handleFormatData = useCallback(
        (formatData) => {
            const {days, hours, mins, secs} = formatData;
            setFormatData({
                Day: days,
                Hour: hours,
                Min: mins,
                Sec: secs
            });
        },
        []
    );

    const handleStartDate = date => setStartDate();

    const handleDecreaseTimer = useCallback(
        () => {

            handleStartDate(moment());

            const formatData = getTimeLeft(endDate, startDate);

            handleFormatData(formatData);
        },
        [endDate, handleFormatData, startDate]
    );

    useEffect(() => {
        setTimeout(() => {
            handleDecreaseTimer();
        }, 1000);
    }, [handleDecreaseTimer]);

    return (
        <div>
            <TimeChildList formatData={formatData} />
        </div>
    );
};

export default Countdown;
