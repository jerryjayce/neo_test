import moment from 'moment';

export function is_valid_date(date_string: string): boolean {
    return moment(date_string, 'YYYY-MM-DD').isValid();
}


export function get_beginning_of_week(): moment.Moment {
    const today = moment();
    return today.startOf('week');
}

