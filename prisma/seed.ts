import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

type ParticipantIds = {
  id1: string;
  id2: string;
  id3: string;
};

async function seed() {
  // Create 3 users
  const users = await getUsers();

  const [user1, user2, user3] = await Promise.all(
    users.map((user) => {
      return db.user.create({ data: user });
    })
  );

  // Create a Test Exchange
  const exchange = await db.exchange.create({
    data: { title: "Test Exchange", ownerId: user1.id }
  });

  const tmp = {
    address1: "125 W 25th St",
    address2: "11th Floor",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    dogType: "Corgi",
    userId: "",
    exchangeId: exchange.id
  };

  // Make Users participants of exchange
  // Grab 3 UUIDs to use as participantIds
  const [participantIds] = await db.$queryRaw<
    Array<ParticipantIds>
  >`SELECT gen_random_uuid() AS "id1", gen_random_uuid() AS "id2", gen_random_uuid() AS "id2" `;
  const [participant1, participant2, participant3] = await Promise.all(
    [
      {
        ...tmp,
        id: participantIds.id1,
        userId: user1.id,
        referrerId: participantIds.id2
      },
      {
        ...tmp,
        id: participantIds.id2,
        userId: user2.id,
        referrerId: participantIds.id3
      },
      {
        ...tmp,
        id: participantIds.id3,
        userId: user3.id,
        referrerId: participantIds.id1
      }
    ].map((participant) => {
      return db.participant.create({ data: participant });
    })
  );
}

async function getUsers() {
  return [
    {
      name: "Craig the Cockroach",
      email: "devrel+craig@cockroachlabs.com",
      passwordHash: await bcrypt.hash("resilience", 10)
    },
    {
      name: "Cindy",
      email: "devrel+cindy@cockroachlabs.com",
      passwordHash: await bcrypt.hash("scale", 10)
    },
    {
      name: "Clyde",
      email: "devrel+clyde@cockroachlabs.com",
      passwordHash: await bcrypt.hash("distributive", 10)
    }
  ];
}

seed();
