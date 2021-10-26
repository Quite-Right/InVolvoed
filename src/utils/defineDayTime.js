export const defineDayTimeAppeal = (lang) => {
    const Digital= new Date()
    const hours = Digital.getHours()
    if (hours >= 5 && hours <= 11)
        return lang === 'RU' ? 'Доброе утро' : 'Good morning';
    else if (hours >= 12 && hours <= 17)
        return lang === 'RU' ? 'Добрый день' : 'Good day';
    else if (hours >= 17 && hours <= 23)
        return lang === 'RU' ? 'Добрый вечер' : 'Good evening';
    else
        return lang === 'RU' ? 'Доброй ночи' : 'Good night';
}