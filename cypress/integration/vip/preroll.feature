Feature: 播放器廣告功能

  我是 VIP 會員，看一般戲劇時不會有廣告
  
  Background: 我登入 VIP 帳號
    Given 我在首頁
    When 我在 Header Navbar 點擊「登入」
    Then 登入 Modal 跳出，我點擊 "登入"
    Then Modal 列出選項，我點擊 "信箱"
    Then 我進到 Email 登入頁
    Then 我輸入 "VIP" 帳密，並登入
    Then 我回到首頁

  Scenario Outline: VIP 會員，不分平台，看一般戲劇，不會有廣告
  Given 我進到 <Device> 戲劇播放頁 - <Drama Type>
  Then 播放器不會出現廣告

  @desktop
  Examples: 
    | Device    | Drama Type |
    | "Desktop" | "一般"      |

  @mobile
  Examples: 
    | Device    | Drama Type |
    | "Mobile" | "一般"      |