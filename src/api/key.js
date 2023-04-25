import request from '@/utils/request'

export function getKeys() {
  return request({
    url: '/admin/keys/',
    method: 'get'
  })
}

export function addKey(data) {
  return request({
    url: '/admin/keys/add',
    method: 'post',
    data
  })
}

export function updateKey(id, data) {
  return request({
    url: `/admin/keys/update/${id}`,
    method: 'put',
    data
  })
}

export function deleteKey(id) {
  return request({
    url: `/admin/keys/delete/${id}`,
    method: 'delete'
  })
}
