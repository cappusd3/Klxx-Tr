<template lang="html">
  <div id="vHead" class="main-header-box">
    <header class="main-header">
      <div class="container">
        <a href="#" class="logo">
          <img src="../assets/logo.png" alt="">
        </a>
        <nav class="main-nav">
          <ul class="nav-list">
            <div class="main-nav-list">
              <div class="phone-hide">
                <li class="nav-item link-item">
                  <a href="#">首页</a>
                </li>
                <li class="nav-item link-item">
                  <a href="#">专栏</a>
                </li>
                <li class="nav-item link-item">
                  <a href="#">收藏集</a>
                </li>
                <li class="nav-item link-item">
                  <a href="#">发现</a>
                </li>
              </div>
            </div>
            <!-- search input -->
            <li class="nav-item search">
              <Input
                class="search-input"
                icon="search"
                placeholder="请输入关键字"
                v-model="searchKey"
                @on-click="handleIconClick">
              </Input>
            </li><!-- end .search -->
            <li class="nav-item add">
              <Icon class="icon" type="plus"></Icon>
            </li>
            <li class="nav-item notification">
              <Icon class="icon" type="star"></Icon>
            </li>
            <li class="nav-item menu">
              <div class="avatar" @click="toggleDropDownList">
              </div>
              <ul class="nav-menu user-dropdown-list" v-show="!dropDownHide">
                <div class="nav-menu-item-group" v-for="group of dropDownList">
                  <li class="nav-menu-item" v-for="item of group.group">
                    <a href="#">
                      <i class="fa" :class="item.icon"></i>
                      {{ item.label }}
                    </a>
                  </li>
                </div>
              </ul>
            </li>
          </ul><!-- end .nav-list -->
        </nav><!-- end .main-nav -->
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'vHead',
  data () {
    return {
      searchKey: '',
      dropDownHide: true,
      dropDownList: [{
        group: [{
          icon: 'fa-address-book',
          label: '我的主页'
        }, {
          icon: 'fa-handshake-o',
          label: '我喜欢的'
        }, {
          icon: 'fa-meetup',
          label: '管理也'
        }]
      }, {
        group: [{
          icon: 'fa-ravelry',
          label: '设置'
        }, {
          icon: 'fa-handshake-o',
          label: '登出'
        }, {
          icon: 'fa-meetup',
          label: '关于'
        }]
      }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleIconClick () {
      console.log('handleIconClickOfSerach')
    },
    toggleDropDownList () {
      this.dropDownHide = !this.dropDownHide
    }
  }
}
</script>

<style lang="scss" scoped>
  #vHead.main-header-box {
    position: relative;
    height: 6rem;
    .fa {
      display: inline-block;
      width: 1em;
      height: 1em;
      margin-right: .8rem;
      font-size: 1.2em;
      vertical-align: middle;
      color: #b2bac2;
    }
    .main-header {
      background: #fff;
      border-bottom: 1px solid #f1f1f1;
      color: #909090;
      height: 5rem;
      z-index: 250;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      .container {
        max-width: 960px;
        margin: auto;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        height: 100%;

        .logo img {
          width: 4rem;
          margin-right: 2rem;
        }

        .main-nav {
          height: 100%;
          -webkit-box-flex: 1;
          -ms-flex: 1 0 auto;
          flex: 1 0 auto;

          .nav-list {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            height: 100%;
            margin: 0;

            .main-nav-list {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
            }

            .phone-hide {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex
            }


            .nav-item,.nav-list {
              display: -webkit-box;
              display: -ms-flexbox;
              display: flex;
              -webkit-box-align: center;
              -ms-flex-align: center;
              align-items: center;
              height: 100%;
              margin: 0;
            }

            .nav-item {
              color: #71777c;
              padding: 0 1.5rem;
              font-size: 1.33rem;
              -webkit-box-pack: center;
              -ms-flex-pack: center;
              justify-content: center;
              cursor: pointer;
            }

            .nav-item:hover>a {
              color: #007fff
            }

            .nav-item:last-child {
              padding-right: 0
            }

            .nav-item.link-item {
              padding: 0 2rem;
              height: 5rem
            }

            .nav-item.search {
              -webkit-box-flex: 1;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              -webkit-box-pack: end;
              -ms-flex-pack: end;
              justify-content: flex-end;
              cursor: auto;
            }

            .nav-item.add {
              position: relative;
            }

            .nav-item.add:hover .icon,.nav-item.notification:hover .icon {
              color: #007fff
            }

            .nav-item.menu {
              position: relative
            }

            .nav-item.submit {
              color: #007fff;
              position: relative
            }

            .nav-item.submit:hover {
              color: #0371df
            }

            .nav-item.submit:after {
              content: "|";
              position: absolute;
              top: 20px;
              left: 100%;
              color: hsla(0,0%,59%,.4)
            }

            .nav-item.submit .submit-panel {
              position: absolute;
              top: 105%;
              left: -123px;
              width: 326px;
              box-sizing: border-box;
              padding: 2.5rem;
              border-radius: 2px;
              color: #909090;
              font-size: 1.1rem;
              background-color: #fff;
              box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
              border: 1px solid hsla(220,6%,72%,.5);
              cursor: default;
              z-index: 11
            }

            .nav-item.submit .submit-panel:before {
              content: "";
              position: absolute;
              top: 0;
              left: 50%;
              width: 1rem;
              height: 1rem;
              border-top: 1px solid hsla(220,6%,72%,.5);
              border-left: 1px solid hsla(220,6%,72%,.5);
              background-color: #fff;
              -webkit-transform: rotate(45deg) translate(-50%,-50%);
              transform: rotate(45deg) translate(-50%,-50%);
              -webkit-transform-origin: 0 0;
              transform-origin: 0 0
            }

            .nav-item.submit .submit-panel .title {
              font-size: 1.4rem;
              line-height: 1;
              font-weight: 700;
              color: #000;
              text-align: center;
              margin-bottom: 2rem
            }

            .nav-item.submit .submit-panel .benefit-list {
              margin-left: 2rem
            }

            .nav-item.submit .submit-panel .item {
              list-style: initial;
              margin-bottom: 1rem
            }

            .nav-item.submit .submit-panel .link {
              color: #6cbd45;
              text-decoration: underline
            }

            .nav-item.submit .submit-panel button {
              display: block;
              margin: 2rem auto 0;
              background-color: #83c73a;
              font-size: 1.2rem;
              padding: 1rem 4rem
            }

            .nav-item.menu {
              position: relative;
            }

            .avatar {
              width: 2.5rem;
              height: 2.5rem;
              border-radius: 50%;
              background-image:url('../assets/logo.png');
              display: inline-block;
              background-position: 50%;
              background-size: cover;
              background-repeat: no-repeat;
            }
            .nav-menu {
              position: absolute;
              width: 11rem;
              left: 50%;
              top: 100%;
              -webkit-transform: translateX(-50%);
              transform: translateX(-50%);
              margin: 0;
              padding: 0;
              list-style: none;
              background-color: #fff;
              box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
              border: 1px solid hsla(217,5%,71%,.45);
              border-radius: 4px;
              font-size: 1.2rem;

              .nav-menu-item-group {
                padding: 1rem 0;
              }

              .nav-menu-item {
                font-size: 1.3rem;
                cursor: pointer;

                a {
                  padding: .5rem 1rem;
                  display: block;
                  color: #71777c;
                }
              }

              .nav-menu-item:hover {
                background-color: hsla(0,0%,95%,.5)
              }
            }
            .nav-menu.user-dropdown-list {
              width: 13rem;
              right: 0;
              left: auto;
              -webkit-transform: translateX(0);
              transform: translateX(0)
            }

            .nav-menu.user-dropdown-list .nav-menu-item-group:not(:last-child) {
              border-bottom: 1px solid rgba(0,0,0,.04)
            }

          }
        }
      }
    }
  }
</style>
