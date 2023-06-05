import { db } from '@/lib/db'
import { user } from '@/lib/db/schema'

// oh yeah, this is the future
export const runtime = 'edge'

export default async function Home() {
  const users = await db.select().from(user)

  const createUser = async () => {
    'use server'

    await db.insert(user).values({ fullName: 'John Doe' })
  }

  return (
    <>
      <p>my users:</p>
      {users.map((user) => (
        <div key={user.id}>{user.fullName}</div>
      ))}

      <form action={createUser}>
        <button>create user</button>
      </form>
    </>
  )
}
