function formatData({status=1,data=[],msg='success'}={}){
    if(status === 0){
        msg = 'fail'
    }
    return {
        status,
        data,
        msg
    }
}

module.exports = {
    formatData
}