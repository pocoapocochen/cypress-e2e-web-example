Feature: 播放器廣告功能

  我是匿名訪客，看一般戲劇時會有廣告

  Background: 我未登入

  Scenario Outline: 匿名訪客，不分平台，看一般戲劇，會有廣告
  Given 我進到 <Device> 戲劇播放頁 - <Drama Type>
  Then 播放器出現廣告

  @desktop
  Examples: 
    | Device    | Drama Type |
    | "Desktop" | "一般"      |

  @mobile
  Examples: 
    | Device    | Drama Type |
    | "Mobile"  | "一般"      |