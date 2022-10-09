import dayjs from 'dayjs'

export function getMonth(month = dayjs().month()) { // loop through and create 2d array in range of month 1~12
    month = Math.floor(month); // rouubd num downn
    const year = dayjs().year()
    const firstDayofTheMonth = dayjs(new Date(year,month, 1)).day() // year/month/date
    
    let currentMonthCount = 0 - firstDayofTheMonth;
    const daysMatrix = new Array(5).fill([]).map(() => { // row
        return new Array(7).fill(null).map(() =>{ // collum
            currentMonthCount++;
            return dayjs(new Date(year,month,currentMonthCount))
        });
    });
    return daysMatrix;
}