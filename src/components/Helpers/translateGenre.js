// Translate api code genres to russian definition
export function translateGenre( genre )
{
    const genreArr = genre.map( ( item, id ) => genre.length >= 1 ?
        ( id < genre.length - 1 ? <span key={id}>{translate( item )}, </span> :
            <span key={id}>{translate( item )}</span> ) : null
    )
    function translate( genre )
    {
        switch ( genre )
        {
            case 28:
                return 'Action';
            case 12:
                return 'Adventure';
            case 16:
                return 'Cartoons';
            case 35:
                return 'Comedy';
            case 80:
                return 'Crime';
            case 99:
                return 'Documentary';
            case 18:
                return 'Drama';
            case 10751:
                return 'Family';
            case 14:
                return 'Fantasy';
            case 36:
                return 'Historical';
            case 27:
                return 'Horror';
            case 10402:
                return 'Musical';
            case 9648:
                return 'Mystic';
            case 10749:
                return 'Romantic';
            case 878:
                return 'Science fiction';
            case 10770:
                return 'Telecast';
            case 53:
                return 'Thriller';
            case 10752:
                return 'Military';
            case 10759:
                return 'Action & Adventure';
            case 10764:
                return 'On real events';
            case 10762:
                return 'Child';
            case 10763:
                return 'News';
            case 10765:
                return 'Science fiction and fantasy';
            case 10766:
                return 'Melodrama';
            case 10767:
                return 'Podcast';
            case 10768:
                return 'War and politics';
            case 37:
                return 'Western';
            default:
                return
        }
    }
    // Return array with complete genres block
    return genreArr;
}