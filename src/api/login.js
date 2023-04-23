import request from '@/utils/request'

export function login(username, password, captcha) {
  return request({
    url: 'admin/login',
    // url: 'auth/login',
    method: 'post',
    data: {
      username,
      password,
      captcha
    }
  })
}

export function getInfo() {
  return request({
    url: 'auth/info',
    method: 'get'
  })
}

export function getCaptCha() {
  return request({
    url: 'admin/captcha',
    method: 'get'
  })
}

export function getCodeImg() {
  return request({
    url: 'auth/code',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: 'auth/logout',
    method: 'delete'
  })
}
