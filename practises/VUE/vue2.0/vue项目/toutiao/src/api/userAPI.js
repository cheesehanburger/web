import request from '@/utils/request'
// 仅作为演示，并无此接口
export const getUserInfoAPI = function () {
  request.get('/user')
}
