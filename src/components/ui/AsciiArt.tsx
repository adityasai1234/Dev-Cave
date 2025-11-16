'use client'

import { Box, Text } from '@chakra-ui/react'

interface AsciiArtProps {
  art: string
  fontSize?: string
}

export default function AsciiArt({ art, fontSize = 'sm' }: AsciiArtProps) {
  return (
    <Box
      as="pre"
      fontFamily="mono"
      fontSize={fontSize}
      lineHeight="1.2"
      whiteSpace="pre"
      overflow="auto"
      color="inherit"
    >
      {art}
    </Box>
  )
}

