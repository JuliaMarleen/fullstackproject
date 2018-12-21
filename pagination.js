// function currentItems(total, start, limit){
//     if (limit === undefined) return total
//     return (((total - start) - limit) <= 0) ? (total - start) + 1 : (limit === 0) ? total : limit;
// }

function NumberOfPages(total, start, limit){
    return Math.ceil(total / limit) //ceil naar boven afronden
}

function currentPage(total, start, limit){
    let totalPages =  Math.ceil(total / limit)
    let pages = (total - start) / limit;
    return Math.ceil(totalPages - pages)
}

function getFirstQueryString(total, start, limit){
    return `?start=${start}&limit=${limit}`
}

function getLastQueryString(total, start, limit){
    return `?start=${total}&limit=${limit}`
}

function  getPreviousQueryString(total, start, limit){
    return `?start=${(total - limit > 0) ? (start - limit) : start}&limit=${limit}`
}

function  getNextQueryString(total, start, limit){
    return `?start=${(total + limit > total) ? (start + limit) : start}&limit=${limit}`
}

// function  getPagination(total, start, limit){

// }