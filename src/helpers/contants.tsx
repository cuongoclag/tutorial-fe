import moment from "moment"

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
        date: date.toLocaleDateString(),
        UTCTime: date.toISOString()
    }
}

export const roleId = {
    ADMIN: '8a852af9-49f6-48a7-a676-6a14af0e5b61',
    TEACHER: '2256a62f-0f85-430c-817e-c5743ed342ac',
    STUDENT: '0122420a-db29-485b-96ca-eb2647f27ef4'
}