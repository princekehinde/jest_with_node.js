const math = require('../math')
test('should calculate Total Tip', () => {
    const total = math(10,0.3)
    expect(total).toBe(13)
})

test('should calculate total defaut' , () =>{
    const total = math(10)
    expect(total).toBe(12)
})

const add = (a,b) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if(a < 0 || b < 0)
            reject(new Error ('Number should be no-negative'))
            resolve(a + b);
        },2000)
    })
}
// test('should test async', (done)=> {
//   setTimeout(() =>{
//     espect(1).toBe(2)
//     done()
//   },2000)
// })

test('should return sum of two number', async () =>{
    const sum = await add(10,20)
    expect(sum).toBe(30);
})

