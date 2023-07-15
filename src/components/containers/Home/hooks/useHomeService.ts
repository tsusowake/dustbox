'use client'

import useSWR from 'swr'

import { homecontent, image } from '@/api/gen/protobuf_generated'
import { fetchHomeContents } from '@/api/home'
import { fetchImages } from '@/api/image'
import { HooksReturnType } from 'types'

type DataType = {
  images: image.IImage[]
  homeContents: homecontent.IContentRow[]
}

export const useHomeService: HooksReturnType<DataType> = () => {
  const { data: images, error: imagesErr, isLoading: imagesIsLoading } = useSWR('/images', fetchImages)
  const {
    data: homeContents,
    error: homeContentsError,
    isLoading: homeContentsIsLoading,
  } = useSWR('/home/contents', fetchHomeContents)

  const errors = [imagesErr, homeContentsError].filter((err) => !!err)

  return {
    data:
      images && homeContents
        ? {
            images: images.images,
            homeContents: homeContents.contentRows,
          }
        : null,
    isLoading: (imagesIsLoading || homeContentsIsLoading) ?? false,
    errors: errors.length ? errors : null,
  }
}
