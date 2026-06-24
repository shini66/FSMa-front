function header(data, text){
    if(data.length > 0){
        return `${text} ${data.length}`;
    }

    return `${text} ${data}`;
}

export default header;