import request from '@/utils/request'

export function getList(params) {
  return request({
    url: '/vue-admin-template/table/list',
    method: 'get',
    params
  })
}

export function start(params) {
  return request({
    url: '/start',
    method: 'get',
    params
  })
}

export function remake() {
  return request({
    url: '/remake',
    method: 'get'
  })
}

export function record(params) {
  return request({
    url: '/result',
    method: 'get',
    params
  })
}
