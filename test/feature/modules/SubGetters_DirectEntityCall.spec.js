import { createStore } from 'test/support/Helpers'
import Model from 'app/model/Model'

describe('Features – Sub Getters – Direct Entity Call', () => {
  it('can directly call entity to fetch the repo instance', () => {
    class User extends Model {
      static entity = 'users'

      static fields () {
        return {
          id: this.attr(null),
          name: this.attr('JD')
        }
      }
    }

    const store = createStore([{ model: User }])

    store.dispatch('entities/users/create', {
      data: { id: 1, name: 'John Doe' }
    })

    const users = store.getters['entities/users']().get()

    expect(users.length).toBe(1)
    expect(users[0]).toBeInstanceOf(User)
  })
})
