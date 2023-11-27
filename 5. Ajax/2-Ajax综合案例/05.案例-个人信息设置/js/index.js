/**
 * 目标1：信息渲染
 *  1.1 获取用户的数据
 *  1.2 回显数据到标签上
 * */
const creator = 'caroline'

function personInfo() {
    axios({
        url: 'http://hmajax.itheima.net/api/settings',
        method: 'get',
        params: {
            creator
        }
    }).then(result => {
        console.log(result)
        const userObj = result.data.data
        console.log(userObj)
        document.querySelector('.prew').src = userObj.avatar
        document.querySelector('.email').value = userObj.email
        document.querySelector('.nickname').value = userObj.nickname
        document.querySelector('.gender').value = userObj.gender
        document.querySelector('.desc').value = userObj.desc
        const gRadioList = document.querySelector('.gender')
        if (userObj.gender === 0) {
            gRadioList.checked = true
        } else {
            gRadioList.checked = false
        }
        
        // Object.keys(userObj).forEach(key => {
        //     if (key === 'avatar') {
        //         document.querySelector('.prew').src = userObj[key]
        //     } else if (key === 'gender') {
        //         const gRadioList = document.querySelectorAll('.gender')
        //         const gNum = userObj[key]
        //         gRadioList[gNum].checked = true
        //     } else {
        //         document.querySelector(`.${key}`).value = userObj[key]
        //     }
        // })
    })
}

personInfo()

document.querySelector('.upload').addEventListener('change', e => {
    const fd = new FormData()
    fd.append('avatar', e.target.files[0])
    fd.append('creator', creator)
    axios({
        url: 'http://hmajax.itheima.net/api/avatar',
        method: 'put',
        data: fd
    }).then(result => {
        const imgUrl = result.data.data.avatar
        document.querySelector('.prew').src = imgUrl
    })
})

document.querySelector('.submit').addEventListener('click', () => {
    const userForm = document.querySelector('.user-form')
    const userObj = serialize(userForm, { hash: true, empty: true })
    userObj.creator = creator
    userObj.gender = +userObj.gender
    axios({
        url: 'http://hmajax.itheima.net/api/settings',
        method: 'put',
        data: userObj
    }).then(result => {
        console.log(result.data.message)
        const toastDom = document.querySelector('.my-toast')
        const toast = new bootstrap.Toast(toastDom)
        toast.show()
    })
})