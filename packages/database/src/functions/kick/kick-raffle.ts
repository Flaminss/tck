import { prisma } from '../../client';

export async function createKickRaffle(
  duration: number,
  reward: number,
  creator: string
): Promise<boolean> {
  if (duration < 1 || reward < 1) {
    return false;
  }

  const authorizedUser = await prisma.user.findFirst({
    where: {
      accounts: {
        kick: {
          kickUsername: creator
        }
      }
    }
  });
  if (!authorizedUser) {
    return false;
  }
  if (!authorizedUser.permissions.includes('CREATE_KICK_RAFFLE')) {
    return false;
  }

  // Create raffle.
  await prisma.kickRaffle.create({
    data: {
      duration,
      reward,
      timestamp: Date.now(),
      entries: []
    }
  });

  return true;
}
