import { NextResponse } from 'next/server'

interface AuctionItem {
  id: string
  name: string
  timeLeft: string
}

const auctionItems: AuctionItem[] = [
  {
    id: 'h100-auction',
    name: 'H100 Auction',
    timeLeft: '4 hours left'
  },
  {
    id: 'h200-auction',
    name: 'H200 Auction',
    timeLeft: '4 hours left'
  },
  {
    id: 'a100-auction',
    name: 'A100 Auction',
    timeLeft: '4 hours left'
  },
  {
    id: 'a200-auction',
    name: 'A200 Auction',
    timeLeft: '4 hours left'
  },
  {
    id: 'b100-auction',
    name: 'B100 Auction',
    timeLeft: '4 hours left'
  },
  {
    id: 'b200-auction',
    name: 'B200 Auction',
    timeLeft: '4 hours left'
  }
]

export async function GET() {
  // Simulate server delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  return NextResponse.json({
    auctions: auctionItems,
    total: auctionItems.length
  })
}