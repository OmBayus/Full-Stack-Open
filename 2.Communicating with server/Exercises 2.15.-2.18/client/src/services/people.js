import axios from 'axios'
const baseUrl = 'http://localhost:4000/people'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => {
      return response.data
    })
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => {
      return response.data
    })
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => {
      return response.data
    })
}

const Delete = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request
}

export default { getAll, create, update,Delete }