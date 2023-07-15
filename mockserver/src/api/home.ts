import { Router } from 'express'
import { APISetUpper } from '.'
import { randomWait } from '../util/random_wait'
import {  homecontent } from './gen/protobuf_generated'
import { sendResponse } from '../util/send_response'

export const setupHomeAPI = (r: Router): void => {
  r.get('/home', (req, res) => {
    res.send('Hello world')
  })
  r.get('/home/contents', async (req, res) => {
    await randomWait(2)

    sendResponse(
      res,
      homecontent.HomeContentResponse.encode(homeContents).finish(),
    )
  })
}

const contents: homecontent.IContent[] = [
  {
    title: "ぶんちょうぶんちょうぶんちょうぶんちょうぶんちょう",
    thumbnail: "/img/buncho.1.jpg",
  },
  {
    title: "ブンチョウブンチョウブンチョウブンチョウブンチョウ",
    thumbnail: "/img/buncho.2.jpg",
  },
  {
    title: "文鳥文鳥文鳥文鳥文鳥文鳥文鳥文鳥文鳥文鳥",
    thumbnail: "/img/buncho.3.jpg",
  },
  {
    title: "bunchobunchobunchobunchobunchobuncho",
    thumbnail: "/img/buncho.4.jpg",
  },
  {
    title: "部長部長部長部長部長部長部長部長部長部長部長",
    thumbnail: "/img/buncho.5.jpg",
  },
  {
    title: "ぶんちょう",
    thumbnail: "/img/buncho.6.jpg",
  },
  {
    title: "ブンチョウ",
    thumbnail: "/img/buncho.7.jpg",
  },
  {
    title: "文鳥",
    thumbnail: "/img/buncho.8.jpg",
  },
  {
    title: "buncho",
    thumbnail: "/img/buncho.9.jpg",
  },
  {
    title: "部長",
    thumbnail: "/img/buncho.10.jpg",
  },
]
const homeContents: homecontent.HomeContentResponse = {
  contentRows: [
    {
      rowHeader: "新作",
      contentType: homecontent.ContentType.CONTENT_TYPE_VIDEO,
      contents: contents
    },
    {
      rowHeader: "検索で人気の作品",
      contentType: homecontent.ContentType.CONTENT_TYPE_VIDEO,
      contents: contents
    },
    {
      rowHeader: "視聴中コンテンツ",
      contentType: homecontent.ContentType.CONTENT_TYPE_VIDEO,
      contents: contents
    },
    {
      rowHeader: "人気急上昇の作品",
      contentType: homecontent.ContentType.CONTENT_TYPE_VIDEO,
      contents: contents
    },
    {
      rowHeader: "「文鳥」をご覧になったあなたへ",
      contentType: homecontent.ContentType.CONTENT_TYPE_VIDEO,
      contents: contents
    },
  ]
}

export default setupHomeAPI as APISetUpper