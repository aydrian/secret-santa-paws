import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

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
  const [participant1, participant2, participant3] = await Promise.all(
    [
      { ...tmp, userId: user1.id },
      { ...tmp, userId: user2.id },
      { ...tmp, userId: user3.id }
    ].map((participant) => {
      return db.participant.create({ data: participant });
    })
  );

  // Update referrerIds in round
  await Promise.all([
    db.participant.update({
      data: { referrerId: participant2.id },
      where: { id: participant1.id }
    }),
    db.participant.update({
      data: { referrerId: participant3.id },
      where: { id: participant2.id }
    }),
    db.participant.update({
      data: { referrerId: participant1.id },
      where: { id: participant3.id }
    })
  ]);
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
