export default ({to, from, messages}) =>{
    let msgKey= from.id + '-' + to.id;

    if(msgKey in messages){
        return messages[msgKey];
    }
    return null;

}
