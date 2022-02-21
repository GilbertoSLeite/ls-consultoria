const moment = require('moment');

async function customChecarDiaUtil() {
    try {    
        let day_week = moment().subtract(3, 'h').isoWeekday();
        let result = moment().format('DD/MM/YYYY');

        const holidays = [
            '01/01', // Confraternização Universal
            '02/04', // Paixão de Cristro
            '21/04', // Tiradentes
            '01/05', // Dia do trabalho
            '07/09', // Independência dp Brasil
            '12/10', // Nossa Senhora Aparecida
            '02/11', // Finados
            '15/11', // Proclamação da Republica
            '25/12', // Natal
        ];
    
        let isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'));

        const addDayWeek = (amountDay) => { 
            result = moment(result, 'DD/MM/YYYY').add(amountDay, 'days').format('DD/MM/YYYY')
            isHoliday = holidays.includes(moment(result, 'DD/MM/YYYY', true).format('DD/MM'))
            day_week = moment(result, 'DD/MM/YYYY').isoWeekday()
        };

        const addDay = { 
            default: 1,
            5: 3,
            6: '0',
            7: 2,
        }

        for (let i = 0; i < 3; i++) addDayWeek(addDay[day_week] || addDay['default'])
    
        return result;        
        } catch (error) {
            console.log(`error: ${error}`)
    }    
};

module.exports = customChecarDiaUtil