import { setTimeout } from 'timers/promises'

export async function randomWait(maxSec: number): Promise<void> {
  const sec = Math.floor(Math.random() * maxSec)
  return await setTimeout<void>(sec * 1000)
}
