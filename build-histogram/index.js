function buildUniqueOccurances(input){
    const res=[]

    input.forEach(item=>{
        if(!res[item]) res[item]=0
        res[item]++
    })
    return res
}



function buildHistorgram(){
    const list=[2,4,5,2,3,4]
    const data = buildUniqueOccurances(list)

    const leftAxis=document.querySelector('.left-axis')[0]
    const bottomAxis=document.querySelector('.bottom-axis')[0]
    const contextAxis=document.querySelector('.content')[0]

    const lefAxisList=[]
    for(const key in data){
        const val=data[key]
        if(lefAxisList.indexOf(val) ===-1) lefAxisList.push(val)
    }
    lefAxisList.forEach(item=>{
        const leftAxisEleent = document.createElement('div')
        leftAxisEleent.textContent = item
        leftAxis.append(leftAxisEleent)
    })
    Object.keys(data).forEach(item=>{
        const bottomAxisElement = document.createElement('div')
        bottomAxisElement.textContent = item
        bottomAxis.append(bottomAxisElement)
    })
    for(const key in data){
        const val=data[key]
        const contentAxisElement = document.createElement('div')
        contentAxisElement.style.height = ((val / (Math.max(...lefAxisList)))*100)+"%"
        contextAxis.append(contentAxisElement)
    }


}
buildHistorgram()