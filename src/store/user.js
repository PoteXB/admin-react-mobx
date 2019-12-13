import { observable, action } from 'mobx';
class User {
  @observable userInfo = {};
  @action setUserInfo(userData) {
    if (userData) {
      this.userInfo = userData;
    }
  }
}
let user = new User();
export default user;
