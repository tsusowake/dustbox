import { image } from '@/api/gen/protobuf_generated'

type Props = {
  data: image.IImage[]
}

export const useHomeData = ({ data }: Props) => {
  const images =
    data.map(({ src, alt }) => ({
      src: src || '',
      alt: alt || '',
    })) ?? []

  return {
    images,
  }
}
