export const checkOrder = (order: string) => {
    if (order === 'ascend' || order === 'ASC') {
        return 'ASC'
    } else if (order === 'descend' || order === 'DESC') {
        return 'DESC'
    } else {
        return 'DESC'
    }
} 

export const checkField = (field: string) => {
    if (field) {
        return field
    } else return 'created_at'
}

export const convertDateTime = (dateTime: string) => {
    const date = new Date(dateTime)
    return {
        date: date.toLocaleDateString()
    }
}