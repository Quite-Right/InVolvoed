export const defineDayTimeAppeal = () => {
    const Digital= new Date()
    const hours = Digital.getHours()
    if (hours >= 5 && hours <= 11)
        return 'Доброе утро';
    else if (hours >= 12 && hours <= 17)
        return 'Добрый день';
    else if (hours >= 17 && hours <= 23)
        return 'Добрый вечер';
    else
        return 'Доброй ночи';
}