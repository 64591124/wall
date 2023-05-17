let baseUrl = ''
let routerMode = 'hash'
let avatarUrl = ''
let baseImgPath
if(process.env.NODE_ENV == 'development'){
    baseUrl = 'http://localhost:3000/'
    baseImgPath = 'http://localhost:3000'
    avatarUrl = 'http://img.5i21.cn/LightPicture/2022/10/eeaaaa6df26aefe5.jpg'
}else{
    baseUrl = 'http://api.5i21.cn/walls'
    baseImgPath = 'http://api.5i21.cn'
    avatarUrl = 'http://img.5i21.cn/LightPicture/2022/10/eeaaaa6df26aefe5.jpg'
}
export {
    baseUrl,
    routerMode,
    baseImgPath,
    avatarUrl
}