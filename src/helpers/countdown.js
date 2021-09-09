import moment from 'moment-timezone';
import { CTO_TIMEZONE } from '../constants';

const getStandardDateForBirthday = dateStr => {
    const currYear = moment(new Date()).format('YYYY');
    const timestr = moment(dateStr).format('-MM-DDTHH:mm:ss');
    return currYear + timestr;
};

const getTimeLeft = (endDate, startDate) => {

    let duration, newEndDate, newStartDate;

    if (endDate > startDate) {
        newEndDate = endDate;
    }
    else {
        newEndDate = endDate.add(1, 'year');
    }

    newEndDate = moment.tz(newEndDate, CTO_TIMEZONE);
    newStartDate = moment.tz(startDate, CTO_TIMEZONE);

    duration = moment.duration(
        newEndDate.diff(newStartDate)
    ).asMilliseconds();

    const durationFormat = moment.tz(
        duration, CTO_TIMEZONE
    ).format('DDD-HH-mm-ss').split('-');

    return {
        days: durationFormat[0],
        hours: durationFormat[1],
        mins: durationFormat[2],
        secs: durationFormat[3]
    };
};

export {
    getTimeLeft,
    getStandardDateForBirthday
};