import get from 'lodash.get'

const axios = require('axios').create({
  baseURL: 'https://my-json-server.typicode.com/n00ne1mportant/placeholder_api'
})

export const GenerateRandomString = (len) => len > 4
  ? GenerateRandomString(len - 4).concat(Math.random().toString(36).substring(1, 5))
  : Math.random().toString(36).substring(1, len) // can generate up to 5 chars

export const ScrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export const ExecuteOnRef = (ref, method) => ref.current[method]()

export const GetViewportSize = () => {
  if (typeof window !== `undefined` && typeof document !== `undefined`) {
    return {
      height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
      width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    }
  } else {
    return {
      height: 900,
      width: 1800
    }
  }
}

export const delay = ms => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const responseMapper = map => object => {
  const r = {}

  Object.keys(map).forEach(key => {
    r[key] = get(object, map[key])
  })

  return r
}

export const api = {
  get: async (url, params) => axios.get(url, {
    baseURL: 'https://my-json-server.typicode.com/n00ne1mportant/placeholder_api',
    params
  })
}

export const mappers = {
  blogList: {
    'posts': 'allContentfulBlogPost.nodes'
  },
  blogPosts: {
    'body': 'body.body',
    'coverImage': 'coverImage.fluid',
    'id': 'body.id',
    'slug': 'slug',
    'summary': 'summary.internal.content',
    'title': 'title',
    'updatedAt': 'updatedAt'
  }
}
