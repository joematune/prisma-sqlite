// https://www.prisma.io/docs/getting-started/quickstart-typescript

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  const post = await prisma.post.create({
    data: {
      title: 'Joe writes his first post!',
      content: 'Writing writing writing',
      published: true,
      author: {
        connect: {
          email: 'joe@matu.ne'
        }
      }
    },
  })
  console.log(post)

  const allUsers = await prisma.user.findMany({
    include: { posts: true },
  })
  console.dir(allUsers, { depth: null })
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
