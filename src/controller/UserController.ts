import { Controller, Query, Mutation } from 'vesper';
import { EntityManager } from 'typeorm';
import { User } from "../entity/User";

@Controller()
export class UserController {
  constructor(private entityManager: EntityManager) {
  }

  // serves "posts: [Post]" requests
  @Query()
  users() {
    return this.entityManager.find(User);
  }

  // serves "post(id: Int): Post" requests
  @Query()
  user({ id }) {
    return this.entityManager.findOne(User, id);
  }

  // serves "postSave(id: Int, title: String, text: String): Post" requests
  @Mutation()
  userSave(args) {
    const post = this.entityManager.create(User, args);
    return this.entityManager.save(User, post);
  }

  // serves "postDelete(id: Int): Boolean" requests
  @Mutation()
  async userDelete({ id }) {
    await this.entityManager.remove(User, { id: id });
    return true;
  }
}
