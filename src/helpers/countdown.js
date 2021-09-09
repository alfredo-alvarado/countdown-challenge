import moment from 'moment';

const getStandardDateForBirthday = dateStr => {
    const currYear = moment(new Date()).format('YYYY');
    const timestr = moment(dateStr).format('-MM-DDTHH:mm:ss');
    return currYear + timestr;
};

const getTimeLeft = (endDate, startDate) => {

    let duration, newEndDate;

    if (endDate > startDate) {
        newEndDate = endDate;
    }
    else {
        newEndDate = endDate.add(1, 'year');
    }

    duration = moment.duration(
        newEndDate.diff(startDate)
    ).asMilliseconds();

    const durationFormat = moment.utc(
        duration
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