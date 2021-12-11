// Translate api code genres to russian definition
export function translateGenre( genre )
{
    const genreArr = genre.map( ( item, id ) => genre.length === 1 ?
        // If only one item in array
        <span key={id}>{translate( item )}.</span> :
        // If more than one item, includes ternary condition that add coma between each items and dot in the end
        ( id < genre.length - 1 ? <span key={id}>{translate( item )}, </span> :
            <span key={id}>{translate( item )}.</span> )
    )
    function translate( genre )
    {
        switch ( genre )
        {
            case 28:
                return 'Екшн';
            case 12:
                return 'Приключения';
            case 16:
                return 'Мультики';
            case 35:
                return 'Комедия';
            case 80:
                return 'Криминал';
            case 99:
                return 'Документальный';
            case 18:
                return 'Драма';
            case 10751:
                return 'Семейный';
            case 14:
                return 'Фентези';
            case 36:
                return 'Исторический';
            case 27:
                return 'Ужасы';
            case 10402:
                return 'Мюзикл';
            case 9648:
                return 'Мистика';
            case 10749:
                return 'Романтический';
            case 878:
                return 'Научная фантастика';
            case 10770:
                return 'Телепередача';
            case 53:
                return 'Триллер';
            case 10752:
                return 'Военный';
            case 37:
                return 'Вестерн';
            case 10759:
                return 'Екшн и приключения';
            case 10764:
                return 'На реальных событиях';
            case 10762:
                return 'Детский';
            case 10763:
                return 'Новости';
            case 10765:
                return 'Научная фантастика и фентези';
            case 10766:
                return 'Мелодрама';
            case 10767:
                return 'Подкаст';
            case 10768:
                return 'Война и политика';
            case 37:
                return 'Вестерн';
            default:
                return
        }
    }
    // Return array with complete genres block
    return genreArr;
}