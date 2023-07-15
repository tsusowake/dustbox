import React, { AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'

type Props = {
  className?: string
  onClick?: AnchorHTMLAttributes<HTMLAnchorElement>['onClick']
} & React.ComponentProps<typeof NextLink>

export const Link: React.FC<Props> = ({ className, onClick, children, href, ...nextLinkProps }) => (
  <NextLink href={href} {...nextLinkProps} className={className} onClick={onClick}>
    {children}
  </NextLink>
)
