/**
 * @param {string} date
 * @return {string}
 */
var convertDateToBinary = function(date) {
    const [year,month,day]=date.split('-')
    const y=parseInt(year,10).toString(2)
    const m=parseInt(month,10).toString(2)
    const d=parseInt(day,10).toString(2)
    const fullDate=`${y}-${m}-${d}`
    return fullDate;

};