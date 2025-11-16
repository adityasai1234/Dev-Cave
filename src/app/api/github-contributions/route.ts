import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get('username')

  if (!username) {
    return NextResponse.json({ error: 'Username is required' }, { status: 400 })
  }

  try {
    const response = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch contributions')
    }

    const html = await response.text()
    
    const svgMatch = html.match(/<svg[^>]*class="[^"]*js-calendar-graph-svg[^"]*"[^>]*>([\s\S]*?)<\/svg>/)
    
    if (!svgMatch) {
      throw new Error('SVG not found')
    }

    const svgContent = svgMatch[0]
    const rectMatches = svgContent.matchAll(/<rect[^>]*data-level="(\d+)"[^>]*>/g)
    
    const contributionData: number[] = []
    for (const match of rectMatches) {
      contributionData.push(parseInt(match[1], 10))
    }

    return NextResponse.json({ contributions: contributionData })
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contributions', contributions: [] },
      { status: 500 }
    )
  }
}

