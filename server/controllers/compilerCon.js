const testCode=(real,cur)=>{
    var crct=0,wr=0; 
    const rl=real.split("\n")
    const curl=cur.split("\n")
    if(rl.length!=curl.length) return {res: false,msg: "wrong ans",correct: "-",wrong: "-"};
    var res=true
    for(var i=0;i<rl.length;i++){
        if(rl[i].trim()!=curl[i].trim()){res=false;wr++;}
        else crct++;
    }
    return {res: res,msg: (res)? "all testcases passed": "Wrong answer",correct: crct,wrong: wr};
}

const getAns=async(qid)=>{
    //todo: fetch expected answer from DB
    return "dum1\n\dum2\ndum3";
}

module.exports={testCode,getAns}