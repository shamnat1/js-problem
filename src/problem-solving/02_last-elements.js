/**
 * Get the last n data elements from the nested object
 *
 * See the test if you have questions
 */

export const getLastNumbers = (payload,count)=>{
    const dataArray = [];
    if(count === 0)
        return dataArray;
    while(payload.next || payload.data) {
        dataArray.push(payload.data)
        payload = payload.next?payload.next:[];
    }
    return dataArray.slice(-count);
}