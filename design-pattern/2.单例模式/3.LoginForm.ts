
class LoginForm {
  private state = 'hide'

  private constructor() {}

  show() {
    if(this.state = 'show') {
      console.log('已经显示了')
      return
    }
    console.log('显示LoginForm')
     // dom操作逻辑
    this.state = 'show'
  }

  hide() {
    if(this.state = 'hide') {
      console.log('已经隐藏了')
      return
    }
    console.log('隐藏LoginForm')
    // dom操作逻辑
    this.state = 'hide'
  }

  private static instance

  static getInstance () {
    if(LoginForm.instance === null) LoginForm.instance = new LoginForm()
    return LoginForm.instance
  }
}